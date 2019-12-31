<template>
    <v-app>
      <Navbar/>
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid class="pt-0">
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import router from '@/router'
import vuetify from '@/plugins/vuetify'

import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  router,
  vuetify,
  components: {
    Navbar
  }
}
</script>
