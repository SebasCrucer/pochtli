import { useLoaderData, useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer"
import { Table } from "../../components/Table";
import { ControlsCard } from "../../components/ControllsCard";
import { formatearFecha } from "../../Utils/dates";
import './Products.css'
import SnippedCard from "../../components/SnippedCard";
import { prevProductLoaderData } from "./productsLoader";

export const Products = () => {
    const productsData = useLoaderData() as prevProductLoaderData;

    const navigate = useNavigate();

    return (
        <PageContainer title='Productos'>
            {
                productsData?.status === 'ok' &&
                <div className='Products-container'>
                    <div className='Products-table'>
                        <Table
                            data={productsData.prevProductData.map(values => ({
                                ...values,
                                ['tendencia']: values.tend > 0 ? <box-icon
                                    name='up-arrow-alt'
                                    class='Product-tend up'
                                /> :
                                    <box-icon
                                        name='up-arrow-alt'
                                        class='Product-tend down'
                                    />,
                                ["nombre"]: values.name
                            }))}
                            columns={['id', 'nombre', 'cant.', 'tendencia']}
                            onClick={(i) => {
                                navigate(`/products/${productsData.prevProductData[i].id}`)
                            }}
                        />
                    </div>
                    <div className="Products-side">
                        <ControlsCard
                            cantidad={
                                productsData.prevProductData.length
                            }
                            fecha={formatearFecha(new Date())}
                            color="#8DFAD3"
                            color2="#8DFAD335"
                            icon={<box-icon name='box' />}
                            title="Productos"
                        />
                        <SnippedCard
                            actions={[
                                {
                                    icon: <box-icon name='plus' />,
                                    name: 'Agregar Distribuidor',
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
