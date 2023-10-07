```
type Permission = {
    type: PermissionEnum;
};

enum PermissionEnum {
    Read,
    Write,
    Delete,
    Link,
    Menu
}

/**
 * Returns the CSS class based on the given permission type.
 * @param permissionEnum - The permission enum object.
 * @param permission - The permission object containing the type.
 * @returns The CSS class for the given permission type.
 */
const getCssClass = (permissionEnum: PermissionEnum, permission: Permission): string => {
    switch (permission.type) {
        case PermissionEnum.Read:
            return 'is-success';
        case PermissionEnum.Write:
            return 'is-warning';
        case PermissionEnum.Delete:
            return 'is-danger';
        case PermissionEnum.Link:
            return 'is-info';
        case PermissionEnum.Menu:
            return 'is-primary';
        default:
            return '';
    }
};

export default getCssClass;
```