/**
 * This TypeScript code file defines a route configuration for editing a permission.
 */

/**
 * Represents the EditPermission component.
 */
const EditPermission = () => import('../../../pages/permissions/Edit.vue');

/**
 * Represents the configuration for the edit permission route.
 */
export default {
    /**
     * The name of the route.
     */
    name: 'system.permissions.edit',
  
    /**
     * The path of the route.
     */
    path: ':permission/edit',
  
    /**
     * The component to be rendered for the route.
     */
    component: EditPermission,
  
    /**
     * The metadata for the route.
     */
    meta: {
        /**
         * The breadcrumb text.
         */
        breadcrumb: 'edit',
      
        /**
         * The title of the page.
         */
        title: 'Edit Permission',
    },
};