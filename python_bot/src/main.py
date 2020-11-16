import os
token = os.getenv('TOKEN')

from rutermextract import TermExtractor
from typing import List

### отладка

# print("TOKEN: %s" % token)

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
#
# import sys
# sys.exit()

###

from telegram.ext import Updater
updater = Updater(token=token, use_context=True)
dispatcher = updater.dispatcher

# логирование

import logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

# обработка команд

def start(update, context):
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="Привет. Введи текст, и я извлеку из него ключевые слова!"
    )

from telegram.ext import CommandHandler
start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

# обработка сообщений

# def echo(update, context):
#     context.bot.send_message(
#         chat_id=update.effective_chat.id,
#         text=update.message.text
#     )

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
    f = open('/usr/src/app/src/log.txt', 'w')
    f.write('definition_list = ' + repr(definition_list) + '\n')
    f.close()

    context.bot.send_message(
        chat_id=update.effective_chat.id,
        # text=definition_list
        # text='Успешно!'
        text=repr(definition_list)
    )


from telegram.ext import MessageHandler, Filters
echo_handler = MessageHandler(Filters.text & (~Filters.command), echo)
dispatcher.add_handler(echo_handler)

# стартуем бота

updater.start_polling()