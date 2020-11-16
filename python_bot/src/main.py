import os
import calendar
import time
import random
import string
import logging
import sys
import urllib.parse
import json

from rutermextract import TermExtractor
from typing import List
from pymongo import MongoClient
from telegram.ext import Updater
from telegram.ext import MessageHandler, Filters
from telegram.ext import CommandHandler

token = os.getenv('TOKEN')
# mongo_ip = os.getenv('mongo')
mongo_root_username = urllib.parse.quote_plus(os.getenv('MONGO_ROOT_USERNAME'))
mongo_root_password = urllib.parse.quote_plus(os.getenv('MONGO_ROOT_PASSWORD'))
mongo_database = os.getenv('MONGO_DATABASE')

### --- отладка

# prints

# print("TOKEN: %s" % token)
# print("MONGO IP: %s" % mongo_ip)
# print('mongodb://%s:%s@0.0.0.0:27017/' % (mongo_root_username, mongo_root_password))
# print('mongodb://%s:%s@mongo:27017/' % (mongo_root_username, mongo_root_password))

# term extractor

# term_extractor = TermExtractor()
# test_text = """Турагенты не владеют средствами обслуживания и выступают посредниками между предприятием туристского обслуживания и покупателем туристской путевки, продвигая и реализуя туристский продукт.
# С законодательством, закрепляющим деятельность туристских агентств и туроператоров в Российской Федерации, можно ознакомиться на сайте федерального агентства по туризму.
# В России туристический бизнес стал активно развиваться в 1990-х. В 1993 была учреждена Российская ассоциация туристических агентств (РАТА), которая в 2002 была преобразована в Российский союз туриндустрии (РСТ)[4].
# Одна из проблем в сфере правового регулирования взаимоотношений между страховыми компаниями и туроператорами заключается в отсутствии законодательного запрета на смену статуса компаний, осуществляющих реализацию туристского продукта конечным потребителям (туристам). Это означает, что компания, реализующая турпродукт, может «перейти» из статуса туроператора в статус турагентства, то есть вместо туроператорской деятельности (по формированию, продвижению и реализации туристского продукта) начать осуществлять турагентскую деятельность (по продвижению и реализации туристского продукта). В силу действующего законодательства, турагент не несет ответственности по страховым полисам, проданным туроператором. Это означает, что на практике не исключена ситуация, когда потребитель (турист), приобретший турпродукт у подобного турагента («бывшего туроператора»), при наступлении страхового случая столкнется с трудностями при получении страхового возмещения."""
# # print(test_text)
# definition_list: List[List] = list()
# for term in term_extractor.__call__(
#         test_text,
#         # nested=True
#         nested=False
# ):
#     # print(term.count)
#     definition_list.append([term.normalized, term.count])
#
# print(definition_list)
# f = open('/usr/src/app/src/log.txt', 'w')
# f.write('definition_list = ' + repr(definition_list) + '\n')
# f.close()

# mongo

# # client = MongoClient()
# # client = MongoClient('localhost', 27017)
# client = MongoClient('mongodb://%s:%s@mongo:27017/' % (mongo_root_username, mongo_root_password))
#
# db = client[mongo_database]
# links = db.container # collection
#
# ts = calendar.timegm(time.gmtime())
# letters = string.ascii_lowercase
# randomString = ''.join(random.choice(letters) for i in range(10))
# linkSlug = '%s-%s' % (ts, randomString)
#
# link = {'link': linkSlug, 'data': "[['туристский продукт', 4]]"}
# link_id = links.insert_one(link).inserted_id
# print(link_id)

# exit

# sys.exit()

###

### --- bot logic

# mongo connect

client = MongoClient('mongodb://%s:%s@mongo:27017/' % (mongo_root_username, mongo_root_password))
db = client[mongo_database]
links = db.container # collection

# functions

def start(update, context):
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="Привет. Введи текст, и я извлеку из него ключевые слова!"
    )

def insert(collection, data):
    ts = calendar.timegm(time.gmtime())
    letters = string.ascii_lowercase
    random_string = ''.join(random.choice(letters) for i in range(10))
    link_slug = '%s-%s' % (ts, random_string)

    link = {'link': link_slug, 'data': data}
    link_id = collection.insert_one(link).inserted_id

    # return link_id
    return link_slug

def echo(update, context):
    term_extractor = TermExtractor()
    # definition_list: List[str] = list()
    definition_list: List[List] = list()
    for term in term_extractor.__call__(
            update.message.text,
            # nested=True
            nested=False
    ):
        # definition_list.append(term.normalized)
        definition_list.append([term.normalized, term.count])

    # print(definition_list)
    # repr_definition_list = repr(definition_list)
    repr_definition_list = json.dumps(definition_list)
    # repr_definition_list = json.dumps(definition_list, ensure_ascii=False).encode('utf8')
    # f = open('/usr/src/app/src/log.txt', 'w')
    # f.write('definition_list = ' + repr_definition_list + '\n')
    # f.close()

    link_slug = insert(links, repr_definition_list)

    context.bot.send_message(
        chat_id=update.effective_chat.id,
        # text=definition_list
        # text='Извлечение ключевых слов успешно завершено! Посмотреть результат Вы можете по данной ссылке: [ссылка]'
        # text=repr_definition_list
        text=link_slug
    )

# bot connect

updater = Updater(token=token, use_context=True)
dispatcher = updater.dispatcher

# логирование

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

# обработка команд

start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

# обработка сообщений

echo_handler = MessageHandler(Filters.text & (~Filters.command), echo)
dispatcher.add_handler(echo_handler)

# стартуем бота

updater.start_polling()
