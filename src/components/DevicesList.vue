<template>
    
        
        <v-list two-line>
            <devices-list-item
                v-for="(item, i) in items"
                :key="i"
                :item="item"
            ></devices-list-item>
        

        </v-list>
    
</template>

<script>
import DevicesListItem from '@/components/DevicesListItem.vue'

export default {
    name: 'DevicesList',
    components: {
        DevicesListItem
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    
}
</script>
