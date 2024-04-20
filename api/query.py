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

        exec(sys.argv[2])

    rtn = [row.to_dict() for _, row in df.iterrows()]  # convert to list

    print(rtn)  # return

except IndexError:
    print(f"Numero de argumentos incorrecto. Se esperaban 2 y se recibieron {len(sys.argv)}")
