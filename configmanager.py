#!/usr/bin/env python3
import json


def load_config():
    with open('config.json') as cf:
        return json.load(cf)


def load_states(config):
    with open(config['states_file']) as sf:
        states = [line.strip() for line in sf.readlines()]
        return states