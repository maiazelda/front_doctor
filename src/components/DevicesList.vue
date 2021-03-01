<template>
    <div>
        <h1>Ceci est ma liste de piluliers</h1>
        <table>
            <devices-list-item
                v-for="(item, i) in devices"
                :key="i"
                :device="item"
            ></devices-list-item>
        

        </table>
    </div>
</template>

<script>
import DevicesListItem from '@/components/DevicesListItem.vue'

export default {
    name: 'DevicesList',
    components: {
        DevicesListItem
    },
    data: () => ({
        devices: [
            {
                id: 1,
                name: "pilulier 1",
                patient: "maia"
            },
             {
                id: 2,
                name: "pilulier 2",
                patient: "arthur"
            },
             {
                id: 3,
                name: "pilulier 3",
                patient: "juliette"
            }
        ]
    })
}
</script>
