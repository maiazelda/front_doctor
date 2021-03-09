<template>
    <div>
        <h1>Liste des Piluliers</h1>
        <DevicesList :items="devices"></DevicesList>
        <v-btn color="primary" @click="onAddClick">Ajouter device</v-btn>
    </div>
</template>

<script>
import Backend from '@/services/backend'
import DevicesList from '@/components/DevicesList.vue'

export default {
    name: 'Devices',
    components: {
        DevicesList
    },
    data: () => ({
        devices: []
    }),
    methods: {
        loadDevices() {
            Backend.getDevices()
            .then(data => {
                this.devices = data.devices
                console.log("données chargées")
            })
        },
        onAddClick(){
            this.$router.push("/TestForm")
        }
    },
    mounted() {
        this.loadDevices()
    }
}
</script>
