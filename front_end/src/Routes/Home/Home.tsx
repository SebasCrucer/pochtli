import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import './Home.css'
import { homeLoaderData } from './homeLoader';
import { PageContainer } from '../../components/PageContainer';
import { useContext, useState } from 'react';
import { AproximatinCicleContext } from '../../contexts/AproximationCicle';

export const Home = () => {

    const homeData = useLoaderData() as homeLoaderData;
    // const navigate = useNavigate();
    const { state } = useNavigation()
    const [newData, setNewData] = useState<null | File>(null)
    const { newIteration } = useContext(AproximatinCicleContext)!

    const onNewFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setNewData(e.target.files[0])
        }
    }

    return (
        <section id='Home' className={state === 'loading' ? 'page-loading' : ''}>
            <PageContainer title='Analiticas' actions={
                <Form
                    method='post'
                    action='add'
                    className='Analiticas_controls'
                >
                    <input
                        type="file"
                        name='inputFile'
                        id='inputFile'
                        accept='.csv'
                        onChange={onNewFileChange}
                        hidden
                    />
                    <label className={'fileLabel' + (
                        newData ? ' loaded' : ''
                    )} htmlFor="inputFile">
                        {newData ? newData.name : 'Subir archivo'}
                    </label>
                    {
                        newData &&
                        <button
                            onClick={(e) => { e.preventDefault(); newIteration() }}
                            disabled={(state === 'submitting')}
                        >
                            <box-icon name='save' type='solid' />
                        </button>
                    }
                </Form>
            }>
                <div className='Home-container'>
                    <div className='Home-data'>
                        {JSON.stringify(homeData)}
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}
