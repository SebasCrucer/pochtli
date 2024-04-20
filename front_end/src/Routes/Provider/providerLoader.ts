import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";

interface prevProviderType {
    status: 'ok';
    prevProviderData: {
        name: string;
        id: string;
        contact: string;
        phone: string;
        email: string
    }[]
}

export const prevProviderData: ({ params }: LoaderFunctionArgs) => Promise<
    prevProviderType | {
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
    // datos del provedor, el tipo apun está por definir
    const data = [
        {
            name: 'Trupper',
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
    return { status: 'ok', prevProviderData: data };

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type prevProviderLoaderData = PromiseType<ReturnType<typeof prevProviderData>>;