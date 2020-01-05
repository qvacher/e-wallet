<template>
  <ul class="mb-1 pa-0">
    <li
      v-for="(_, index) in elements"
      class="dot mx-2"
      :key="index"
      :class="{'dot-selected': currentElementIndex === index}"
    >
      <button
        class="indicator-btn"
        @click="showElement(index)"
        :disabled=" currentElementIndex === index"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    elements: Array,
    currentElementIndex: Number,
    showElement: Function
  }
};
</script>