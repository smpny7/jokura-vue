<template>
  <div id="app">
    <Header />
    <div class="space"></div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Component({
  components: {
    Header,
  },
  methods: {
    createPageTitle(to) {
      if (to.meta.title) {
        const setTitle =
          to.meta.title + ' | 情クラ！ - Minecraftサーバ管理システム';
        document.title = setTitle;
      } else {
        document.title = '情クラ！ - Minecraftサーバ管理システム';
      }
    },
  },
  mounted() {
    const to = this.$route;
    (this as any).createPageTitle(to);
  },
  watch: {
    $route(to, from) {
      (this as any).createPageTitle(to);
    },
  },
})
export default class App extends Vue {}
</script>