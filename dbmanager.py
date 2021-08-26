#!/usr/bin/env python3
import mysql.connector
import configmanager

config = configmanager.load_config()


def load_database():
    conn = config['connection']
    mydb = mysql.connector.connect(
        host=conn['host'],
        user=conn['user'],
        password=conn['password']
    )


db = load_database()

def create_database():
    pass


def database_exists():
    pass


def insert_values(values):
    if not database_exists():
        create_database()
    