from ..django import TIME_ZONE as DJANGO_TIME_ZONE
from ..environment import env


CELERY_TASK_ALWAYS_EAGER = env.bool("HONEY_MONEY_CELERY_TASK_ALWAYS_EAGER", default=False)
CELERY_BROKER_URL = env.str("HONEY_MONEY_CELERY_BROKER", default="redis://redis:6379/1")
CELERY_RESULT_BACKEND = env.str("HONEY_MONEY_CELERY_RESULT_BACKEND", default="rpc://")

CELERY_ACCEPT_CONTENT = ["application/json"]
CELERY_TASK_SERIALIZER = CELERY_RESULT_SERIALIZER = "json"
CELERY_TIMEZONE = DJANGO_TIME_ZONE

CELERYBEAT_SCHEDULE = {}
