import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./permissions', false, /.*\.js$/));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');


export default {
    path: 'permissions',
    component: Router,
    meta: {
        breadcrumb: 'permissions',
        route: 'system.permissions.index',
    },
    children: routes,
};
