import { Router, Express } from "express"
import { userssession } from "./userssession"
import { products } from "./products"
import { providers } from "./providers"
import { orders } from "./orders"

export const routerApi = (app: Express) => {

    const AppRouter = Router()

    app.use('/', AppRouter)

    AppRouter.use('/userssession', userssession)

    AppRouter.use('/products', products)

    AppRouter.use('/providers', providers)

    AppRouter.use('/orders', orders)

}