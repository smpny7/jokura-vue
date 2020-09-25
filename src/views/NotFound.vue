<template>
  <div class="container">
    <div class="row">
      <div
        class="notfound_container col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4 p-0 text-center"
      >
        <picture>
          <source srcset="../assets/img/notfound_bed.webp" type="image/webp" />
          <img
            class="notfound_bed"
            src="../assets/img/notfound_bed.png"
            alt="bed"
          />
        </picture>
        <h2 class="notfound_title mt-3 text-center">404 エラー</h2>
        <p class="notfound_subtitle mt-4 text-center">
          申し訳ありません<br />お探しのページは見つかりませんでした
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* original */
.notfound_container {
  margin: 12vh auto 0;
}
.notfound_bed {
  animation-name: fluffy;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.5s;
  width: 60%;
}
.notfound_title {
  color: #ffffff;
}
.notfound_subtitle {
  color: #787a8b;
}

/* responsive */
@media screen and (min-width: 768px) {
  .notfound_container {
    margin-top: 20vh;
  }
  .notfound_title {
    font-size: 3rem;
  }
  .notfound_subtitle {
    font-size: 1.1rem;
  }
}

/* animation */
@keyframes fluffy {
  0% {
    transform: translate(0, 0px);
  }

  100% {
    transform: translate(0, -8px);
  }
}
</style>