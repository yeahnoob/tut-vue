<!-- src/components/Hello.vue -->

<template>
  <div>
    <div class="greeting">Hello {{ name }} {{ exclamationMarks }}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: { name: { type: String, default: 'Bro!' }, initialEnthusiasm: { type: Number, default: 5 } },
  data() {
    return {
      enthusiasm: this.initialEnthusiasm,
    };
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1)
        .join('=')
        .concat('>');
    },
  },
  methods: {
    increment() {
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    },
  },
});
</script>

<style lang="css">
.greeting {
  font-size: 20px;
}
</style>
