import { Request, Response, Router } from 'express';
import { pyFunc } from '../py_plugin';

export const products = Router()

products.get('/preview',
    async (req: Request, res: Response) => {
        try {
            const data = await pyFunc('./python_api/query.py', ['./data/csvs/demand_whse_c_2.csv', 'year'])
            res.json(data);

        } catch (error) {
            res.json(error);

        }

    })
