import { useLoaderData } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer"
import { orderDashboardLoaderData } from "./OrderDashboardLoader";

export const OrderDashboard = () => {
    const ordersData = useLoaderData() as orderDashboardLoaderData;
    return ordersData.status == "ok" ? (
        <PageContainer from="/orders" title={`Ordenes >   ${ordersData.ordersData.id}`}>
            <div>{JSON.stringify(ordersData)}</div>
        </PageContainer>
    ) :
        <></>
}
