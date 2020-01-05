<template>
  <v-layout row wrap class="justify--content-center">
    <v-flex xs12>
      <div class="card-carousel">
        <NavButton
          arrowType="left"
          @click.native="showPrevElement"
          :disabled="this.reachedMaxLeft"
        />
        <transition name="carousel" mode="out-in">
          <CardDetail
            class="current-element"
            :key="currentElementIndex"
            :title="currentElement.title"
            :amount="currentElement.amount"
            :owner="currentElement.owner"
            :code="currentElement.code"
          />
        </transition>
        <NavButton
          arrowType="right"
          @click.native="showNextElement"
          :disabled="this.reachedMaxRight"
        />
      </div>
      <Pagination
        :elements="this.cards"
        :currentElementIndex="this.currentElementIndex"
        :showElement="this.showElement"
      />
    </v-flex>
    <transition-group name="transactions" tag="v-layout" appear>
      <Transaction
        v-for="(transaction, index) in currentTransactions"
        :key="index"
        :title="transaction.title"
        :amount="transaction.amount"
        :type="transaction.type"
      />
    </transition-group>
  </v-layout>
</template>
<script>
import CardDetail from "@/components/Cards/Detail";
import NavButton from "@/components/Carousel/_subs/NavButton";
import Pagination from "@/components/Carousel/_subs/Pagination";
import Transaction from "@/components/Transactions";

export default {
  name: "Carousel",
  props: {
    cards: { type: Array, default: null },
    currentCardIndex: { type: Number, default: null },
    transactions: { type: Array, default: null }
  },
  components: {
    CardDetail,
    NavButton,
    Pagination,
    Transaction
  },
  data() {
    return {
      currentElementIndex: 0
    };
  },
  created() {
    this.currentElementIndex = this.currentCardIndex;
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    },
    currentTransactions() {
      return this.transactions.filter(
        transaction =>
          transaction.code === this.cards[this.currentElementIndex].code
      );
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0;
    },
    reachedMaxRight() {
      return this.currentElementIndex === this.cards.length - 1;
    }
  },
  methods: {
    showNextElement() {
      this.currentElementIndex++;
    },
    showPrevElement() {
      this.currentElementIndex--;
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex;
    }
  }
};
</script>
