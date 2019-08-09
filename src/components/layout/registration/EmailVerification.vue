<template>
  <div class="container" id="LoginForm">
    <div class="login-form">
      <div class="panel">
        <h2>Brand Here</h2>
        <p>Please enter your email below</p>
      </div>
      <form id="Login" accept-charset="UTF-8">
        <div class="form-group">
          <input
            type="email"
            name="email"
            class="form-control"
            id="inputEmail"
            placeholder="Email Address"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
      <div class="forgot">
          <router-link to="/login"  >Login</router-link>
        </div>
    </div>
    <center>
      <p class="botto-text">E-Dealing All Rights Reserved</p>
    </center>
  </div>
</template>

<script>
// import bg from ''
export default {
};
</script>

<style lang="scss" scoped>

.form-heading { color:#fff; font-size:23px;}
.panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
.panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
.login-form .form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  width: 100% !important;
  line-height: 50px;
}
.main-div {
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  padding: 50px 70px 70px 71px;
}

.login-form .form-group {
  margin-bottom:30px;
}
.login-form{   
	margin: 0 auto;
	text-align:center;
  width: 366px;
padding: 3em;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
// background: url('../../../assets/background/p.jpg');
background: rgb(245,245,245);
margin-top: 5em;
	}
.forgot {
  text-align: left;  
  a {
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
}
}
.login-form  .btn.btn-primary {
  background: #53A318 none repeat scroll 0 0;   /*#f0ad4e orange*/
  border: 1px solid #fff;
  color: #ffffff;
  font-size: 14px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0;
  margin: 0 0 2em
}
.create{
	 text-align: right;
	 float: right;
}
.botto-text {
  color: #ffffff;
  font-size: 14px;
  margin-top: 100px;
  bottom: 0;
  
}
.login-form .btn.btn-primary.reset {
  background: #ff9900 none repeat scroll 0 0;
}
.back { text-align: left; margin-top:10px;}
.back a {color: #444444; font-size: 13px;text-decoration: none;}
.form-heading{
	margin-bottom: 40px;
	margin-top: 30px;
}
</style>


