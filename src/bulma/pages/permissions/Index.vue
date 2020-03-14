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
import { mapState } from 'vuex';
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    name: 'Index',

    components: { EnsoTable },

    computed: {
        ...mapState(['enums']),
    },

    methods: {
        cssClass({ type }) {
            switch (type) {
            case this.enums.permissionTypes.Read:
                return 'is-success';
            case this.enums.permissionTypes.Write:
                return 'is-warning';
            case this.enums.permissionTypes.Delete:
                return 'is-danger';
            case this.enums.permissionTypes.Menu:
                return 'is-info';
            default:
                return '';
            }
        },
    },
};
</script>
