<template>

    
     <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{device.name}}</v-list-item-title>
        <v-list-item-subtitle>{{device.patient}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
</template>

<script>

export default {
    name: "DevicesListItem",
    props: {
        device: {
            type: Object,
            required: true
        }
    }

}
</script>