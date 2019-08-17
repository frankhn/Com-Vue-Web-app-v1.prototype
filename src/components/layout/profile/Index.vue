<template>
  <div class="profile-container emp-profile">
    <div class="top-section">
      <div class="profile-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
          alt
        />
        <!-- <span class="file btn btn-lg btn-primary">
            Change Photo
            <input type="file" name="file" />
        </span>-->
      </div>
      <div class="profile-head">
        <div class="profile-name">
          <div>Frank Harerimana</div>
          <div class="follow-edit">
            <button class="follow-edit-btn">following</button>
          </div>
        </div>
        <div>Web Developer and Designer</div>
        <div class="proile-rating">
          RANKINGS :
          <span>8/10</span>
        </div>
        <div class="menu-profile-tabs">
          <div class="menu-profile-tab active">profile</div>
          <div class="menu-profile-tab">wishlist</div>
          <div class="menu-profile-tab">orders</div>
          <div class="menu-profile-tab">network</div>
          <div class="menu-profile-tab">settings</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/layout/profile/Menu.vue";

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss" scoped>
.emp-profile {
  display: block;

  .top-section {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 1em;

    .profile-img img {
      height: 100%;
      width: 100%;
    }
    .profile-head {
      display: grid;

      .profile-name {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        .follow-edit {
          justify-self: end;
          &-btn {
            border: none;
            font-size: 0.8em;
            padding: 0 0.3em;
            background: transparent;
            border-radius: 0.4em;
            letter-spacing: 0.2em;
            font-family: inherit;
            color: #4c4a4a;
            text-transform: capitalize;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
            outline: 0;
          }
        }
      }

      .menu-profile-tabs {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px solid lightgray;

        &active {
          border-bottom: 2px solid #53a831;
        }
      }
    }
    .edit-follow-btn {
      justify-self: right;
    }
  }
}
</style>
