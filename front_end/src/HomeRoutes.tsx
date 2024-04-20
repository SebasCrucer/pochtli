import { Home } from './Routes/Home/Home';
import { HomeRouteData } from './NavMenu/Menu';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { homeLoaderData } from './Routes/Home/homeLoader';
import { RouteObject } from 'react-router-dom';
import { Products } from './Routes/Products/Products';
import { prevProviderData } from './Routes/Provider/providerLoader';
import { Providers } from './Routes/Provider/Provider';
import { Orders } from './Routes/Orders/Orders';
import { ordersLoaderData } from './Routes/Orders/ordersLoader';
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
            name: 'Proveedores'
        },
        routeObject: {
            path: '/prov',
            element: (
                <Providers />
            ),
            loader: prevProviderData,
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
                <Orders />
            ),
            loader: ordersLoaderData,
            errorElement: (
                <ErrorPage />
            )
        }
    },
];