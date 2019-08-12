<template>
  <div>
    <PageHeader />
    <div class="body-container">
      <div class="welcometext">
        <h1>How can we help your business?</h1>
        <p class="description">
          We're glad you're here! With more than a million local businesses on our platform to date,
          we understand how to help you increase your revenue, lower your costs, and grow your business. Build your deal today.
        </p>
        <h4 id="solution">Great Solutions from our recent Business Eagles</h4>
      </div>

      <div class="service">
        <div class="service-img">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>
        <div class="service-img">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>
        <div class="service-img">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>
        <div class="service-img">
          <img id="sol" src="@/assets/background/p.jpg" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import PageHeader from "@/components/common/sellers/PageHeader";
import Footer from "@/components/common/sellers/Footer";
export default {
  components: {
    PageHeader,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.body-container {
  padding: 4em 10%;

  .welcometext {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    .description {
      margin-top: 30px;
      font-size: 1em;
      color: #bbbbbb;
      text-align: center;
    }
  }
  .service {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em 1em;
    height: 13em;

    .service-img {
      img {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        border-radius: 0.3em;
        height: 100%;
      }
    }
  }
}
#solution {
  margin-top: 60px;
}
</style>
