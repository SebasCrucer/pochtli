import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";
import { API_URL } from "../../../config";

interface productDashboardType {
    status: 'ok';
    productsData: {
        id: string;
    }
}

export const productDashboardLoaderData: ({ params }: LoaderFunctionArgs) => Promise<
    productDashboardType | {
        status: 'error';
        error: {
            status: number;
        }
    }
> = async ({ params }) => {

    const windowSession = await getSessionDataFromGlobal()

    if (!windowSession) {
        return {
            status: 'error',
            error: {
                status: 401
            }
        }
    } else {
        const response = await fetch(API_URL + `/products/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: params.id as string,
            })

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
            return { status: 'ok', productsData: await response.json() };
        }
    }

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type productDashboardLoaderData = PromiseType<ReturnType<typeof productDashboardLoaderData>>;