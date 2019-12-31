<template>
  <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      persistent
      attach=".v-content__wrap"
    >
      <v-card class="grey--text">
        <v-card-title>
          <h1 class="font-weight-light pl-3">Add a new card</h1>
          <v-spacer/>
          <v-btn
            @click="close()"
            small
            icon
            flat
            dark
            color="#D64158"
          >
            <v-icon>
              close
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-0">
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg3 xl3 class='pa-3 d-flex'>
              <v-card class='card card__form'>
                <v-card-title>
                  <h3 v-if='amount' class="grey--text card__amount">{{ amount }} €</h3>
                  <h3 v-else class="grey--text card__amount"><pre>-</pre></h3>
                  <h2 class='font-weight-light card__title'><pre>{{ title }}</pre></h2>
                </v-card-title>
                <v-card-text>
                  <v-icon class="grey--text card__barcode mb-4">fa-barcode</v-icon>
                  <pre class="card__code">{{ fCode }}</pre>
                  <pre class="card__owner">{{ owner }}</pre>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 xl6 class='pa-3'>
              <v-form ref="form">
                <v-layout row class="pb-1">
                  <v-flex md8 sm12 xs12>
                    <v-text-field
                      v-model="title"
                      label="Card title"
                      outline
                      hide-details
                      class="grey--input"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row class="pb-1">
                  <v-flex md8 sm12 xs12>
                    <v-text-field
                      v-model="code"
                      label="Card number"
                      mask="credit-card"
                      outline
                      hide-details
                      class="grey--input"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row class="pb-1">
                  <v-flex md8 sm12 xs12>
                    <v-text-field
                      v-model="amount"
                      label="Amount"
                      outline
                      hide-details
                      class="grey--input"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex md8 sm12 xs12>
                    <v-text-field
                      v-model="owner"
                      label="Owner"
                      outline
                      hide-details
                      class="grey--input"
                    />
                  </v-flex>
                </v-layout>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="#D64158"
            dark
            class="ml-4 mb-3"
            @click="addCard()"
          >
            Add card
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Modals',
  props: {
    open: {type: Boolean, default: null}
  },
  data () {
    return {
      dialog: false,
      title: '',
      amount: '',
      code: '',
      owner: '',
      card: {}
    }
  },
  created () {
    this.dialog = this.open
  },
  computed: {
    fCode () {
      let fCode = ''
      if (this.code !== '') {
        fCode = this.code.match((/.{1,4}/g)).join(' ')
      }
      return fCode
    }
  },
  watch: {
    open () {
      this.dialog = this.open
    }
  },
  methods: {
    addCard () {
      this.card.title = this.title
      this.card.code = this.fCode
      this.card.amount = this.amount
      this.card.owner = this.owner

      this.$emit('add-card', this.card)
      this.$refs.form.reset()
      this.card = {}
      this.$emit('close')
    },
    close () {
      this.$refs.form.reset()
      this.$emit('close')
    }
  }
}
</script>
