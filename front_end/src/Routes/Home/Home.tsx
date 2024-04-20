import { useLoaderData, useNavigation } from 'react-router-dom';
import './Home.css'
import { homeLoaderData } from './homeLoader';
import { PageContainer } from '../../components/PageContainer';

export const Home = () => {

    const homeData = useLoaderData() as homeLoaderData;
    const { state } = useNavigation()

    return (
        <section id='Home' className={state === 'loading' ? 'page-loading' : ''}>
            <PageContainer title='Analiticas'>
                <div className='Home-container'>
                    <div className='Home-data'>
                        {JSON.stringify(homeData)}
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}
