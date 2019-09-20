const PermissionEdit = () => import('../../../pages/permissions/Edit.vue');

export default {
    name: 'system.permissions.edit',
    path: ':permission/edit',
    component: PermissionEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Permission',
    },
};
