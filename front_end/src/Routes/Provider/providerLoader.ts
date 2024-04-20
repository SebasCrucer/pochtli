import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";
import { API_URL } from "../../../config";

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
    } else {
        const response = await fetch(API_URL + `/providers/previews`, {
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
            return { status: 'ok', prevProviderData: await response.json() }
        }
    }


}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type prevProviderLoaderData = PromiseType<ReturnType<typeof prevProviderData>>;