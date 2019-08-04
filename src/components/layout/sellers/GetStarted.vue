<template>
  <div>
    <PageHeader />
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
          
          <div style="text-align:center;margin-top:40px;">
            <span class="step"></span>
            <span class="step"></span>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import PageHeader from '@/components/common/sellers/PageHeader'
import Footer from '@/components/common/sellers/Footer'
export default {
  components: {
    PageHeader,
    Footer
  }
};
</script>

<style>
@charset "ISO-8859-1";

       /* adds some margin below the link sets  */
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


</style>
