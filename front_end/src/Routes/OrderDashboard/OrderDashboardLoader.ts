import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";

interface orderDashboardType {
    status: 'ok';
    ordersData: {
        id: string;
    }
}

export const orderDashboardLoaderData: ({ params }: LoaderFunctionArgs) => Promise<
    orderDashboardType | {
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
    return { status: 'ok', ordersData: data };

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type orderDashboardLoaderData = PromiseType<ReturnType<typeof orderDashboardLoaderData>>;