<template>
    
        <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="(link, i) in links"
          :key="i"
          :to="link.path"
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    
</template>

<script>
export default {
    name: "Appbar",
    data: () =>({
        links: [
       {
         name: "Home",
         path: '/'
        },
         {
         name: "Devices",
         path: '/devices'
        },
         {
         name: "Patients",
         path: '/patients'
        },
         {
         name: "Settings",
         path: '/settings'
        },
         {
         name: "About",
         path: '/about'
        },
        {
         name: "Tests",
         path: '/tests'
        },
        {
         name: "TestGrid",
         path: '/testgrid'
        },
        {
         name: "TestForm",
         path: '/testform'
        }
        
    ]
})
}
</script>