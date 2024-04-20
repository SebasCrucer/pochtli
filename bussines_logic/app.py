from models.me_mel import me
from pandas import DataFrame, read_csv

model = me


def predict():
    df: DataFrame = read_csv("")

    p_o = df[not df["Order Demand"] == df["Storage"]].index[-1]
    mu_b = df["mu"].iloc[-1]  # mu : n - 1

    mu = me(p_o, mu_b)  # mu : n
    mu_a = me(mu, mu_b)  # mu : n + 2

    p_n = df["Pn"].iloc[-1]  # last storage count

    p_i = abs(p_n - mu - mu_a)  # sales forcasting

    return p_i