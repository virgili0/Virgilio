#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import time
from googletrans import Translator

translator = Translator()

def translate(src):
    time.sleep(5 )
    dest = translator.translate(src, src='en', dest='zh-CN')
    return dest.text

def open_md(filename):
    md_list = []
    SPLIT_LENGTH = 10
    with open(filename, mode='r') as md_file:
        md_list = md_file.readlines()
        md_list = [''.join(md_list[i: i+SPLIT_LENGTH]) for i in range(0, len(md_list), SPLIT_LENGTH)]
        return md_list

def transform_md(md_list):
    transform_list = []
    i = 0
    for md in md_list:
        dest = translate(md.rstrip('\\'))
        transform_list.append(dest)
        i += 1
        print(f'{i}/{len(md_list)}')
    return transform_list

def save_md(filename, transform_list):
    with open(filename, mode='w') as md_file:
        md_file.write('\n\n'.join(transform_list))

def read_mds(dir_path):
    md_file_list = []
    for root, _, files in os.walk(dir_path):
        for name in filter(lambda filename: os.path.splitext(filename)[1] == '.md' , files):
            md = os.path.join(root, name)
            md_file_list.append(md)
    return md_file_list

if __name__ == '__main__':
    md_file = 'Topics/Deep learning in cloud/README.md'
    print(md_file)
    md_list = open_md(md_file)
    transform_list = transform_md(md_list)
    save_md(md_file, transform_list)
