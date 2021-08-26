#!/usr/bin/env python3
import json


def load_config():
    with open('config.json') as cf:
        return json.load(cf)