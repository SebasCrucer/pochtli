import { Home } from './Routes/Home/Home';
import { HomeRouteData } from './NavMenu/Menu';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { homeLoaderData } from './Routes/Home/homeLoader';
import { RouteObject } from 'react-router-dom';
import { Products } from './Routes/Products/Products';
import { prevProductLoaderData } from './Routes/Products/productsLoader';


interface HomeRoute {
    data: HomeRouteData;
    routeObject: RouteObject;
}

export const HomeRoutes: HomeRoute[] = [
    {
        data: {
            name: 'Inicio'
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
                <Products />
            ),
            loader: prevProductLoaderData,
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
                <Products />
            ),
            loader: prevProductLoaderData,
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