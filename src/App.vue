<template>
  <v-app>

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
          v-for="link in links"
          :key="link"
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


    <v-main>
      <router-view>
     </router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
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
        }
        
    ]
    //
  }),
};
</script>
