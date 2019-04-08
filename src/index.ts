// src/index.ts

import Vue from 'vue';
import hello from './components/Hello.vue';

let v = new Vue({
  el: '#app',
  components: {
    hello,
  },
  data: {
    type: String,
    name: 'What Name?',
  },
  template: `
  <div>
    Name: <input v-model="name" type="text">
    <-- hello :name="name" :initialEnthusiasm="5" / -->
    <hello />
  </div>`,
});
