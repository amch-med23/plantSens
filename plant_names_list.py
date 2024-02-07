#!/usr/bin/python3
"""gets all the plants names from the API"""

import requests


def get_plant_names():
    """ This gets the available plants from the API endpoint """
    url = "https://trefle.io/api/v1/plants?token=dS-iDECwBL_2d4s9v7ZdJvCvDP3u_GovzqejfPJ7f6Y"
    
    response = requests.get(url)
    data = response.json()
    data_list = data.get('data')
    obj_list = []
    for i in data_list:
            print("common-name: {}".format(i.get('common_name')))
            obj_list.append(i.get('common_name'))
    obj_list.append('Other') # this was done because the user chois wont be always in this list (API limited)
    return obj_list


if __name__ == "__main__":
    obj_new_list = []
    obj_new_list = get_plant_names()
    print(obj_new_list)
