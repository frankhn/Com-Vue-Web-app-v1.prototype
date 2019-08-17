<template>
  <div class="menu-container">
    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">BrandName</router-link>
      <form class="form-inline my-2 my-lg-7 col-md-7">
        <input
          class="form-control mr-sm-2 col-lg-6 col-md-6"
          type
          placeholder="Search for Products, Brands and more"
          name
        />
        <input class="form-control mr-sm-1 col-lg-4 col-md-4" type placeholder="Location" name />
        <button class="btn btn-outline-success">
          <svg width="15px" height="15px">
            <path
              d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "
            />
          </svg>
        </button>
      </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <i class="fa fa-bell fa-2x"></i>
          </li>
          <li class="nav-item">
            <router-link to="/me/frank">
            <i class="fa fa-user-circle fa-2x" />
            </router-link>
          </li>
          <li class="nav-item">
            <svg
              id="apps-svg"
              class="header--btn"
              key="off"
              @click="show = !show"
              data-v-fc5ca04c
              viewBox="0 0 24 24"
              width="28px"
              height="29px"
            >
              <path
                data-v-fc5ca04c
                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
              />
            </svg>
            <transition name="dropdown">
              <div class="header__dropdown-menu" v-bind:class="{ active: show }" v-if="show">
                <ul class="header__dropdown-menu-nav">
                  <li class="header__dropdown-menu-item">
                    <router-link to="/dashboard" class="header__dropdown-menu-link" title="Account">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 496 512" class="header--icon">
                          <path
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">Sell</div>
                    </router-link>
                  </li>
                  <li class="header__dropdown-menu-item">
                    <a href="#" class="header__dropdown-menu-link" title="Personal info">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 576 512" class="header--icon">
                          <path
                            d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">Wishlist</div>
                    </a>
                  </li>
                  <li class="header__dropdown-menu-item">
                    <a href="#" class="header__dropdown-menu-link" title="Privacy">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 512 512" class="header--icon">
                          <path
                            d="M256 169.92c-28.28.41-52.84 9.62-71.37 28.17-18 18-27.69 41.94-27.28 67.44.78 50.23-3.91 100.5-14 149.39-1.81 8.66 3.78 17.12 12.41 18.91 8.5 1.66 17.09-3.77 18.91-12.44 10.56-51.17 15.5-103.78 14.69-156.35-.25-16.77 6.09-32.5 17.91-44.31 18.66-18.66 42.27-18.8 48.75-18.8 37.12.55 66.41 30.19 66.97 66.06.78 50.37-2.97 100.86-11.12 150.06-1.44 8.72 4.44 16.95 13.16 18.39.91.16 1.78.22 2.66.22 7.69 0 14.47-5.55 15.75-13.39 8.47-51.08 12.34-103.48 11.56-155.79-.87-53-44.81-96.76-99-97.56zm-.09 86.09c-8.84.14-15.87 7.41-15.75 16.25 1.12 73.39-8.22 144.99-27.78 215.07l-1.22 4.33c-1.85 6.63 1.74 20.34 15.41 20.34 7 0 13.41-4.61 15.41-11.66l1.22-4.37c20.41-73.08 30.16-147.74 28.97-224.21-.14-8.84-8.23-15.9-16.26-15.75zM112.66 149.79c-25.19 30.98-38.72 70.11-38.09 110.15.62 39.56-2.62 79.14-9.59 117.61-1.56 8.7 4.19 17.03 12.91 18.61.97.17 1.91.25 2.87.25 7.56 0 14.31-5.42 15.72-13.14 7.34-40.53 10.72-82.18 10.09-123.82-.53-33.01 10.19-63.95 30.91-89.47 5.59-6.86 4.53-16.94-2.31-22.51-6.85-5.55-16.91-4.57-22.51 2.32zm399.22 103.03c-.25-16.5-2.19-33.03-5.75-49.14-1.91-8.61-10.34-14-19.06-12.17-8.62 1.91-14.09 10.44-12.19 19.08 3.09 14 4.78 28.39 5 42.73.12 7.66.16 15.31.09 22.97-.06 8.83 7.03 16.05 15.87 16.12h.12c8.78 0 15.94-7.08 16-15.87.07-7.91.04-15.81-.08-23.72zM252.6.05C182.63-1.29 118.32 24.88 70.32 72.91 24.04 119.22-.87 180.76.16 246.2c.12 7.55.06 15.09-.16 22.62-.25 8.83 6.72 16.2 15.56 16.45H16c8.62 0 15.75-6.87 16-15.55.22-8 .28-16.02.16-24.03-.9-56.69 20.69-110.04 60.78-150.16 41.78-41.84 98.9-64.37 159.15-63.48 74.69 1.09 144.87 38.23 187.75 99.32 5.12 7.23 15.12 8.97 22.28 3.91 7.25-5.08 9-15.05 3.91-22.28C417.28 43.52 337.5 1.3 252.6.05zm1.28 84.93a182.36 182.36 0 0 0-45.19 4.91c-8.59 2.03-13.91 10.66-11.87 19.26 2.03 8.58 10.75 13.87 19.25 11.86 12.12-2.86 25.09-4.25 37.31-4.03 82.78 1.22 151.12 67.56 152.37 147.89.62 39.65-1.34 79.59-5.81 118.7-1 8.78 5.31 16.7 14.09 17.7.62.08 1.22.11 1.84.11 8 0 14.94-6.02 15.87-14.19 4.62-40.47 6.62-81.79 6-122.82-1.49-97.44-83.99-177.92-183.86-179.39z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">Privacy</div>
                    </a>
                  </li>
                  <li class="header__dropdown-menu-item">
                    <a href="#" class="header__dropdown-menu-link" title="Data & personalization">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 448 512" class="header--icon">
                          <path
                            d="M224 420c-11 0-20-9-20-20v-64c0-11 9-20 20-20s20 9 20 20v64c0 11-9 20-20 20zm224-148v192c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h16v-64C64 71.6 136-.3 224.5 0 312.9.3 384 73.1 384 161.5V224h16c26.5 0 48 21.5 48 48zM96 224h256v-64c0-70.6-57.4-128-128-128S96 89.4 96 160v64zm320 240V272c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">localization</div>
                    </a>
                  </li>
                  <li class="header__dropdown-menu-item">
                    <a href="#" class="header__dropdown-menu-link" title="People & sharing">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 640 512" class="header--icon">
                          <path
                            d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-160c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm80.1 212c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM352 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zm271.7-114.9C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.2 0-26.1 3-38.1 8.1 15.2 15.4 18.5 23.6 20.2 26.6 5.7-1.6 11.6-2.6 17.9-2.6 21.8 0 30 10 66.8 10s45-10 66.8-10c21 0 39.8 9.3 50.4 25 7.1 10.5 10.9 22.9 10.9 35.7V408c0 4.4-3.6 8-8 8H416c0 17.7.3 22.5-1.6 32H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">People & sharing</div>
                    </a>
                  </li>
                  <li class="header__dropdown-menu-item">
                    <a href="#" class="header__dropdown-menu-link" title="Subscriptions">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 576 512" class="header--icon">
                          <path
                            d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 64h480c8.8 0 16 7.2 16 16v48H32V80c0-8.8 7.2-16 16-16zm480 384H48c-8.8 0-16-7.2-16-16V224h512v208c0 8.8-7.2 16-16 16zm-336-84v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">Subscriptions</div>
                    </a>
                  </li>
                   <li class="header__dropdown-menu-item">
                    <a href="#" class="header__dropdown-menu-link" title="Subscriptions">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 576 512" class="header--icon">
                          <path
                            d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 64h480c8.8 0 16 7.2 16 16v48H32V80c0-8.8 7.2-16 16-16zm480 384H48c-8.8 0-16-7.2-16-16V224h512v208c0 8.8-7.2 16-16 16zm-336-84v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">Seller dashboard</div>
                    </a>
                  </li>
                  <hr />
                  <li class="header__dropdown-menu-item">
                    <a href="#" class="header__dropdown-menu-link" title="Help">
                      <div class="header__dropdown-menu-svg">
                        <svg viewBox="0 0 512 512" class="header--icon">
                          <path
                            d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z"
                          />
                        </svg>
                      </div>
                      <div class="header__dropdown-menu-text">Help</div>
                    </a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false
    };
  },
  created() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },

    close(e) {
      if (!this.$el.contains(e.target)) {
        this.show = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  line-height: 0.05em;
  font-size: small;
  font-weight: 100;
  .navbar {
    color: white;
    border: none;
    padding: 0.2em 10%;
    .fa-2x {
      font-size: 1.7em;
      color: #f1f1f1;
    }
    .fa-2x:hover {
      color: #fff;
    }

    .form-control {
      font-weight: 200;
      height: calc(1.6em + 0.75rem + 2px);
      padding: 0.22rem 0.75rem;
      font-size: 1.19em;
      background: #f5f5f5;
      font-family: inherit;
    }
  }
  .navbar-nav {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2em;

    .nav-item {
      #apps-svg {
        margin-top: -3px;
        fill: white;
      }
    }
  }
}
.bg-dark {
  padding: 0 10%;
  background-color: #53a831 !important;
  .btn-outline-success {
    background: #f5f5f5;
    border-radius: 0.4em;
    color: gray;
  }
  .btn-outline-success:hover {
    background: white;
  }
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  position: relative;
  width: 36px;
  font-size: 24px;
}

// .navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
//   font-size: 0.75rem;
//   position: absolute;
//   right: 0;
//   font-family: sans-serif;
// }

.navbar-icon-top .navbar-nav .nav-link > .fa {
  top: 0.09em;
  line-height: 1.4em;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  top: -10px;
}

@media (min-width: 576px) {
  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 2em;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

// @media (min-width: 768px) {
//   .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
//     text-align: center;
//     display: table-cell;
//     height: 70px;
//     vertical-align: middle;
//     padding-top: 0;
//     padding-bottom: 0;
//   }

//   .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {
//     display: block;
//     width: 48px;
//     margin: 2px auto 4px auto;
//     top: 0;
//     line-height: 24px;
//   }

//   .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {
//     top: -7px;
//   }
// }
@media (min-width: 992px) {
  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

// @media (min-width: 1200px) {
//   .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {
//     text-align: center;
//     display: table-cell;
//     height: 70px;
//     vertical-align: middle;
//     padding-top: 0;
//     padding-bottom: 0;
//   }

//   .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa {
//     display: block;
//     width: 48px;
//     margin: 2px auto 4px auto;
//     top: 0;
//     line-height: 24px;
//   }

//   .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa > .badge {
//     top: -7px;
//   }
// }
// .dropdown-div {
//   position: relative;
//   display: inline-block;
//   .dropdown-content {
//     display: none;
//     right: 0;
//     width: 18em;
//     height: 13em;
//     margin-right: -5em;
//     position: absolute;
//     background-color: #f9f9f9;
//     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//     z-index: 1;
//     a {
//       width: 100%;
//       display: block;
//     }
//   }
// }
// .nav-item:hover .dropdown-content {
//   display: block;
// }

/*******************************dropdown apps */
button:focus {
  outline: 0;
}
.header-dropdown-menu-nav {
  padding: 0;
}
.header {
  // padding: 2rem 5rem 2rem 5rem;
  // &__nav {
  //   position: relative;
  // }
  // &__navbar {
  //   display: flex;
  //   align-items: center;
  //   flex-direction: row;
  //   justify-content: flex-end;
  // }
  // &__item {
  //   padding: 1rem;
  //   position: relative;
  // }
  // .header--icon {
  //   color: gray;
  // }
  // .header--btn {
  //   top: 0;
  //   right: 0;
  //   position: absolute;
  //   &:focus:active {
  //     outline: 0;
  //   }
  // }
  &--icon {
    // fill: currentcolor;
    // width: 1.65rem;
    // height: 1.65rem;
    // display: inline-flex;
  }
  &--btn {
    cursor: pointer;
    // padding: 0;
    // display: inline-block;
    // border: 1px solid transparent;
    // background-color: transparent;
    // appearance: none;
    // user-select: none;
  }
  &__dropdown-menu {
    position: absolute;
    top: 100%;
    right: 11em;
    height: 20rem;
    min-width: 18em;
    overflow-y: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
    background-color: white;
    border: 1px solid #dadce0;
    background-clip: padding-box;
  }
  &__dropdown-menu-link {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    line-height: 0;
    color: #3c4043;
    padding: 0.6rem 1.5rem 0.6rem 1.5rem;
    margin-bottom: 0.4rem;
    border-radius: 0 50px 50px 0;
  }
  &__dropdown-menu-svg {
    padding-right: 16px;
    .header--icon {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
}
// Dropdown animation
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 200ms;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media screen and (max-width: 1000px) {
  .menu-container {
    .navbar {
      padding: 0.2em 2%;
    }
  }
}
</style>
