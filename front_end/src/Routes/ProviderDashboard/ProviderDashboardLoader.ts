import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";

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
    }
    const data = {
        id: params.id as string,
    }
    return { status: 'ok', providersData: data };

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type providerDashboardLoaderData = PromiseType<ReturnType<typeof providerDashboardLoaderData>>;