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
          <i class="fa fa-search"></i>
          <!-- <svg width="15px" height="15px">
            <path
              d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "
            />
          </svg>-->
        </button>
      </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav">
          <li class="nav-item">
              <i class="fa fa-bell fa-2x">
              </i>
          </li>
          <!-- <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-globe">
            <span class="badge badge-success">11</span>
          </i>
          Test
        </a>
          </li>-->
          <!-- <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fa fa-home"></i>
          Home
          <span class="sr-only">(current)</span>
          </a>
          </li>-->
          <!-- <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-danger">11</span>
          </i>
          Link
        </a>
          </li>-->
          <li class="nav-item">
            <!-- <a class="nav-link sign-in" href="#"> -->
              <i class="fa fa-user-circle fa-2x" />
                <!-- <span class="badge badge-warning">11</span> -->
              <!-- </i> -->
            <!-- </a> -->
            <!-- <div class="dropdown-div">
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> -->
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" id="app-icon" href="#"> -->
            <!-- <i class="fa fa-envelo slider"></i> -->
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              x="0"
              y="0"
              preserveAspectRatio="xMinYMin meet"
              class="artdeco-icon"
              focusable="false"
            >
              <path
                d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z"
                class="large-icon"
                style="fill: currentColor"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
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
      font-size: 1.14em;
          background: #f5f5f5;
    }
  }
  .navbar-nav {
        display: grid;
    grid-auto-flow: column;
    grid-gap: 1em;
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
</style>
