<template>
    <v-flex xs12 sm6 md6 lg3 xl3 class='pa-3'>
      <div class="flip-card">
        <v-card class='card flip-card-inner' @click="flip()">
            <div class="flip-card-front">
              <v-card-title class="pb-0">
                <h3 v-if='amount' class="grey--text card__amount">{{ amount }} €</h3>
                <h3 v-else class="grey--text card__amount"><pre>-</pre></h3>
                <h2 class='font-weight-light card__title'><pre>{{ title }}</pre></h2>
              </v-card-title>
              <v-card-text>
                <v-icon class="grey--text card__barcode mb-4">fa-barcode</v-icon>
                <pre class="card__code">{{ code }}</pre>
                <pre class="card__owner">{{ owner }}</pre>
              </v-card-text>
            </div>
            <div class="flip-card-back">
              <v-card-text class="layout flex xs12">
                <v-btn
                  @click="$emit('delete-card', code)"
                  icon
                  flat
                  dark
                >
                  <v-icon>
                    delete
                  </v-icon>
                </v-btn>
                <v-btn
                  @click="$emit('details-card', code)"
                  icon
                  flat
                  dark
                >
                  <v-icon>
                    visibility
                  </v-icon>
                </v-btn>
              </v-card-text>
            </div>
        </v-card>
      </div>
    </v-flex>
</template>

<script>
export default {
  name: 'Cards',
  components: {},
  props: {
    title: {type: String, default: null},
    amount: {type: String, default: null},
    owner: {type: String, default: null},
    code: {type: String, default: null}
  },
  data () {
    return {
    }
  },
  methods: {
    flip () {
      this.$el.children[0].children[0].classList.toggle('flipped')
    }
  }
}
</script>
