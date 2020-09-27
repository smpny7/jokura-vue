<template>
  <!-- <div class="home text-center" id="home"> -->
  <div class="home text-center">
    <!-- <Login v-if="!isLogin"></Login> -->
    <!-- <Editor v-if="isLogin" :user="userData"></Editor> -->
    <div>やっはろー！</div>
    <!-- <HelloWorld
      v-if="isLogin"
      :user="userData"
      msg="Welcome to Your Vue.js + TypeScript App"
    /> -->
  </div>
</template>

 <script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import firebase from "../../firebase.js";
// import Login from "@/components/Login.vue";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
