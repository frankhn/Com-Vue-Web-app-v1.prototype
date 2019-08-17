<template>
  <div class="btn-group">
      <button
        type="button"
        @click="show = !show"
        class="btn btn-default dropdown-toggle"
        data-toggle="dropdown"
      >
        {{currentCategory}}
        <span class="caret"></span>
      </button>
      <transition name="dropdown">
        <div class="header__dropdown-menu" v-bind:class="{ active: show }" v-if="show">
          <ul class="header__dropdown-menu-nav">
            <li class="header__dropdown-menu-item"><button class="category-btn">All Locations</button></li>
            <li class="header__dropdown-menu-item">masaka</li>
            <li class="header__dropdown-menu-item">nyamirambo</li>
            <li class="header__dropdown-menu-item">Gikondo</li>
            <li class="header__dropdown-menu-item">kimironk</li>
            <li class="header__dropdown-menu-item"><button class="category-btn">Kacyiru</button></li>
          </ul>
        </div>
      </transition>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  data: function() {
    return {
      show: false,
      currentCategory: 'All Locations'
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
.btn-group {
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  // grid-auto-flow: column;
      margin-bottom: .2em;

  li {
    list-style-type: none;
  }
  button:focus {
    outline: 0;
    box-shadow: none;
  }
  .btn:focus {
    outline: 0 !important;
  }
.btn {
  cursor: pointer;
      background: #fff;
      color: #656363;
      border: 1px solid #d6d2d2;
}
  .header {
    &--btn {
      cursor: pointer;
      background: #53a831;
      color: white;
      border: none;
    }
     &--btn:hover {
      color: white;
    }
    &__dropdown-menu {
      position: absolute;
      top: 100%;
      height: 15rem;
      padding: 0;
    overflow-y: auto;
      min-width: max-content;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 10;
      background-color: white;
      border: 1px solid #dadce0;
      background-clip: padding-box;
    }
    &__dropdown-menu-nav {
      padding: 0 1em;

      .category-btn {
        border: none;
        padding: 0;
            margin: .3em 0;
      }
    }
  }
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
}
</style>
