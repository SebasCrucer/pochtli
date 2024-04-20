import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";

interface prevProductType {
    status: 'ok';
    prevProductData: {
        name: string;
        id: string;
        price: number;
    }[]
}

export const prevProductLoaderData: ({ params }: LoaderFunctionArgs) => Promise<
    prevProductType | {
        status: 'error';
        error: {
            status: number;
        }
    }
> = async () => {

    const windowSession = await getSessionDataFromGlobal()

    if (!windowSession) {
        return {
            status: 'error',
            error: {
                status: 401
            }
        }
    }
    const data = [
        { name: 'Martillos', id: "345345ht", price: 45 },
        { name: 'Clavos', id: "35345fref", price: 5 },
        { name: 'Tornillos', id: "34df45ht", price: 3 },
        { name: 'Tuercas', id: "345345ht", price: 2 },
        { name: 'Llaves', id: "345345ht", price: 15 },
        { name: 'Destornilladores', id: "345345ht", price: 10 },
        { name: 'Sierras', id: "345345ht", price: 30 },
        { name: 'Taladros', id: "345345ht", price: 50 },
        { name: 'Pinturas', id: "345345ht", price: 25 },
        { name: 'Brochas', id: "345345ht", price: 5 },
        { name: 'Cinta', id: "345345ht", price: 1 },
        { name: 'Cajas', id: "345345ht", price: 10 },
        { name: 'Cables', id: "345345ht", price: 7 },
    ]
    return { status: 'ok', prevProductData: data };

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type prevProductLoaderData = PromiseType<ReturnType<typeof prevProductLoaderData>>;