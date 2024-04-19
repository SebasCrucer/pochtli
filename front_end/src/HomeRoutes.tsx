import { Home } from './Routes/Home/Home';
import { HomeRouteData } from './NavMenu/Menu';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { homeLoaderData } from './Routes/Home/homeLoader';
import { RouteObject } from 'react-router-dom';


interface HomeRoute {
    data: HomeRouteData;
    routeObject: RouteObject;
}

export const HomeRoutes: HomeRoute[] = [
    {
        data: {
            name: 'Analíticaszds'
        },
        routeObject: {
            path: '/',
            element: (
                <Home />
            ),
            loader: homeLoaderData,
            errorElement: (
                <ErrorPage />
            )
        }
    },
    {
        data: {
            name: 'Productos'
        },
        routeObject: {
            path: '/producs',
            element: (
                <div>Aquí se nostrará una lista de todos los items. Cada item al dar click en el abrirá su dashboard donde se verá el avance del modelo graficado, la predicción e histórico. Aquí tambien estará el botón de crear nuevo producto</div>
            ),
            // loader: homeLoaderData,
            errorElement: (
                <ErrorPage />
            )
        }
    },
    {
        data: {
            name: 'Provedores'
        },
        routeObject: {
            path: '/prov',
            element: (
                <div>En este sitio se verán todos los provedores, con su información, etc. tendrá tambien un historico de ordenes que ha recibido y las que recibirá</div>
            ),
            // loader: homeLoaderData,
            errorElement: (
                <ErrorPage />
            )
        }
    },
    {
        data: {
            name: 'Ordenes'
        },
        routeObject: {
            path: '/orders',
            element: (
                <div>Aqupi se verá todas las ordenes que se han hecho y las que se deben hacer. al dar click en cada orden se abrirá un sitio con todos los datos de la orden, productos y provedor.</div>
            ),
            // loader: homeLoaderData,
            errorElement: (
                <ErrorPage />
            )
        }
    },
];