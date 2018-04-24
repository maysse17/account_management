#!/usr/bin/env sh

set -o errexit
set -o pipefail

# todo: turn on after #1295
# set -o nounset

if [ -n "$DJANGO_ENV" ]; then
echo $DJANGO_ENV
fi

if [ "$DJANGO_ENV" == "production" ]
then
  echo "Start django with gunicorn server."
  cmd= /scripts/bash/gunicorn.sh
elif [ "$DJANGO_ENV" == "development" ]
then
  echo "Start django with development server."
  cmd= /scripts/bash/start.sh
fi

# This entrypoint is used to play nicely with the current cookiecutter configuration.
# Since docker-compose relies heavily on environment variables itself for configuration, we'd have to define multiple
# environment variables just to support cookiecutter out of the box. That makes no sense, so this little entrypoint
# does all this for us.
export REDIS_URL=redis://redis:6379

# the official postgres image uses 'postgres' as default user if not set explictly.
if [ -z "$POSTGRES_USER" ]; then
    export POSTGRES_USER=postgres
fi

export DATABASE_URL=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@postgres:$POSTGRES_PORT/$POSTGRES_USER

function postgres_ready(){
python << END
import sys
import psycopg2
try:
    conn = psycopg2.connect(dbname="$POSTGRES_USER", user="$POSTGRES_USER", password="$POSTGRES_PASSWORD", host="postgres", port=$POSTGRES_PORT)
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)
END
}

until postgres_ready; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - continuing..."
exec $cmd
