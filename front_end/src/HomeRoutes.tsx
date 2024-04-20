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
import { OrderDashboard } from './Routes/OrderDashboard/OrderDashboard';
import { orderDashboardLoaderData } from './Routes/OrderDashboard/OrderDashboardLoader';
import { ProductDashboard } from './Routes/ProductDashboard/ProductDashboard';
import { productDashboardLoaderData } from './Routes/ProductDashboard/ProductDashboardLoader';
import { ProviderDashboard } from './Routes/ProviderDashboard/ProviderDashboard';
import { providerDashboardLoaderData } from './Routes/ProviderDashboard/ProviderDashboardLoader';


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
            path: '/products',
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
            name: 'Producto'
        },
        routeObject: {
            path: '/products/:id',
            element: <ProductDashboard />,
            loader: productDashboardLoaderData,
            errorElement: (
                <ErrorPage />
            ),
        }
    },

    {
        data: {
            name: 'Proveedores'
        },
        routeObject: {
            path: '/provs',
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
            name: 'Proveedor'
        },
        routeObject: {
            path: '/provs/:id',
            element: <ProviderDashboard />,
            loader: providerDashboardLoaderData,
            errorElement: (
                <ErrorPage />
            ),
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
    {
        data: {
            name: 'Orden'
        },
        routeObject: {
            path: '/orders/:id',
            element: <OrderDashboard />,
            loader: orderDashboardLoaderData,
            errorElement: (
                <ErrorPage />
            ),
        }
    },

];