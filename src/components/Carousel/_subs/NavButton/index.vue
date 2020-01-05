<template>
  <button class="btn">
    <v-icon>arrow_{{ arrowType }}</v-icon>
  </button>
</template>
<script>
export default {
  name: "NavButton",
  props: { arrowType: String }
};
</script>