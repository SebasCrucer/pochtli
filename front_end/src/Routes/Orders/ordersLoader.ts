import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";

interface ordersType {
    status: 'ok';
    ordersData: {
        id: string;
        date: Date;
    }[]
}

export const ordersLoaderData: ({ params }: LoaderFunctionArgs) => Promise<
    ordersType | {
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
        {
            id: '44535',
            date: new Date()
        }
    ]
    return { status: 'ok', ordersData: data };

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type ordersLoaderData = PromiseType<ReturnType<typeof ordersLoaderData>>;