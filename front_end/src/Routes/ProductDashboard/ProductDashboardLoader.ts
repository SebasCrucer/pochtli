import { LoaderFunctionArgs } from "react-router-dom"
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";

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
    }
    const data = {
        id: params.id as string,
    }
    return { status: 'ok', productsData: data };

}

type PromiseType<T> = T extends Promise<infer U> ? U : never;

export type productDashboardLoaderData = PromiseType<ReturnType<typeof productDashboardLoaderData>>;