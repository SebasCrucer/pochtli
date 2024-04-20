import numpy as np


def me(last_fx: float, last_mu: float, rho=0.8) -> float:
    return rho*last_mu + (1-rho)*last_fx

