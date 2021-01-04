import os
import calendar
import time
import random
import string
import logging
import sys
import urllib.parse
import json
import pprint
from inspect import getmembers

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
host = os.getenv('HOST')

###

### --- ОТЛАДКА

# prints

# print("TOKEN: %s" % token)
# print("MONGO IP: %s" % mongo_ip)
# print('mongodb://%s:%s@0.0.0.0:27017/' % (mongo_root_username, mongo_root_password))
# print('mongodb://%s:%s@mongo:27017/' % (mongo_root_username, mongo_root_password))

# term extractor

# отладка
# f = open('/usr/src/app/src/log.txt', 'w')
# f.write('\n')
# f.close()
#
# term_extractor = TermExtractor()
# text = """Турагенты не владеют средствами обслуживания и
# выступают посредниками между предприятием туристского
# обслуживания и покупателем туристской путевки, продвигая
# и реализуя туристский продукт. С законодательством,
# закрепляющим деятельность туристских агентств и туроператоров
# в Российской Федерации, можно ознакомиться на сайте
# федерального агентства по туризму. В России туристический
# бизнес стал активно развиваться в 1990-х. В 1993 была
# учреждена Российская ассоциация туристических агентств (РАТА),
# которая в 2002 была преобразована в Российский союз
# туриндустрии (РСТ). Одна из проблем в сфере правового
# регулирования взаимоотношений между страховыми компаниями и
# туроператорами заключается в отсутствии законодательного
# запрета на смену статуса компаний, осуществляющих реализацию
# туристского продукта конечным потребителям (туристам). Это
# означает, что компания, реализующая турпродукт, может
# «перейти» из статуса туроператора в статус турагентства, то
# есть вместо туроператорской деятельности (по формированию,
# продвижению и реализации туристского продукта) начать
# осуществлять турагентскую деятельность (по продвижению и
# реализации туристского продукта). В силу действующего
# законодательства, турагент не несет ответственности по страховым
# полисам, проданным туроператором. Это означает, что на практике
# не исключена ситуация, когда потребитель (турист),
# приобретший турпродукт у подобного турагента («бывшего
# туроператора»), при наступлении страхового случая столкнется с
# трудностями при получении страхового возмещения."""

# test_text = """Хороший пастух не только хорошо знает время и место пастьбы, но и правила ухода за животными, умеет
# оказывать первую помощь при заболеваниях и отёлах и тому подобное. У славян — главный персонаж в обрядах и верованиях,
# связанных с защитой, сохранностью скота, особенно во время летнего выпаса. Считается причастным к тайнам общения с
# животным и растительным миром, посредником между людьми и «тем светом». Пастух выполняет целый ряд обрядовых действий,
# обеспечивающих благополучие стада. В некоторых славянских регионах пастух пользуется особым почитанием: на Русском
# Севере его считают колдуном, имеющим связь с лешим и потусторонними силами; в Карпатах главный пастух выполняет функции
# местного знахаря, целителя, а кроме того — и колдуна, отбирающего молоко у овец из чужого стада."""
# # print(test_text)

# definition_list: List[List] = list()
# for term in term_extractor.__call__(
#         # test_text,
#         text,
#
#         # nested=True,
#         nested=False
#
#         # strings=True,
# ):
#     # отладка
#     # print(term.count)
#
#     words: List[List] = list()
#     for word in term.words:
#         words.append([
#             word.parsed.word,
#             str(word.parsed.tag),
#             word.parsed.normal_form,
#             word.parsed.score,
#             repr(word.parsed.methods_stack),
#         ])
#
#     definition_list.append([
#         term.normalized,
#         term.count,
#         term.word_count,
#         json.dumps(words),
#     ])
#
#     # отладка
#     # f = open('/usr/src/app/src/log.txt', 'a')
#     # # f.write(term.normalized + ' ' + str(term.count) + ' ' + repr(term.words[0].parsed) + ' ' + str(term.word_count) + '\n')
#     # f.write(repr(term.normalized))
#     # f.close()

# отладка
# # print(definition_list)
# jsonString = json.dumps(definition_list)
# f = open('/usr/src/app/src/log.txt', 'a')
# # f.write('\n\ndefinition_list = ' + repr(definition_list) + '\n')
# f.write('\n\ndefinition_list = ' + jsonString + '\n')
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

### --- ОТЛАДКА [КОНЕЦ]

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
        # definition_list.append([term.normalized, term.count])
        words: List[List] = list()
        for word in term.words:
            words.append([
                word.parsed.word,
                str(word.parsed.tag),
                word.parsed.normal_form,
                word.parsed.score,
                repr(word.parsed.methods_stack),
            ])
        definition_list.append([
            term.normalized,
            term.count,
            term.word_count,
            json.dumps(words),
        ])

    # print(definition_list)
    # repr_definition_list = repr(definition_list)
    repr_definition_list = json.dumps(definition_list)
    # repr_definition_list = json.dumps(definition_list, ensure_ascii=False).encode('utf8')

    # отладка
    # f = open('/usr/src/app/src/log.txt', 'w')
    # f.write('definition_list = ' + repr_definition_list + '\n')
    # f.close()

    link_slug = insert(links, repr_definition_list)
    text = 'Обработка текста завершена. Результат доступен по ссылке: %s/?link=%s' % (host, link_slug)

    context.bot.send_message(
        chat_id=update.effective_chat.id,
        # text=definition_list
        # text='Извлечение ключевых слов успешно завершено! Посмотреть результат Вы можете по данной ссылке: [ссылка]'
        # text=repr_definition_list
        # text=link_slug
        text=text
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
