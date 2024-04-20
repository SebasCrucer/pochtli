import { Request, Response, Router } from 'express';

export const providers = Router()

providers.post('/',
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

providers.get('/previews',
    async (req: Request, res: Response) => {
        try {
            const data = [
                {
                    name: 'Truppernhg',
                    id: "345345ht",
                    contact: 'Juan Perez',
                    phone: '123456789',
                    email: 'juanperez@gmail.com'
                },
                {
                    name: 'Ferreteria del centro',
                    id: "35345fref",
                    contact: 'Maria Lopez',
                    phone: '987654321',
                    email: 'ferre@gial.com',
                },
                {
                    name: 'Ferreteria del centro',
                    id: "35345fref",
                    contact: 'Maria Lopez',
                    phone: '987654321',
                    email: 'ferre@gial.com',
                },
                {
                    name: 'Ferreteria del centro',
                    id: "35345fref",
                    contact: 'Maria Lopez',
                    phone: '987654321',
                    email: 'ferre@gial.com',
                },
                {
                    name: 'Ferreteria del centro',
                    id: "35345fref",
                    contact: 'Maria Lopez',
                    phone: '987654321',
                    email: 'ferre@gial.com',
                },
                {
                    name: 'Ferreteria del centro',
                    id: "35345fref",
                    contact: 'Maria Lopez',
                    phone: '987654321',
                    email: 'ferre@gial.com',
                },
                {
                    name: 'Ferreteria del centro',
                    id: "35345fref",
                    contact: 'Maria Lopez',
                    phone: '987654321',
                    email: 'ferre@gial.com',
                },
            ]
            res.json(data);

        } catch (error) {
            res.json(error);

        }

    })