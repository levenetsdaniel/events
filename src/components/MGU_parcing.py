import requests
from bs4 import BeautifulSoup
import sqlite3

# Функция для создания таблицы в базе данных SQLite
def create_table():
    conn = sqlite3.connect('events.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS events
                 (title TEXT, location TEXT, date TEXT)''')
    conn.commit()
    conn.close()

# Функция для вставки данных в таблицу
def insert_data(title, location, date):
    conn = sqlite3.connect('events.db')
    c = conn.cursor()
    c.execute("INSERT INTO events VALUES (?, ?, ?)", (title, location, date))
    conn.commit()
    conn.close()

# Загружаем страницу
url = 'https://www.msu.ru/entrance/olimp.html'
response = requests.get(url)

# Создаем объект BeautifulSoup для парсинга HTML
soup = BeautifulSoup(response.text, 'html.parser')

# Получаем список всех мероприятий на странице
events = soup.find_all('li', target="_blank")

# Создаем таблицу в базе данных, если она еще не создана
#create_table()

# Перебираем каждое мероприятие и извлекаем информацию
for event in events:
    title = event.get_text()
    link = event.get('href')

    # Вставляем данные в таблицу
    insert_data(title, link)

