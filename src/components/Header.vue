<template>
  <header class="position-fixed w-100 px-0 px-xl-5">
    <nav
      class="header_container align-middle mt-3 mx-2 mx-sm-5 navbar navbar-expand-lg navbar-light pt-0 px-0"
    >
      <!-- brand -->
      <a class="navbar-brand mt-2" href="/">
        <img
          class="header_logo align-middle d-inline-block"
          src="../assets/logo.png"
          alt="logo"
        />
        <h1 class="header_title d-inline-block">情クラ！</h1>
        <span class="header_subtitle d-none d-xl-inline-block"
          >~ 情報系マインクラフトサーバ ~</span
        >
      </a>

      <!-- hamburger menu -->
      <button
        class="mr-3 navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navigation -->
      <div class="header_collapse collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="ml-4 ml-sm-0 mt-2 nav-item">
            <a class="header_link nav-link" href="/">ホーム</a>
          </li>
          <li class="dropdown ml-4 ml-sm-0 mt-2 nav-item">
            <a
              class="header_link dropdown-toggle nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              メンバー機能
            </a>
            <div class="dropdown-menu mr-4 mr-sm-0 px-2" aria-labelledby="navbarDropdown">
              <a class="header_dropdown_item dropdown-item" href="#"
                >起動・停止</a
              >
              <a class="header_dropdown_item dropdown-item" href="#">再起動</a>
              <div class="dropdown-divider"></div>
              <span class="header_dropdown_item dropdown-item"
                >随時追加予定</span
              >
            </div>
          </li>
          <li class="ml-4 ml-sm-0 mt-2 nav-item">
            <a class="header_link nav-link" href="#">公式アプリ</a>
          </li>
          <li class="ml-4 ml-sm-0 mt-2 nav-item">
            <a class="header_link nav-link" href="#">コンソール</a>
          </li>
          <li class="nav-item">
            <a class="header_button nav-link text-center" href="#"
              ><span>ログイン</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* bootstrap */
.navbar-light .navbar-toggler {
  border-color: rgba(0, 0, 0, 0);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(172, 185, 233, 1)' stroke-width='2' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-toggler {
  outline: none;
}
.navbar-collapse {
  justify-content: flex-end;
}
.dropdown-menu {
  background: -moz-linear-gradient(top, #4f5980, #414d81);
  background: -webkit-linear-gradient(top, #4f5980, #414d81);
  background: linear-gradient(to bottom, #4f5980, #414d81);
}
.dropdown-item:hover {
  background: #acb9e9;
  border-radius: 5px;
  color: #414d81;
}

/* original */
.header_container {
  background: -moz-linear-gradient(top, #4f5980, #414d81);
  background: -webkit-linear-gradient(top, #4f5980, #414d81);
  background: linear-gradient(to bottom, #4f5980, #414d81);
  border-radius: 15px;
  height: 65px;
}
.header_logo {
  height: 45px;
  margin-left: 25px;
}
.header_title {
  color: #acb9e9;
  text-shadow: 4px 4px 4px rgba(52, 67, 107, 0.25);
  font-size: 22px;
  margin-left: 10px;
}
.header_subtitle {
  color: #acb9e9;
  text-shadow: 4px 4px 4px rgba(52, 67, 107, 0.25);
  font-size: 15px;
  margin-left: 10px;
  position: relative;
  top: -2px;
}
.header_collapse {
  margin-top: 16px;
}
.header_link {
  color: #acb9e9 !important;
  font-size: 14px;
  height: 40px;
  margin-right: 20px;
  padding: 0 10px;
  text-shadow: 4px 4px 4px rgba(52, 67, 107, 0.22);
  transition: 0.5s;
}
.header_link:hover {
  text-shadow: 4px 4px 4px rgba(52, 67, 107, 0.1);
  transform: translateY(-1px);
}
.header_dropdown_item {
  border-radius: 5px;
  color: #acb9e9;
  font-size: 13px;
  letter-spacing: 1px;
  margin: 5px 0;
  padding: 10px 15px !important;
  transition: 0.5s;
}
.header_dropdown_item:hover {
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
  transform: translateY(-0.5px);
}
.header_button {
  background: -moz-linear-gradient(top, #6c94cc, #5a91d2);
  background: -webkit-linear-gradient(top, #6c94cc, #5a91d2);
  background: linear-gradient(to bottom, #6c94cc, #5a91d2);
  border-radius: 20px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
  color: #a5cdfb !important;
  font-size: 14px;
  height: 38px;
  letter-spacing: 1px;
  margin-left: 10px;
  margin-right: 30px;
  transition: 0.5s;
  width: 115px;
}
.header_button:hover {
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
  transform: translateY(-0.5px);
}
.header_button > span {
  text-shadow: 4px 4px 4px rgba(52, 67, 107, 0.22);
}
</style>