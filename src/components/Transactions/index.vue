<template>
  <v-flex xs8 class="pa-2">
    <v-card class="transaction">
      <v-card-text>
        <v-avatar size="40px" color="#D64158" class="mr-4">
          <span class="grey--text headline">Q</span>
        </v-avatar>
        <h2 class="grey--text transaction__title">{{ title }}</h2>
        <v-spacer />
        <h3 class="transaction__amount">
          <span v-if="type === 'credit'" class="transaction__amount-credit">+</span>
          <span v-else class="transaction__amount-debit">-</span>
          <span class="grey--text font-weight-light">{{ amount }}</span>
          <span class="grey--text-darken transaction__amount-devise">€</span>
        </h3>
        <v-icon v-if="type === 'credit'" color="success" class="ml-2">call_made</v-icon>
        <v-icon v-else color="#D64158" class="ml-2">call_received</v-icon>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Cards",
  components: {},
  props: {
    title: { type: String, default: null },
    amount: { type: String, default: null },
    type: { type: String, default: null },
    code: { type: String, default: null }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
