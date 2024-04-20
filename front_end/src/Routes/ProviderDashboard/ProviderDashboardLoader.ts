import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";
import { API_URL } from "../../../config";

interface providerDashboardType {
    status: 'ok';
    providersData: {
        id: string;
    }
}

export const providerDashboardLoaderData: ({ params }: LoaderFunctionArgs) => Promise<
    providerDashboardType | {
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
        const response = await fetch(API_URL + `/providers/`, {
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
            return { status: 'ok', providersData: await response.json() };
        }
    }

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type providerDashboardLoaderData = PromiseType<ReturnType<typeof providerDashboardLoaderData>>;