#!/usr/bin/env python3
import csv
import requests

import dbmanager
import configmanager


config = configmanager.load_config()


def state_code(state):
    with open(config['states_file']) as sf:
        states = [line.strip() for line in sf.readlines()]
        try:
            return states.index(state) + 1
        except ValueError:
            return 0


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
        "mensagem": data["Mensagem"]
    }
    return fd


def post_form(form_data):
    res = requests.post(config['form_url'])
    form_data['status_code'] = res.status_code
    return form_data


def write_form_result(res):
    dbmanager.insert_values(res)


if __name__ == "__main__":
    data = load_csv_data(config["csv_file"])
    for row in data:
        row = post_form(row)

