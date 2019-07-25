<template>
  <div>
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
            <a class="nav-link" href="#" id="navbarDropdown">Stories</a>
          </li>
        </ul>
        <a class="btn" id="signin" href="">sign in</a>
        <!-- <button
          class="btn btn-outline-light my-2 my-sm-0"
          type="submit"
          id="getstarted"
        >
        Log To @getBusiness.name Center</button> -->
      </div>
    </nav>
    <div class="container" id="bformactive">
      <div class="row">
        <div class="welcometext">
          <center>
            <h2>
              <strong>How can we help your business?</strong>
            </h2>
            <p id="metchantco">
              We're glad you're here! With more than a million local businesses on our platform to date,
              we understand how to help you increase your revenue, lower your costs, and grow your business. Build your deal today.
            </p>

            <h4 id="solution">Great Solutions from our recent Business Eagles</h4>
          </center>
        </div>
      </div>
    </div>

    <div class="container" id="bformactive2">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <form id="regForm" method="POST" action="startbusiness">
          <div class="tab" id="firsttab">
            <h2>
              We are glad for You taking a great step to grow your Business and reach as much clients
              as possible
            </h2>
          </div>
          <!-- <div class="form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              id="inputEmail"
              placeholder=" Business Name"
            />
          </div>
          <div class="form-group">
            <select
              type="text"
              name="country"
              class="form-control"
              id="inputEmail"
              placeholder=" Business Country Base"
            >
              <option value="@cou.id">@cou.name</option>
            </select>
          </div>
          <div>
            <div class="form-group">
              <select type="text" name="city" class="form-control" id="inputEmail">
                <option value="@ci.id">@ci.name</option>
              </select>
            </div>

            <p></p>
            <div class="form-group">
              <select
                class="form-control"
                id="inputEmail"
                oninput="this.className = ''"
                name="location"
              >
                <option value="@lc.id">@lc.name</option>
              </select>
            </div>

            <div class="form-group">
              <select type="text" name="businesscategory" class="form-control" id="inputEmail">
                <option value="@bc.id">@bc.name</option>
              </select>
            </div>
          </div>
          <div class="tab">
            <p></p>
            <div class="form-group">
              <h2>Is Your Business Legally working</h2>
              <select
                type="text"
                class="form-control"
                id="inputEmail"
                oninput="this.className = ''"
                name="legal_status"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <h2>Contact Information</h2>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                id="inputEmail"
                placeholder="phone number like 0781666092"
                oninput="this.className = ''"
                name="Phone1"
              />
            </div>
          </div>

          <div style="overflow:auto;">
            <div style="float:right;">
              <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
              <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
            </div>
          </div> -->
          <!-- Circles which indicates the steps of the form: -->
          <div style="text-align:center;margin-top:40px;">
            <span class="step"></span>
            <span class="step"></span>
          </div>
        </form>
      </div>
    </div>

    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="container">
            <div class="row">
              <div class="markt col-md-3 col-sm-6 col-xs-12">
                <ul>
                  <h5>Marketing By Business Type</h5>

                  <li>
                    <a href="#">Food Stores & Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Health, Bank Services</a>
                  </li>
                  <li>
                    <a href="#">Things To Do</a>
                  </li>
                  <li>
                    <a href="#">Shops And Boutiques</a>
                  </li>
                  <li>
                    <a href="#">Learning And Events</a>
                  </li>
                </ul>
              </div>
              <div class="markt col-md-3 col-sm-6 col-xs-12">
                <ul>
                  <h5>Marketing Solutions</h5>

                  <li>
                    <a href="#">Market Reach</a>
                  </li>
                  <li>
                    <a href="#">Marketing Strategies</a>
                  </li>
                  <li>
                    <a href="#">E-Dealing Open Day</a>
                  </li>
                </ul>
              </div>

              <div class="markt col-md-3 col-sm-6 col-xs-12">
                <ul>
                  <h5>Resources</h5>
                  <li>
                    <a href="#">Merchant Stories</a>
                  </li>
                  <li>
                    <a href="#">Event Driven</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">Your Right To Know</a>
                  </li>
                </ul>
              </div>

              <div class="markt col-md-3 col-sm-6 col-xs-12">
                <ul>
                  <h5>More</h5>
                  <li>
                    <a href="#">Hot line</a>
                  </li>
                  <li>
                    <a href="#">Merchant Newsroom</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Investor Relation</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>

              <div class="endfooter">
                <center>
                  <h6>Wondering about how to get Your self In Today's Business Environment?</h6>
                  <p id="endtext">
                    You've reached a great solution, camdens is Your Great Choise separate Your self from traditional Ways of Doing Business
                    and Go with us in a modern Business, read More about the recent
                    <a href="#">
                      <u>Camdens eagles.</u>
                    </a>
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
@charset "ISO-8859-1";

       /* adds some margin below the link sets  */
.navbar{
	background: #fff;
	color: black;
	border-bottom: 2px solid #BBBBBB;
}
#navbarDropdown{
	color: #000;
}
#signin{
	background: transparent;
	margin-right:20px;
	font-size: 20px;
}
#username{
	background: transparent;
	margin-right:20px;
}
#navbarbrandname{
	color: #51A546;
}
#getstarted{
	color: #fff;
	background-color: #53A318;
	border: 1px solid #fff;
	border-radius: 25px;
}
#menubutton{
	background-color: #53A318;
}
.navbar .dropdown-menu div[class*="col"] {
   margin-bottom:1rem;
}

.navbar .dropdown-menu {
  border:none;
  background-color:#0060c8!important;
}

/* breakpoint and up - mega dropdown styles */
@media screen and (min-width: 992px) {
  
  /* remove the padding from the navbar so the dropdown hover state is not broken */
.navbar {
  padding-top:0px;
  padding-bottom:0px;
}

/* remove the padding from the nav-item and add some margin to give some breathing room on hovers */
.navbar .nav-item {
  padding:.5rem .5rem;
  margin:0 .25rem;
}

/* makes the dropdown full width  */
.navbar .dropdown {position:static;}

.navbar .dropdown-menu {
  width:100%;
  left:0;
  right:0;
/*  height of nav-item  */
  top:45px;
}
  
  /* shows the dropdown menu on hover */
.navbar .dropdown:hover .dropdown-menu, .navbar .dropdown .dropdown-menu:hover {
  display:block!important;
}

  
  .navbar .dropdown-menu {
    border: 1px solid rgba(0,0,0,.15);
    background-color: #fff;
  }

}
.welcometext{
	margin: 60px;
	align: center;
}
#metchantco{
	margin-top: 30px;
	font-size: 18px;
	color: #BBBBBB;
}
#solution{
	margin-top: 60px;
}
#sol{
	position: relative;
	height: 200px;
	width: 100%;
	
}
.footer{
	margin-top: 50px;
	bottom: 0;
	color: gray;
	background: #F0F0F0;
	padding-bottom: 30px;
	padding-top: 20px;
}
a {
	color: gray;
}
.footer ul {
	list-style-type: none;
}
.markt{
	padding: 0;
}

#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  font-family: Raleway;
  padding: 40px;
  width: 70%;
  min-width: 300px;
  display: none;
}

h1 {
  text-align: center;  
}

input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
.tab {
  display: none;
}

button {
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

#prevBtn {
  background-color: #bbbbbb;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4CAF50;
}


</style>
