import datetime

from ..environment import env


JWT_AUTH_COOKIE = env.str("HONEY_MONEY_JWT_AUTH_COOKIE", default="jwtv4")
JWT_AUTH = {
    "JWT_ALLOW_REFRESH": True,
    "JWT_AUTH_COOKIE": JWT_AUTH_COOKIE,
    "JWT_EXPIRATION_DELTA": datetime.timedelta(seconds=env.int("HONEY_MONEY_JWT_EXPIRATION_DELTA", default=300)),
}
