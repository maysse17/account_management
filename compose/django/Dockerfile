FROM aslm-0.2


ARG DJANGO_ENV=production
ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100

COPY ./requirements.txt /requirements.txt

RUN apk update \
      && apk add postgresql-libs \
      && apk add --no-cache --virtual build_deps python3-dev ca-certificates libffi-dev gcc g++ musl-dev linux-headers tzdata postgresql-dev \
      && pip install -r requirements.txt \
      && cp /usr/share/zoneinfo/America/New_York /etc/localtime \
      && echo "America/New_York" > /etc/timezone \
      && apk del build_deps

RUN addgroup -S django && \
  adduser -S -G django django

COPY ./compose/django/gunicorn.sh /gunicorn.sh
RUN sed -i 's/\r//' /gunicorn.sh && \
    chmod +x /gunicorn.sh && \
    chown django /gunicorn.sh

COPY ./compose/django/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh && \
    chmod +x /entrypoint.sh && \
    chown django /entrypoint.sh

COPY ./compose/django/start.sh /start.sh
RUN sed -i 's/\r//' /start.sh && \
    chmod +x /start.sh && \
    chown django /start.sh

RUN mkdir -p /home/django/ && \
    touch /home/django/.ptpython_history && \
    sed -i 's/\r//' /home/django/.ptpython_history && \
    chmod +x /home/django/.ptpython_history && \
    chown django /home/django/.ptpython_history

RUN apk --purge del build_deps

COPY . /app
WORKDIR /app

RUN chown -R django /app
USER django

ENTRYPOINT ["/entrypoint.sh"]
