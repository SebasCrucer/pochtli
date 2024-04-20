import numpy as np

from models.me_mel import me
from pandas import DataFrame, read_csv
import matplotlib.pyplot as plt

model = me


def predict():
    df: DataFrame = read_csv("")

    p_o = df[not df["Order_Demand"] == df["Storage"]].index[-1]
    mu_b = df["mu"].iloc[-1]  # mu : n - 1

    mu = me(p_o, mu_b)  # mu : n
    mu_a = me(mu, mu_b)  # mu : n + 2

    p_n = df["Pn"].iloc[-1]  # last storage count

    p_i = abs(p_n - mu - mu_a)  # sales forcasting

    return p_i


if __name__ == "__main__":

    path = __file__.split("\\")
    path = path[:-2]
    path.append("data")
    path.append("csvs")

    path.append("demand_whse_c_2.csv")
    path = "\\".join(path)

    # database connection
    df = read_csv(path)

    # add storage column and set it to zero
    df["storage"] = 0

    # group by product code
    df_group = df.groupby("product_code")
    # transform groups to data frames
    ids = [group["product_code"].iloc[0] for _, group in df_group]
    df_groups = [group for _, group in df_group]

    for product_index in range(15, 244):
        df = df_groups[product_index]  # <-------------

        # set initial p_n
        df[[0, "storage"]] = df["order_demand"].iloc[0] * 1.3

        dates = [date for date in df.loc[df["year"] == 2012]["date"]]
        dates += [date for date in df.loc[df["year"] == 2013]["date"]]
        dates += [date for date in df.loc[df["year"] == 2014]["date"]]

        if len(dates) == 0:
            break

        order_demand = [od for od in df.loc[df["year"] == 2012]["order_demand"]]
        order_demand += [od for od in df.loc[df["year"] == 2013]["order_demand"]]
        order_demand += [od for od in df.loc[df["year"] == 2014]["order_demand"]]


        mu = []
        mu_a = []
        p_n = []
        pi = []

        rho = 0.8
        while rho <= 1:

            p_n.append(df["storage"].iloc[0])

            mu.append(np.mean(order_demand))

            for i, od in enumerate(order_demand):
                mu.append(me(od, mu[i], rho=rho))

                mu_a.append(me(mu[i], od, rho=rho))

                pi.append(abs(p_n[i] - mu[i] - mu_a[i]))

                p_n.append(pi[i - 1])

            error = []
            for i, val in enumerate(mu):
                if i + 1 < len(order_demand):
                    error.append(val/order_demand[i+1]-1)

            error = sum(error)/len(error)

            plt.title(f"Rho = {rho} id = {ids[product_index]} rmse = {error}")
            plt.plot(dates, order_demand, marker='o', linestyle='', color="blue")
            plt.subplot()
            plt.plot(dates, mu[:-1], marker='o', linestyle='', color="red")
            plt.show()

            rho += 0.05
            mu.clear()
