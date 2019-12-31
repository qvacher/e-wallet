<template>
    <v-layout column>
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
</template>

<script>
import Card from '@/components/Cards'
import Modal from '@/components/Modals'

export default {
  name: 'Cards',
  components: {
    Card,
    Modal
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
      dialog: false
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
      this.cards.indexOf(this.cards.find(function (card) { return card.code === code }))
    }
  }
}
</script>
