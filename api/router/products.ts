import { Request, Response, Router } from 'express';
import { pyFunc } from '../py_plugin';
import { productsDB } from '../DB';

const ProductDB = new productsDB()
export const products = Router()

// products.get('/preview',
//     async (req: Request, res: Response) => {
//         try {
//             const data = await pyFunc('./python_api/query.py', ['./data/csvs/demand_whse_c_2.csv', 'year'])
//             res.json(data);

//         } catch (error) {
//             res.json(error);

//         }

//     })

products.post('/',
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

products.get('/previews',
    async (req: Request, res: Response) => {
        try {

            const data = await ProductDB.getProducts()

            console.log(data);


            const previewData = data!.map((product) => {
                return {
                    name: product.product_code,
                    id: product.product_code,
                    price: product.order_demand,
                    tend: product.mu - product.pi
                }
            }
            )

            res.json(previewData);

        } catch (error) {
            res.json(error);

        }

    })
// const datad = [
//     { name: 'Martillos', id: "345345ht", price: 45, tend: 1 },
//     { name: 'Clavos', id: "35345fref", price: 5, tend: -1 },
//     { name: 'Tornillos', id: "34df45ht", price: 3, tend: -1 },
//     { name: 'Tuercas', id: "345345ht", price: 2, tend: -1 },
//     { name: 'Llaves', id: "345345ht", price: 15, tend: 1 },
//     { name: 'Destornilladores', id: "345345ht", price: 10, tend: -1 },
//     { name: 'Sierras', id: "345345ht", price: 30, tend: -1 },
//     { name: 'Taladros', id: "345345ht", price: 50, tend: 1 },
//     { name: 'Pinturas', id: "345345ht", price: 25, tend: -1 },
//     { name: 'Brochas', id: "345345ht", price: 5, tend: 1 },
//     { name: 'Cinta', id: "345345ht", price: 1, tend: 1 },
//     { name: 'Cajas', id: "345345ht", price: 10, tend: 1 },
//     { name: 'Cables', id: "345345ht", price: 7, tend: -1 },
// ]