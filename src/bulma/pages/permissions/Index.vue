<template>
    <enso-table class="box is-paddingless raises-on-hover"
        id="permissions">
        <template v-slot:type="{ row }">
            <span class="tag is-table-tag"
                :class="cssClass(row)">
                {{ row.type }}
            </span>
        </template>
    </enso-table>
</template>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';
import permission from '../../mixins/permission';

export default {
    name: 'Index',

    components: { EnsoTable },

    mixins: [permission],
};
</script>
