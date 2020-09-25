<template>
  <div class="container">
    <div class="row">
      <div class="maintenance_container col-8 col-sm-6 col-lg-4 col-xl-3 p-0">
        <div class="h-100 w-100">
          <picture>
            <source
              srcset="../assets/img/maintenance_round1.webp"
              type="image/webp"
            />
            <img
              class="maintenance_round1"
              src="../assets/img/maintenance_round1.png"
              alt="round1"
            />
          </picture>
          <picture>
            <source
              srcset="../assets/img/maintenance_round2.webp"
              type="image/webp"
            />
            <img
              class="maintenance_round2"
              src="../assets/img/maintenance_round2.png"
              alt="round2"
            />
          </picture>
          <picture>
            <source
              srcset="../assets/img/maintenance_creeper.webp"
              type="image/webp"
            />
            <img
              class="maintenance_creeper"
              src="../assets/img/maintenance_creeper.png"
              alt="creeper"
            />
          </picture>
        </div>
        <h2 class="maintenance_title text-center">{{ title }}</h2>
        <p class="maintenance_subtitle text-center">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data(): {
    title: string;
    subtitle: string;
  } {
    return {
      title: "",
      subtitle: "",
    };
  },
  mounted() {
    axios.get("./setting.json").then((response) => {
      (this as any).title = response.data.title as string;
      (this as any).subtitle = response.data.subtitle as string;
    });
  },
};
</script>

<style scoped>
/* bootstrap */
.container {
  height: 70vh;
  overflow: hidden;
}

/* original */
.maintenance_container {
  margin: 10vh auto 0;
}
.maintenance_round1 {
  animation-name: fluffy;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 3s;
  position: relative;
  width: 60%;
}
.maintenance_round2 {
  animation-name: fluffy;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 3.75s;
  left: 26%;
  position: relative;
  top: -15%;
  width: 80%;
}
.maintenance_creeper {
  animation-name: fluffy;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 5s;
  left: 32%;
  position: relative;
  top: -47%;
  width: 50%;
}
.maintenance_title {
  color: #ffffff;
  position: relative;
  top: -58%;
}
.maintenance_subtitle {
  color: #787a8b;
  position: relative;
  top: -58%;
}

/* responsive */
@media screen and (min-width: 768px) {
  .maintenance_container {
    margin-top: 20vh;
  }
  .maintenance_title {
    font-size: 2.5rem;
  }
  .maintenance_subtitle {
    font-size: 1.2rem;
  }
}

/* animation */
@keyframes fluffy {
  0% {
    transform: translate(0, 0px);
  }

  100% {
    transform: translate(0, -10px);
  }
}
</style>