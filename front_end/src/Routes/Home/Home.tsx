import { useLoaderData, useNavigation } from 'react-router-dom';
import './Home.css'
import { homeLoaderData } from './homeLoader';
import { PageContainer } from '../../components/PageContainer';

export const Home = () => {

    const homeData = useLoaderData() as homeLoaderData;
    const { state } = useNavigation()

    return (
        <section id='Home' className={state === 'loading' ? 'page-loading' : ''}>
            <PageContainer title='Analiticas' from='/'>
                <div className='Home-container'>
                    <div className='Home-data'>
                        {
                            homeData.status === 'ok' && homeData.homeData ?
                                <div>
                                    Aquí habria un tablero con estadisticas generales.
                                </div> :
                                <p className='Home-noData'>No hay data</p>
                        }
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}
