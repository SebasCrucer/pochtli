import { useLoaderData, useNavigation } from 'react-router-dom';
import './Home.css'
import { homeLoaderData } from './homeLoader';
import { PageContainer } from '../../components/PageContainer';
import {ControlsCard} from '../../components/ControllsCard';

export const Home = () => {

    const homeData = useLoaderData() as homeLoaderData;
    const { state } = useNavigation()

    return (
        <section id='Home' className={state === 'loading' ? 'page-loading' : ''}>
            <></>
        </section>
    )
}
