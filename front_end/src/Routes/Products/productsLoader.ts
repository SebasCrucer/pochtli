import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";

interface prevProductType {
    status: 'ok';
    prevProductData: {
        name: string;
        id: string;
        cant: number;
        tend: number;
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
        { name: 'Martillos', id: "345345ht", cant: 45, tend: 1 },
        { name: 'Clavos', id: "35345fref", cant: 5, tend: -1 },
        { name: 'Tornillos', id: "34df45ht", cant: 3, tend: -1 },
        { name: 'Tuercas', id: "345345ht", cant: 2, tend: -1 },
        { name: 'Llaves', id: "345345ht", cant: 15, tend: 1 },
        { name: 'Destornilladores', id: "345345ht", cant: 10, tend: -1 },
        { name: 'Sierras', id: "345345ht", cant: 30, tend: -1 },
        { name: 'Taladros', id: "345345ht", cant: 50, tend: 1 },
        { name: 'Pinturas', id: "345345ht", cant: 25, tend: -1 },
        { name: 'Brochas', id: "345345ht", cant: 5, tend: 1 },
        { name: 'Cinta', id: "345345ht", cant: 1, tend: 1 },
        { name: 'Cajas', id: "345345ht", cant: 10, tend: 1 },
        { name: 'Cables', id: "345345ht", cant: 7, tend: -1 },
    ]
    return { status: 'ok', prevProductData: data };

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type prevProductLoaderData = PromiseType<ReturnType<typeof prevProductLoaderData>>;