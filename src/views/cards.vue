<template>
  <transition name="list" mode="out-in">
    <v-layout column v-if="!detailedView" key="list">
      <v-layout row>
        <h1 class="font-weight-light grey--text pl-3 mb-4">Cards</h1>
      </v-layout>
      <v-layout row wrap>
        <Card
            v-for='card in cards'
            :key='card.code'
            :title='card.title'
            :amount='card.amount'
            :owner='card.owner'
            :code='card.code'
            @delete-card="deleteCard($event)"
            @details-card="detailsCard($event)"
        />
        <v-flex xs12 sm6 md6 lg3 xl3 class='pa-3'>
            <v-btn class='card__add' @click.stop="dialog = true">
                <v-icon class="mr-2">add</v-icon>
                <span>Add a new card</span>
            </v-btn>
        </v-flex>
        <Modal
          :open="dialog"
          @add-card="addCard($event)"
          @close="dialog = false;"
        />
      </v-layout>
    </v-layout>
    <v-layout column v-if="detailedView" key="detail">
      <v-layout row>
        <h1 class="font-weight-light grey--text pl-3 mb-4">Details</h1>
      </v-layout>
      <v-layout row class="justify--content-center">
        <CardDetail
          :key='selectedCard.code'
          :title='selectedCard.title'
          :amount='selectedCard.amount'
          :owner='selectedCard.owner'
          :code='selectedCard.code'
        />
      </v-layout>
      <v-layout row wrap class="justify--content-center">
        <Transaction
          v-for='transaction in transactions'
          :key='transaction.code'
          :title='transaction.title'
          :amount='transaction.amount'
          :code='transaction.code'
          :type='transaction.type'
        />
      </v-layout>
    </v-layout>
  </transition>
</template>

<script>
import Card from '@/components/Cards/List'
import CardDetail from '@/components/Cards/Detail'
import Modal from '@/components/Modals'
import Transaction from '@/components/Transactions'

export default {
  name: 'Cards',
  components: {
    Card,
    CardDetail,
    Modal,
    Transaction
  },
  props: {

  },
  data () {
    return {
      cards: [
        {title: 'Auchan', amount: '4,3', owner: 'Quentin Vacher', code: '0491 1275 2176 0197'},
        {title: 'Casino', amount: '8,7', owner: 'Quentin Vacher', code: '0491 1281 2172 0193'},
        {title: 'E-Leclerc', amount: '0,67', owner: 'Quentin Vacher', code: '0441 1294 2175 0196'},
        {title: 'Feu Vert', amount: '', owner: 'Quentin Vacher', code: '0491 1294 2175 0196'},
        {title: 'UGC', amount: '', owner: 'Quentin Vacher', code: '0491 1307 2178 0199'},
        {title: 'Gaumont Pathé', amount: '', owner: 'Quentin Vacher', code: '0491 1307 2174 0199'},
        {title: 'Midas', amount: '', owner: 'Quentin Vacher', code: '0492 1307 2178 0199'}
      ],
      dialog: false,
      detailedView: false,
      selectedCard: {},
      transactions: [
        {title: 'Paiement', amount: '4', type: 'debit', code: '0491 1275 2176 0197'},
        {title: 'Credit from gift card', amount: '4,15', type: 'credit', code: '0491 1275 2176 0197'},
        {title: 'Credit from coupon', amount: '4', type: 'credit', code: '0491 1275 2176 0197'},
        {title: 'Credit from promo', amount: '0,15', type: 'credit', code: '0491 1275 2176 0197'}
      ]
    }
  },
  methods: {
    addCard (card) {
      this.cards.push(card)
    },
    deleteCard (code) {
      this.cards.splice(this.cards.indexOf(this.cards.find(function (card) { return card.code === code })), 1)
    },
    detailsCard (code) {
      this.detailedView = !this.detailedView
      this.selectedCard = this.cards.find(function (card) { return card.code === code })
    }
  }
}
</script>
