import numpy as np


def me(x: list, f_x: list, rho = 0.8) -> float:

    if not len(x) == len(f_x):
        raise Exception("The length of the lists is not the same")

    mu = np.mean(f_x)

    for y in f_x[-1:]:
        mu = rho*mu + (1 - rho)*y


    return mu