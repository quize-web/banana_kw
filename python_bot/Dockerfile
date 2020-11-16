#FROM python:3.6
FROM python:3

WORKDIR /usr/src/app

#COPY requirements.txt ./
#RUN pip install --no-cache-dir -r requirements.txt

RUN pip install python-telegram-bot --upgrade
RUN pip install rutermextract

#COPY . .

CMD [ "python", "./src/main.py" ]