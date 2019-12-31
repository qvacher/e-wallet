<template>
    <v-flex xs12 class='pa-3'>
        <v-card>
          <v-card-title class="pb-0">
            <h3 v-if='amount' class="grey--text card__amount">{{ amount }} €</h3>
            <h3 v-else class="grey--text card__amount"><pre>-</pre></h3>
            <h2 class='font-weight-light card__title'><pre>{{ title }}</pre></h2>
          </v-card-title>
          <v-card-text>
            <pre class="card__code">{{ code }}</pre>
            <pre class="card__owner">{{ owner }}</pre>
          </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  name: 'Cards',
  components: {},
  props: {
    title: {type: String, default: null},
    amount: {type: String, default: null},
    type: {type: String, default: null},
    code: {type: String, default: null}
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>
