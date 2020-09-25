<template>
  <div class="container">
    <div class="row px-4">
      <div class="login_container col-12 text-center">
        <h2 class="login_title">
          <span class="d-inline-block">ここから先は</span
          ><span class="d-inline-block">認証が必要です</span>
        </h2>
        <picture>
          <source srcset="../assets/img/login_icon.webp" type="image/webp" />
          <img
            class="login_icon d-block"
            src="../assets/img/login_icon.png"
            alt="icon"
          />
        </picture>
        <button class="login_button col-11 col-md-8 col-lg-6 col-xl-5">
          <picture>
            <source
              srcset="../assets/img/login_okadai.webp"
              type="image/webp"
            />
            <img
              class="login_okadai"
              src="../assets/img/login_okadai.png"
              alt="okadai"
            />
          </picture>
          <span class="login_label">岡大Gmailでログイン</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* original */
.login_container {
  background: -moz-linear-gradient(top left, #6b82d480, #50569080);
  background: -webkit-linear-gradient(top left, #6b82d480, #50569080);
  background: linear-gradient(to bottom right, #6b82d480, #50569080);
  border-radius: 20px;
  margin-top: 10vh;
  padding-bottom: 8vh;
}
.login_title {
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
  margin-top: 10vh;
  letter-spacing: 5px;
  line-height: 3.5rem;
}
.login_icon {
  height: 20vh;
  margin: 4vh auto 0;
}
.login_button {
  background: #ffffff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
  height: 60px;
  margin-top: 6vh;
  outline: none;
  position: relative;
  transition: 0.5s;
}
.login_button:hover {
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}
.login_okadai {
  height: 40px;
  left: 25px;
  position: absolute;
  top: 10px;
}
.login_label {
  font-size: 1.2rem;
  letter-spacing: 4px;
  margin-left: 40px;
}

/* responsive */
@media screen and (max-width: 576px) {
  .login_container {
    margin-top: 4vh;
    padding-bottom: 6vh;
  }
  .login_title {
    font-size: 32px;
    margin-top: 5vh;
    line-height: 3rem;
  }
  .login_okadai {
    left: 12px;
  }
  .login_label {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin-left: 40px;
  }
}
</style>