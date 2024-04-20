import { routesData } from "../NavMenu/Menu";

export const getPathNamesFromText = (targetPath: string, routesJson: routesData[]) => {
    const segments = targetPath.split('/');
    let accumulatedPath = '';
    const pathsAndNames: { path: string; name: string }[] = [];

    for (let i = 1; i < segments.length; i++) {
        accumulatedPath += '/' + segments[i];

        const foundRoute = routesJson.find(r => r.path === accumulatedPath);
        if (foundRoute) {
            pathsAndNames.push({ path: foundRoute.path, name: foundRoute.name });
        }
    }

    return pathsAndNames;
};

const findMatchingRoute = (currentPath: string, routesJson: routesData[]): routesData | null => {
    // Normalizar currentPath para asegurar que comienza con '/'
    if (!currentPath.startsWith('/')) {
        currentPath = '/' + currentPath;
    }

    // Dividir currentPath en segmentos, ignorando cualquier segmento vacío
    const currentPathSegments = currentPath.split('/').filter(segment => segment !== '');

    // Iterar sobre cada ruta en routesJson para encontrar una coincidencia
    for (const route of routesJson) {
        const routeSegments = route.path.split('/').filter(segment => segment !== '');

        // Suponer que la ruta coincide hasta que se encuentre una discrepancia
        let matches = true;
        for (let i = 0; i < routeSegments.length; i++) {
            const isVariableSegment = routeSegments[i].startsWith(':');
            const segmentsMatch = routeSegments[i] === currentPathSegments[i];

            // Si el segmento actual no es una variable y no coincide, descartar esta ruta
            if (!isVariableSegment && !segmentsMatch) {
                matches = false;
                break;
            }
        }

        // Si todos los segmentos coinciden (teniendo en cuenta las variables), devolver esta ruta
        if (matches) {
            return route;
        }
    }

    // Si ninguna ruta coincide, devolver null
    return null;
};

export const getSiblingRoutes = (currentPath: string, routesJson: routesData[]): routesData[] => {
    if (!currentPath.startsWith('/')) {
        currentPath = '/' + currentPath;
    }

    const matchingRoute = findMatchingRoute(currentPath, routesJson)

    if (!matchingRoute) {
        console.error('No matching route found for the given currentPath.');
        return [];
    }

    const parentPath = matchingRoute.path.split(':')[0].substring(0, matchingRoute.path.lastIndexOf('/'));

    const siblingRoutes = routesJson.filter(route => {
        const routeParentPath = route.path.substring(0, route.path.lastIndexOf('/'));
        return routeParentPath === parentPath && !route.path.includes(':');
    });
    return siblingRoutes;
};


export const getChildRoutes = (currentPath: string, routesJson: routesData[]): routesData[] => {
    if (!currentPath.startsWith('/')) {
        currentPath = '/' + currentPath;
    }
    const normalizedCurrentPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

    const childRoutes = routesJson.filter(route => {
        if (!route.path.startsWith(normalizedCurrentPath)) return false;
        const remainingPath = route.path.substring(normalizedCurrentPath.length);
        return !remainingPath.includes('/') && !route.path.includes(':');
    });

    return childRoutes;
};

export const hasChildRoutes = (currentPath: string, routesJson: routesData[]): boolean => {
    const normalizedPath = currentPath.endsWith('/') && currentPath !== '/' ? currentPath.slice(0, -1) : currentPath;
    const childRoute = routesJson.find(route => {
        const normalizedRoutePath = route.path.endsWith('/') && route.path !== '/' ? route.path.slice(0, -1) : route.path;
        return normalizedRoutePath !== normalizedPath && normalizedRoutePath.startsWith(normalizedPath);
    });

    return !!childRoute;
}