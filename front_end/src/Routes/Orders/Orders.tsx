import { useLoaderData, useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer"
import { Table } from "../../components/Table";
import { ControlsCard } from "../../components/ControllsCard";
import { formatearFecha } from "../../Utils/dates";
import './Orders.css'
import SnippedCard from "../../components/SnippedCard";
import { ordersLoaderData } from "./ordersLoader";

export const Orders = () => {
    const ordersData = useLoaderData() as ordersLoaderData;

    const navigate = useNavigate();

    return (
        <PageContainer title='Proveedores'>
            {
                ordersData?.status === 'ok' &&
                <div className='Products-container'>
                    <div className='Products-table'>
                        <Table
                            data={ordersData.ordersData.map(values => ({
                                ...values
                            }))}
                            columns={['id', 'nombre', 'contact', 'phone', 'email']}
                            onClick={(i) => {
                                navigate(`/orders/${ordersData.ordersData[i].id}`)
                            }}
                        />
                    </div>
                    <div className="Products-side">
                        <ControlsCard
                            cantidad={
                                ordersData.ordersData.length
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
