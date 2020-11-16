mongo_root_username = urllib.parse.quote_plus(os.getenv('MONGO_ROOT_USERNAME'))
mongo_root_password = urllib.parse.quote_plus(os.getenv('MONGO_ROOT_PASSWORD'))

# замените user, password, ds049945.mongolab.com, example на ваши данные доступа к БД.
# MONGO_URI = "mongodb://user:password@ds049945.mongolab.com:49945/example"
MONGO_URI = 'mongodb://%s:%s@mongo:27017/' % (mongo_root_username, mongo_root_password)

# По умолчанию Eve запускает API в режиме "read-only" (т.е. поддерживаются только GET запросы),
# мы включаем поддержку методов POST, PUT, PATCH, DELETE.
# RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
# ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']
# RESOURCE_METHODS = ['GET']
# ITEM_METHODS = ['GET']

# DOMAIN = {
#     # Описываем ресурс `/users`
#     'users': {
#         # Здесь мы описываем модель данных. Для валидации используется модуль Cerberus от автора Eve.
#         # Вы можете ознакомиться с ним в официальной документации модуля http://docs.python-cerberus.org/en/stable/.
#         # Либо прочитать заметки в официальной документации EVE http://python-eve.org/validation.html#validation.
#         'schema': {
#             'username': {
#                 'type': 'string',
#                 'minlength': 5,
#                 'maxlength': 32,
#                 'required': True,
#                 # уникальное поле (индекс не создаётся, просто значение должно быть уникальным)
#                 'unique': True,
#             },
#             'firstname': {
#                 'type': 'string',
#                 'minlength': 1,
#                 'maxlength': 10,
#                 'required': True,
#             },
#             'lastname': {
#                 'type': 'string',
#                 'minlength': 1,
#                 'maxlength': 15,
#                 'required': True,
#             },
#             'role': {
#
#                 'type': 'list',  # тип: список
#                 'allowed': ["author", "contributor"],  # разрешаем использовать значения: "author", "contributor"
#             },
#             'location': {
#                 'type': 'dict',  # тип: словарь
#                 # описываем "схему" словаря
#                 'schema': {
#                     'address': {'type': 'string'},
#                     'city': {'type': 'string'}
#                 },
#             },
#             'born': {
#                 'type': 'datetime',
#             },
#             'active': {
#                 'type': 'boolean',
#                 'default': True
#             }
#         }
#     },
#
#     # Описываем ресурс `/groups`
#     'groups': {
#         # Описываем модель данных (см. выше).
#         'schema': {
#             'title': {
#                 'type': 'string',
#                 'minlength': 5,
#                 'maxlength': 32,
#                 'required': True,
#                 'unique': True
#             },
#             'users': {
#                 'type': 'list',  # тип: список
#                 'default': [],  # по умолчанию: пустой список
#                 # описываем "схему" списка
#                 'schema': {
#                     'type': 'objectid',  # тип данных: objectid
#                     # ссылаемся на запись в другой коллекции
#                     'data_relation': {
#                         'resource': 'users',  # на ресурс `users` (который мы описали выше)
#                         'field': '_id',  # на поле `_id`
#                         'embeddable': True
#                     }
#                 }
#             }
#         }
#     }
# }

DOMAIN = {
    # Описываем ресурс `/links`
    'links': {
        # Здесь мы описываем модель данных. Для валидации используется модуль Cerberus от автора Eve.
        # Ознакомиться с ним в официальной документации модуля http://docs.python-cerberus.org/en/stable/.
        # Либо прочитать заметки в официальной документации EVE http://python-eve.org/validation.html#validation.
        'schema': {
            'link': {
                'type': 'string',
                'required': True,
                # уникальное поле (индекс не создаётся, просто значение должно быть уникальным)
                'unique': True,
            },
            'data': {
                'type': 'string',
                'required': True,
            },
        }
    },
}