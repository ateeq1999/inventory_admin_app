<template>
    <v-card>
        <v-card-title>
            Reports
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="4">
                    <v-card>
                        <v-card-title>
                            Equipments Total
                        </v-card-title>
                        <v-card-text>
                            {{ reportsData.equipments_number }}
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                        <v-card-title>
                            Doctors Total
                        </v-card-title>
                        <v-card-text>
                            {{ reportsData.doctors_number }}
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                        <v-card-title>
                            Order Total
                        </v-card-title>
                        <v-card-text>
                            {{ reportsData.orders_number }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Dashboard",
    data: () => ({
        reports: null
    }),
    computed: {
      ...mapGetters("Report", ["reportsData"])
    },
    methods: {
        ...mapActions("Report", ["index"]),
    },
    created(){
        this.index().then(res => {
            this.reports = this.reportsData
        })
    }
}
</script>

<style scoped>
    .overlap-icon {
        position: absolute;
        top: -33px;
        text-align: center;
        padding-top: 12px;
    }
</style>