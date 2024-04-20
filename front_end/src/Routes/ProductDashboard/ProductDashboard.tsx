import { useLoaderData } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer';
import { productDashboardLoaderData } from './ProductDashboardLoader'
import './ProductDashboard.css'
import { LineChart } from '@mui/x-charts';

export const ProductDashboard = () => {
    const productsData = useLoaderData() as productDashboardLoaderData;
    return productsData.status == "ok" ? (
        <PageContainer from="/products" title={`Productos >   ${productsData.productsData.id}`}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={500}
                height={300}
            />
            <div>{JSON.stringify(productsData)}</div>
        </PageContainer>
    ) :
        <></>
}
