<template>
  <nav>
    <v-toolbar app flat class="transparent">
      <v-spacer />
      <v-btn flat icon class="ml-3">
        <v-icon class="grey--text">search</v-icon>
      </v-btn>
      <v-badge overlap color="#D64158">
        <template v-slot:badge>
          <span></span>
        </template>
        <v-btn flat icon class="ml-3">
          <v-icon class="grey--text">notifications_none</v-icon>
        </v-btn>
      </v-badge>
      <v-btn flat icon class="ml-3">
        <v-icon class="grey--text">settings_applications</v-icon>
      </v-btn>
      <v-avatar size="40px" color="#D64158" class="ml-4">
        <span class="grey--text headline">Q</span>
      </v-avatar>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      hide-overlay
      stateless
      app
    >
      <v-toolbar flat>
        <v-toolbar-side-icon
          class="grey--text"
          @click.stop="mini = !mini"
        ></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">Card</span><span class="font-weight-bold">Wallet</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list class="pt-0 nav__container" dense>
        <h5 class="nav__title">Main</h5>
        <router-link
          v-for="link in navigation"
          :key="link.title"
          :to="link.route"
          @click.native="$event.stopImmediatePropagation()"
          class="nav_link"
          exact
        >
         <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      navigation: [
        { title: 'Dashboard', icon: 'insert_chart', route: '/dashboard' },
        { title: 'Cards', icon: 'credit_card', route: '/cards' }
      ],
      mini: true
    }
  }
}
</script>
