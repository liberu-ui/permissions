/**
 * Imports the routeImporter function from the routeImporter module
 */
import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Imports the Router component from the Router.vue file
 */
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

/**
 * Represents the permissions route and its child routes
 */
export default {
    /**
     * The path of the permissions route
     */
    path: 'permissions',

    /**
     * The component to render for the permissions route
     */
    component: Router,

    /**
     * Additional metadata for the permissions route
     */
    meta: {
        /**
         * The breadcrumb label for the permissions route
         */
        breadcrumb: 'permissions',

        /**
         * The route name for the permissions route
         */
        route: 'system.permissions.index',
    },

    /**
     * The child routes for the permissions route
     */
    children: routeImporter(require.context('./permissions', false, /.*\.ts$/)),
};