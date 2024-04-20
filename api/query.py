import pandas as pd
import re
import sys

try:

    connection: str = sys.argv[0]  # connection path
    headers: str = sys.argv[1]  # headers to search

    condition: bool = True  # search condition

    df = pd.read_csv(connection)  # data frame

    df = df[headers.split(",")]  # split headers

    if len(sys.argv) == 3:
        # search continue symbols in condition string
        pattern = re.compile(r'(\w+)([><=!]+)(\w+)')

        # pattern to find words
        pattern1 = re.compile(r'[A-Za-z]')

        # matches of first pattern in string condition
        res = pattern.match(sys.argv[2])

        # list of headers in condition
        lst = [h for h in res.groups() if pattern1.match(h)]

        # wrapp headers with df[]
        wrap = [f"df[{h}]" for h in lst]

        dct = {}  # wrap dictionaries
        for i, val in enumerate(lst):  # iterate through lst
            dct[val] = wrap[i]

        res = [dct.get(val, val) for val in res]

        res = "".join(res)

        df = df[exec(res)]

    rtn = [row.to_dict() for _, row in df.iterrows()]  # convert to list

    print(rtn)  # return

except IndexError:
    print(f"Numero de argumentos incorrecto. Se esperaban 2 y se recibieron {len(sys.argv)}")
