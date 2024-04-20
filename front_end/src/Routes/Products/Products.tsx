import { useLoaderData } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer"
import { prevProductLoaderData } from "./productsLoader";
import { Table } from "../../components/Table";
import SnippedCard from "../../components/SnippedCard";

export const Products = () => {
    const productsData = useLoaderData() as prevProductLoaderData;

    return (
        <PageContainer title='Productos' from='/'>
            <div className='Products-container'>
                <div className='Products-table'>
                    {
                        productsData?.status === 'ok' &&
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
                                ['cant.']: values.cant,
                                ["nombre"]: values.name
                            }))}
                            columns={['id', 'nombre', 'cant.', 'tendencia']}
                            onClick={(i) => {
                                console.log(productsData.prevProductData[i]);

                            }}
                        />
                    }
                </div>
                <div className="Products-side">
                    <SnippedCard />
                </div>
            </div>
        </PageContainer>
    )
}
