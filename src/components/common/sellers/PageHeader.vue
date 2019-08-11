<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <router-link to="/" class="navbar-brand" id="navbarbrandname">
      <strong>Merchants</strong>
    </router-link>
    <button
      class="navbar-toggler"
      id="menubutton"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- class="mx-auto" for centering an element bootstrap-->

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" id="navbarDropdown">Solutions</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" id="navbarDropdown">Resources</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" id="navbarDropdown">NewsRoom</a>
        </li>
      </ul>
      <!-- <a class="btn" id="signin" href="">sign in</a> -->
      <router-link
        class="btn btn-outline-light my-2 my-sm-0"
        to="/verify"
        id="getstarted"
      >Get started</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background: #fff;
  color: black;
  border-bottom: 2px solid #bbbbbb;
}
#navbarDropdown {
  color: #000;
}
#signin {
  background: transparent;
  margin-right: 20px;
  font-size: 20px;
}
#username {
  background: transparent;
  margin-right: 20px;
}
#navbarbrandname {
  color: #51a546;
}
#getstarted {
  color: #fff;
  background-color: #53a318;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
}
#menubutton {
  background-color: #53a318;
}
.navbar .dropdown-menu div[class*="col"] {
  margin-bottom: 1rem;
}

.navbar .dropdown-menu {
  border: none;
  background-color: #0060c8 !important;
}

/* breakpoint and up - mega dropdown styles */
@media screen and (min-width: 992px) {
  /* remove the padding from the navbar so the dropdown hover state is not broken */
  .navbar {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  /* remove the padding from the nav-item and add some margin to give some breathing room on hovers */
  .navbar .nav-item {
    padding: 0.5rem 0.5rem;
    margin: 0 0.25rem;
  }

  /* makes the dropdown full width  */
  .navbar .dropdown {
    position: static;
  }

  .navbar .dropdown-menu {
    width: 100%;
    left: 0;
    right: 0;
    /*  height of nav-item  */
    top: 45px;
  }

  /* shows the dropdown menu on hover */
  .navbar .dropdown:hover .dropdown-menu,
  .navbar .dropdown .dropdown-menu:hover {
    display: block !important;
  }

  .navbar .dropdown-menu {
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: #fff;
  }
}
</style>
