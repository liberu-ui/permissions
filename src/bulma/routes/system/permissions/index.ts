/**
 * This module exports the permissions index route configuration.
 */

/**
 * The permissions index component.
 */
import PermissionsIndex from '../../../pages/permissions/Index.vue';

/**
 * The permissions index route configuration.
 */
export default {
    /** The name of the permissions index route. */
    name: 'system.permissions.index',
    /** The path of the permissions index route. */
    path: '',
    /** The component to render for the permissions index route. */
    component: PermissionsIndex,
    /**
     * The metadata for the permissions index route.
     */
    meta: {
        /** The breadcrumb text for the permissions index route. */
        breadcrumb: 'index',
        /** The title for the permissions index route. */
        title: 'Permissions',
    },
};

/**
 * TypeScript type annotations.
 */
interface RouteConfig {
    name: string;
    path: string;
    component: VueComponent;
    meta: {
        breadcrumb: string;
        title: string;
    };
}

interface VueComponent {
    new (): Vue;
}

declare class Vue {
    $el: Element;
    $data: Record<string, unknown>;
    $el: HTMLElement;
    $options: object;
    $parent: Vue;
    $root: Vue;
    $children: Vue[];
    $refs: { [key: string]: Vue | Element | Vue[] | Element[]};
    $forceUpdate(): void;
    $nextTick(callback: (this: this) => void, context?: object): void;
    $mount(): void;
    $destroy(): void;
    $set(object: object, key: string, value: unknown): void;
    $delete(object: object, key: string): void;
    static extend(options?: object): typeof Vue;
    static nextTick(callback: () => void, context?: object): void;
    static set(object: object, key: string, value: unknown): void;
    static delete(object: object, key: string): void;
}

declare class Element {}

declare var Vue: VueConstructor;

interface VueConstructor {
    new(options?: ComponentOptions<Vue>): Vue;
}