#!/usr/bin/env python3
import bs4
import csv
import requests

import dbmanager
import configmanager


config = configmanager.load_config()
states = configmanager.load_states(config)


def state_code(state):
    try:
        return states.index(state) + 1
    except ValueError:
        return 0


def state_from_code(id):
    return states[id-1]


"""
load_csv_data
Carrega os dados do arquivo .csv e transforma os em dados aptos a serem usados
na submissão do formulário.
"""
def load_csv_data(file_name):
    with open(file_name, newline='') as csvfile:
        data = []
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            data.append(convert_to_form_data(row))
        return data


def convert_to_form_data(data):
    fd = {
        "nome": data["Nome"],
        "email": data["Email"],
        "cep": data["CEP"],
        "estado": state_code(data["Estado"]),
        "cidade": data["Cidade"],
        "assunto": data["Assunto"],
        "telefone": data["Telefone"],
        "mensagem": data["Mensagem"]
    }
    return fd


def post_form(form_data):
    res = requests.post(config['form_url'])
    soup = bs4.BeautifulSoup(res.text, 'lxml')
    alerts = soup.select('div.alert')
    form_data['status'] = ''
    if len(alerts) > 0:
        status = alerts[0].get_text()
        form_data['status'] = status
    return form_data


def write_form_result(res):
    dbmanager.commit_form_data(res)


if __name__ == "__main__":
    data = load_csv_data(config["csv_file"])
    for row in data:
        res = post_form(row)
        write_form_result(res)

