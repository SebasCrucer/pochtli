import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";
import { API_URL } from "../../../config";

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
    } else {
        const response = await fetch(API_URL + `/orders/previews`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        })

        if (!response.ok) {
            const error: {
                message: string;
                stack: string;
                error: {
                    status: number;
                };
            } = await response.json()

            throw {
                status: 'error',
                error: error.error
            }
        } else {
            return { status: 'ok', ordersData: await response.json() };
        }
    }

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type ordersLoaderData = PromiseType<ReturnType<typeof ordersLoaderData>>;