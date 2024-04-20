import { useLoaderData, useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer"
import { Table } from "../../components/Table";
import { ControlsCard } from "../../components/ControllsCard";
import { formatearFecha } from "../../Utils/dates";
import './Provider.css'
import SnippedCard from "../../components/SnippedCard";
import { prevProviderLoaderData } from "./providerLoader";

export const Providers = () => {
    const providersData = useLoaderData() as prevProviderLoaderData;

    const navigate = useNavigate();

    return (
        <PageContainer title='Proveedores'>
            {
                providersData?.status === 'ok' &&
                <div className='Providers-container'>
                    <div className='Providers-table'>
                        <Table
                            data={providersData.prevProviderData.map(values => ({
                                ...values,
                                ["nombre"]: values.name
                            }))}
                            columns={['id', 'nombre', 'contact', 'phone', 'email']}
                            onClick={(i) => {
                                navigate(`/provs/${providersData.prevProviderData[i].id}`)
                            }}
                        />
                    </div>
                    <div className="Providers-side">
                        <ControlsCard
                            cantidad={
                                providersData.prevProviderData.length
                            }
                            fecha={formatearFecha(new Date())}
                            color="#8DFAD3"
                            color2="#8DFAD335"
                            icon={<box-icon name='box' />}
                            title="Proveedores"
                        />
                        <SnippedCard
                            actions={[
                                {
                                    icon: <box-icon name='plus' />,
                                    name: 'Agregar Proveedor',
                                    onClick: () => {
                                        console.log('Add');

                                    },
                                    color: "#8DFAD335"
                                },
                                {
                                    icon: <box-icon name='filter-alt' />,
                                    name: 'Filtrar',
                                    onClick: () => {
                                        console.log('filter')
                                    },
                                    color: "#8DFAD335"
                                },
                            ]}
                        />
                    </div>
                </div>
            }
        </PageContainer>
    )
}
