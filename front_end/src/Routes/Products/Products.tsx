import { useLoaderData } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer"
import { prevProductLoaderData } from "./productsLoader";
import { Table } from "../../components/Table";

export const Products = () => {
    const productsData = useLoaderData() as prevProductLoaderData;

    return (
        <PageContainer title='Productos' from='/'>
            <div className='Products-container'>
                <div className='Products-table'>
                    {
                        productsData?.status === 'ok' &&
                        <Table data={productsData.prevProductData} />
                    }
                </div>
                <div className="Products-side">

                </div>
            </div>
        </PageContainer>
    )
}
