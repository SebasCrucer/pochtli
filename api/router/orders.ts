import { Request, Response, Router } from 'express';

export const orders = Router()

orders.post('/',
    async (req: Request, res: Response) => {
        try {
            const { id } = req.body;

            const data = {
                id: id as string,
            }
            res.json(data);

        } catch (error) {
            res.json(error);

        }

    })

orders.get('/previews',
    async (req: Request, res: Response) => {
        try {
            const data = [
                {
                    id: '44535',
                    date: new Date(),
                }
            ]
            res.json(data);

        } catch (error) {
            res.json(error);

        }

    })