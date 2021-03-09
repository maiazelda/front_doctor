<template>

    
     <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{item.device}}</v-list-item-title>
        <v-list-item-subtitle>{{item.user}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
</template>

<script>

export default {
    name: "DevicesListItem",
    props: {
        item: {
            type: Object,
            required: true
        }
    }

}
</script>