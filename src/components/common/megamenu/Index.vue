<template>
  <div class="menu-container">
    <div class="menu-item">
      <a href="#" id="featuredlinknav">Featured</a>
    </div>

    <div class="menu-item" id="local">
      <a href="#">Local</a>

      <div class="dropdown-content" id="local-dropdown-content">
        <div class="menu-holder">
          <div class="col-lg-2 col-md-2 mega-lists">
            <ul>
              <li>
                <router-link id="dropdownlinks" to="/browse/:query">Personal services</router-link>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Health & Fitness</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Learning</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Foods & Drinks</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Home Services</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Retails</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-2 mega-lists">
            <ul>
              <li>
                <a id="dropdownlinks" href="#">Things To Do</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Kids Activities</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Entertainment</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Beauty & Spas</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Women's salon</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Team Sports</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2 mega-lists">
            <ul>
              <li>
                <a id="dropdownlinks" href="#">Suppliers</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Movers</a>
              </li>
            </ul>
          </div>
          <div class="img-ad col-md-3">
            <img src="@/assets/background/p.jpg" alt />
          </div>

          <div class="img-ad col-md-3" id="last-img">
            <img src="@/assets/background/p.jpg" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="menu-item" id="goods">
      <a href="#">Goods</a>
      <div class="dropdown-content" id="goods-dropdown-content">
        <div class="menu-holder" id="goods-menu-holder">
          <div class="col-md-2 mega-lists">
            <ul>
              <li>
                <a id="dropdownlinks" href="#">hardware stores</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Kitchen & Dining</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Art,Accessories</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Bath & Cleaning</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Household</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 mega-lists">
            <ul>
              <li>
                <a id="dropdownlinks" href="#">Computers</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Accessories</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Smart Home</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Office</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Technicians</a>
              </li>
            </ul>
          </div>
          <li class="col-md-2 mega-lists">
            <ul>
              <li>
                <a id="dropdownlinks" href="#">Jewelries</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Women's Fashoin</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Men's Fashion</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Kids & Babies</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Made In Rwanda</a>
              </li>
            </ul>
          </li>

          <div class="col-md-2 mega-lists">
            <ul>
              <li>
                <a id="dropdownlinks" href="#">Music</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Cinema & Movies</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Books</a>
              </li>
              <li>
                <a id="dropdownlinks" href="#">Modern & Cultural Instruments</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 img-ad" id="last-img">
              <img id="backtoschool" src="@/assets/background/p.jpg" alt='image-name' />
          </div>
        </div>
      </div>
    </div>

    <div class="menu-item">
      <a href="#">Gateways</a>
      <ul class="dropdown-menu mega-dropdown-menu" id="dropdownlocalfeatured">
        <li class="col-md-3">
          <ul>
            <li class="dropdown-header" id="megamenuheaders">
              Gateways
              & Tickets
            </li>
            <li>
              <a id="dropdownlinks" href="#">RWANDA Locations</a>
            </li>
            <li>
              <a id="dropdownlinks" href="#">KENYA & UGANDA</a>
            </li>
            <!-- <li><a id="dropdownlinks" href="#"></a></li>
											<li><a id="dropdownlinks" href="#">Southern Africa</a></li> 
											<li class="divider"></li>
											<li class="dropdown-header" id="megamenuheaders">Transport Apps</li>
											<li><a id="dropdownlinks" href="#">Tax,Bus,Air &
													Train Africa</a></li>
            <li><a id="dropdownlinks" href="#">Knowledge Society</a></li>-->
          </ul>
        </li>

        <li class="col-md-3">
          <ul>
            <img id="backtoschool" src="@/assets/background/p.jpg" alt />
            <li class="divider"></li>
            <!-- <li class="dropdown-header" id="megamenuheaders">Tourism</li>
											<li><a id="dropdownlinks" href="#">Tour Guides</a></li>
            <li><a id="dropdownlinks" href="#">Trip Adivser</a></li>-->
          </ul>
        </li>
        <li class="col-md-3">
          <ul>
            <img id="backtoschool" src="@/assets/background/p.jpg" alt />
            <li class="divider"></li>
            <!-- <li class="dropdown-header" id="megamenuheaders">Renting</li>
											<li><a id="dropdownlinks" href="#">Aparts & Lodges</a></li>
            <li><a id="dropdownlinks" href="#"></a></li>-->
          </ul>
        </li>
        <li class="col-md-3">
          <ul>
            <img id="backtoschool" src="@/assets/background/p.jpg" alt />
            <li class="divider"></li>
            <!-- <li class="dropdown-header" id="megamenuheaders">Fonts</li>
											<li><a id="dropdownlinks" href="#">Glyphicon</a></li>
            <li><a id="dropdownlinks" href="#">Google Fonts</a></li>-->
          </ul>
        </li>
      </ul>
    </div>

    <div class="menu-item">
      <a id="localdropdownlinkfeatured" href="#">Flash Deals</a>
    </div>

    <div class="menu-item">
      <li id="bestsellers">
        <a href="#">
          Best
          Sellers
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  .menu-item {
    float: left;
    overflow: hidden;

    a {
      color: gray;
      font-size: 0.9em;
      font-weight: 300;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      left: 10%;
      right: 10%;
      z-index: 1;
      max-height: 14em;
      overflow: hidden;
      border: 1px solid #e8e8e8;
      background: white;

      .menu-holder {
        display: inline-flex;
        width: 100%;
        padding: 0.5em 0 0.6em;
        max-height: 14em;

        .mega-lists {
          ul {
            padding: 0;
          }
          li {
            padding: 0.32em;
          }
          li a {
            color: gray;
            font-size: 0.9em;
            font-weight: 200;
          }
          li:hover {
            background: #53a831;
            a {
              color: white;
            }
          }
        }
        .img-ad {
          overflow: hidden;
          margin-right: 0.2em;
        }
        #last-img {
          margin-right: 1.2em;
        }
      }
    }
  }
  #local:hover {
    #local-dropdown-content {
      display: block;
    }
  }
  #goods:hover {
    #goods-dropdown-content {
      display: block;
    }
  }
}
</style>
