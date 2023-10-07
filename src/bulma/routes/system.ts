/**
 * This module defines the routes for the system module.
 * @module SystemRoutes
 */

import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';
import { RouteConfig } from 'vue-router';

/**
 * Imports context of route files and converts them into an array of route configs.
 * @param {Context} context - The context of the route files.
 * @returns {Array<RouteConfig>} - The array of route configurations.
 */
const importRoutes = (context: __WebpackModuleApi.RequireContext): Array<RouteConfig> => {
  return routeImporter(context);
};

/**
 * The route configuration for the system module.
 * @type {Object}
 * @property {string} path - The route path.
 * @property {Array<RouteConfig>} children - The child routes.
 */
const systemRoutes: RouteConfig = {
  path: '/system',
  children: importRoutes(require.context('./system', false, /.*\.ts$/)),
};

export default systemRoutes;
