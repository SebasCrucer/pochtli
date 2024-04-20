import pandas as pd
import sys

try:
    connection: str = sys.argv[0]
    headers: str = sys.argv[1]

    df = pd.read_csv(connection)

    df = df[headers.split(",")]

    rtn = [row.to_dict() for _, row in df.iterrows()]

    print(rtn)

except IndexError:
    print(f"Numero de argumentos incorrecto. Se esperaban 2 y se recibieron {len(sys.argv)}")
