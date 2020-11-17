from eve import Eve
from settings import my_settings as ms
# import logging

# def log_every_get(resource, request, payload):
#     # custom INFO-level message is sent to the log file
#     app.logger.info('We just answered to a GET request!')

app = Eve(settings=ms)
# app.on_post_GET += log_every_get

if __name__ == '__main__':
    # # enable logging to 'app.log' file
    # handler = logging.FileHandler('app.log')

    app.run(host='0.0.0.0')