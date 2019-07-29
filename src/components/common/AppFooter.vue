<template>
  <div>
      <div>
        <hr size="1" width="100%" style="color:#eee">
      </div>
    <div class="container-div">
      <div class="row">
        <div class="col-md-2 col-sm-6 col-xs-6">
          <h5 id="footerheaders">Company</h5>
          <div class="list-container">
            <router-link  id="footerlinks" to="/about">About Us</router-link><br>
            <a href='#' id="footerlinks">Careers</a><br>
            <a href="#" id="footerlinks">Customer Service</a><br>
            <a href='#' id="footerlinks">Mission &amp; Values</a><br>
            <a href='#' id="footerlinks">Newsroom</a><br>
            <a href='#' id="footerlinks">Investor Relation</a><br>
            <a href='#' id="footerlinks">In Your Community</a><br>
          </div>
        </div>

        <div class="col-md-2 ">
          <h5 id="footerheaders">Work with E-dealing</h5>
          <div class="list-container">
            <a href='#' id="footerlinks">How E-dealing Works</a><br>
            <a href='#' id="footerlinks">Your Right To Know</a><br>
            <a href='#' id="footerlinks">Affiliate Program</a><br>
            <a href='#' id="footerlinks">Internet Based Ads</a><br>
            <a href='#' id="footerlinks">Quality Standards</a><br>
            <a href='#' id="footerlinks">Dealer Chain Disclosures</a><br>
            <router-link id="footerlinks" to="/getstarted">Get Started</router-link><br>
          </div>
        </div>

        <div class="col-md-2 col-sm-6 col-xs-6">
          <h5 id="footerheaders">More From Us</h5>
          <div class="list-container">
            <a href="#" id="footerlinks">Comdeni 365 &trade;</a><br>
            <a href="#" id="footerlinks">Comdeni Planet Foundation</a><br>
            <a href="#" id="footerlinks">E-Dealing Kids Foundation</a><br>
          </div>
        </div>

        <div class="col-md-2">
          <h5 id="footerheaders">Connect with Us</h5>
          <div class="list-container">
            <a href="#" id="footerlinks">Facebook</a><br>
            <a href="#" id="footerlinks">Twitter</a><br>
            <a href="#" id="footerlinks">Instagram</a><br>
            <a href="#" id="footerlinks">Youtube</a><br>
            <a href="#" id="footerlinks">Google +</a><br>
            <a href="#" id="footerlinks">Pinterest</a><br>
          </div>
        </div>
        <div class="col-md-4">
          <div class="list-container" style="background:#53A318">
            <p style="color:#fff">Get The E-dealing Mobile App Right Here Now</p>
            <p style="color:#fff">.</p>
            <p style="color:#fff">.</p>
          </div>
          <div class="list-container" style="background:#53A318">
            <p><a href="#" style="color:#fff">Grow Your Business By Working With E-dealing</a></p>
            <p><a href="#" style="color:#fff">Comdeni Merchants</a></p>
            <p><a href="#" style="color:#fff">Comdeni Merchants</a></p>
          </div>
        </div>

      </div>
      <br>
      <h5 id="footerheaders">Incredible Deals on Local Experiences</h5>
      <p id="footerlinks">
        Discover fun activities and huge discounts Locally with Comdeni. Check out great deals from Foods, kids
        activities, Sport, Learning, Music to nightlife.<br> try thousands of local deals with Comdeni. Find out more With the Entire City in Your Hands</p>
      <p id="footerlinks" ><strong>Comdeni Guide</strong>
        for <a href='#' id="footerlinks"><u>Online Business Marketing</u></a>, and <a href='#' id="footerlinks"><u>Small Businesses</u></a></p>
    <!-- , and <a href="#" id="footerlinks"><u></u></a> -->
      <p> &copy;2019 Comdeni, . All Rights Reserved. <a href="#" id="footerlinks"><u>Terms of Use</u></a>  <a href="#" id="footerlinks"><u>Corporate Policies</u></a> </p>
    </div>
    <br>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-div {
  padding: 0 10%;
}
*{
	text-transform: capitalize;
}

.list-container{
  align-content: left;
}

#headermobileview{
	color:white !important;
	align-content: center;
}
#searchicon{
	width:18px;
	height:25px;
}
.ftguide{
	font-family: monospace;
}
#topprodlik{
	color: #000;
	text-decoration: none;
}
#footerlinks{
	color:#75787B;
	font-family: Open Sans,OpenSans,system,-apple-system,BlinkMacSystemFont,Roboto,Arial,FreeSans,sans-serif;
	font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
    color: #75787b;
    background-color: white;
}
#directiosvg{
	font-size: medium;
    font-weight: normal;
    visibility: initial;
	cursor: pointer;
	color: #757575;
	margin-top: 130px;
	fill: currentColor;
	display: block;
	background: #fff;
	border-radius: 50%;
    width: 100%;
}
svg:not(:root), symbol, image, marker, pattern, foreignObject {
    overflow: hidden;
}
#browsefooter{
	color:#0093EA;
}
#browsefooterheader{
	border-bottom:1px dotted #eee;
	margin-top:10px;
	padding-bottom:10px;
}
#browsefootertrending{
	border-bottom:1px solid #eee;
	margin-top:10px;
	padding-bottom:10px;
}
#showproductbuyingprice{
	margin-top: 0px;
}

@media screen and (min-width: 776px){
	#notbase{
	margin-top:10px;
	border: none;
}
}

#footerheaders{
    font-weight: 700;
    font-size: 13px;
    line-height: 24px;
    margin: 0 0 6px;
    color: var(--color-black);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

</style>
