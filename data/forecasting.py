import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


def me(last_fx: float, last_mu: float, rho=0.8) -> float:
    return rho * last_mu + (1 - rho) * last_fx


model = me

df: pd.DataFrame = pd.read_csv("demand_whse_a.csv")  # Provide a valid file path
df.info()
def predict():
    df: pd.DataFrame = pd.read_csv("demand_whse_a.csv")  # Provide a valid file path
    df["storage"] = 0
    df["mu"] = 0
    df["mu_a"] = 0
    df["p_i"] = 0
    df["storage"].iloc[0] = df["order_demand"].iloc[0] * 1.2
    p_o = df[not df["order_demand"] == df["storage"]].index[-1]
    mu_b = df["mu"].iloc[-1]  # mu : n - 1

    mu = me(p_o, mu_b)  # mu : n
    mu_a = me(p_o, mu)  # mu : n + 1

    p_n = df['storage'].iloc[-1]  # last storage count

    p_i = abs(p_n - mu - mu_a)  # sales forcasting

    # Create a new DataFrame with the calculated values
    df_forecast = pd.DataFrame({'mu_n': [mu], 'mu_n+2': [mu_a], 'p_n': [p_n], 'p_i': [p_i]})

    # Concatenate the original DataFrame with the new DataFrame
    df = pd.concat([df, df_forecast], axis=1)
    df.to_csv(r'C:\Users\jesus\PycharmProjects\pythonProject\Pochtli\'demand_imputado.csv', index=False)

    return df


predict()

# if __name__ == "__main__":  # Corrected variable name
#
#     # database connection
#     df = read_csv("demand_whse_c.csv")
#
#     # add storage column and set it to zero
#     df["storage"] = 0
#
#     # group by product code
#     df_group = df.groupby("product_code")
#     # transform groups to data frames
#     df_groups = [group for _, group in df_group]
#
#     # product index
#     product_index = 155
#     df = df_groups[product_index]  # <-------------
#
#     # set initial p_n
#     df[[0, "storage"]] = df["order_demand"].iloc[0] * 1.3
#
#     dates = [date for date in df.loc[df["year"] == 2013]["date"]]
#     dates += [date for date in df.loc[df["year"] == 2014]["date"]]
#     dates += [date for date in df.loc[df["year"] == 2015]["date"]]
#
#     print(dates)
#     order_demand = [od for od in df.loc[df["year"] == 2013]["order_demand"]]
#     order_demand += [od for od in df.loc[df["year"] == 2014]["order_demand"]]
#     order_demand += [od for od in df.loc[df["year"] == 2015]["order_demand"]]
#
#     print(order_demand)
#
#     mu = []
#     mu_a = []
#     p_n = []
#     pi = []
#
#     rho = 0.1
#     while rho <= 1:
#
#         p_n.append(df["storage"].iloc[0])
#
#         mu.append(np.mean(order_demand))
#
#         for i, od in enumerate(order_demand):
#             mu.append(me(od, mu[i], rho=rho))
#
#             mu_a.append(me(mu[i], od, rho=rho))
#
#             pi.append(abs(p_n[i] - mu[i] - mu_a[i]))
#
#             p_n.append(pi[i - 1])
#
#         plt.title(f"Rho = {rho} index = {product_index}")
#         plt.plot(dates, order_demand, marker='o', linestyle='', color="blue")
#         plt.subplot()
#         plt.plot(dates, mu[:-1], marker='o', linestyle='', color="red")
#         print(mu)
#         plt.show()
#
#         rho += 0.05
#         mu.clear()
