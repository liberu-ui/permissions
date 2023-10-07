/**
 * The module for creating new permissions.
 * @module CreatePermission
 */

import { VueConstructor, RouteConfig } from 'vue';

/**
 * The component for creating new permissions.
 */
const PermissionCreate: VueConstructor = () =>
  import('../../../pages/permissions/Create.vue');

/**
 * The route configuration for creating new permissions.
 * @type {RouteConfig}
 */
const createPermissionRoute: RouteConfig = {
  /**
   * The name of the route.
   * @type {string}
   */
  name: 'system.permissions.create',

  /**
   * The path of the route.
   * @type {string}
   */
  path: 'create',

  /**
   * The component to render for the route.
   * @type {VueConstructor}
   */
  component: PermissionCreate,

  /**
   * The meta information for the route.
   * @type {object}
   */
  meta: {
    /**
     * The breadcrumb text for the route.
     * @type {string}
     */
    breadcrumb: 'create',

    /**
     * The title of the route.
     * @type {string}
     */
    title: 'Create Permission',
  },
};

export default createPermissionRoute;
