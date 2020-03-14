import { mapState } from 'vuex';

export default {
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
