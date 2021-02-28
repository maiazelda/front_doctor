<template>
    <div>
        <h1>Liste des Piluliers</h1>
        <DevicesList></DevicesList>
    </div>
</template>

<script>
import DevicesList from '@/components/DevicesList.vue'

export default {
    name: 'Devices',
    components: {
        DevicesList
    }
}
</script>
