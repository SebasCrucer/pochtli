import { useLoaderData } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer';
import { providerDashboardLoaderData } from './ProviderDashboardLoader'
import './ProviderDashboard.css'

export const ProviderDashboard = () => {
    const providerDashboard = useLoaderData() as providerDashboardLoaderData;
    return providerDashboard.status == "ok" ? (
        <PageContainer from="/provs" title={`Productos >   ${providerDashboard.providersData.id}`}>
            <div>{JSON.stringify(providerDashboard)}</div>
        </PageContainer>
    ) :
        <></>
}
