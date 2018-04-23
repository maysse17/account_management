FROM alpine-base-0.1

# User and group
ARG USER
ARG GROUP
# Work directorie
ARG WORKDIR
# Django in Production or Development mode
ARG DJANGO_ENV

ENV DJANGO_ENV=${DJANGO_ENV:-production}

ENV USER=${USER:-django} GROUP=${GROUP:-django}

ENV APPDIR=${WORKDIR:-app}

ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100

RUN addgroup -S ${GROUP} && \
  adduser -S -G ${USER} ${GROUP}

RUN mkdir -p /${APPDIR}/logs

RUN mkdir -p /scripts/config
RUN mkdir /scripts/bash

COPY ./requirements.txt /requirements.txt

RUN apk update \
      && apk add postgresql-libs \
      && apk add --no-cache --virtual build_deps python3-dev ca-certificates libffi-dev gcc g++ musl-dev linux-headers tzdata postgresql-dev \
      && pip install -r requirements.txt \
      && cp /usr/share/zoneinfo/America/New_York /etc/localtime \
      && echo "America/New_York" > /etc/timezone \
      && apk del build_deps \
      && rm -r /root/.cache

COPY ./compose/django/gunicorn.sh /scripts/bash/gunicorn.sh
COPY ./compose/django/gunicorn.conf /scripts/config/gunicorn.conf
RUN sed -i 's/\r//' /scripts/bash/gunicorn.sh && \
    chmod +x /scripts/bash/gunicorn.sh && \
    chown ${USER} /scripts/bash/gunicorn.sh

COPY ./compose/django/entrypoint.sh /scripts/bash/entrypoint.sh
RUN sed -i 's/\r//' /scripts/bash/entrypoint.sh && \
    chmod +x /scripts/bash/entrypoint.sh && \
    chown ${USER} /scripts/bash/entrypoint.sh

COPY ./compose/django/start.sh /scripts/bash/start.sh
RUN sed -i 's/\r//' /scripts/bash/start.sh && \
    chmod +x /scripts/bash/start.sh && \
    chown ${USER} /scripts/bash/start.sh

RUN mkdir -p /home/django/ && \
    touch /home/django/.ptpython_history && \
    sed -i 's/\r//' /home/django/.ptpython_history && \
    chmod +x /home/django/.ptpython_history && \
    chown ${USER} /home/django/.ptpython_history

COPY . /${APPDIR}
WORKDIR /${APPDIR}

RUN chown -R ${USER} /${APPDIR}
USER ${USER}

ENTRYPOINT ["/scripts/bash/entrypoint.sh"]
