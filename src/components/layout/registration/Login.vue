<template>
  <div class="container" id="LoginForm">
    <div class="login-form">
      <div class="panel">
        <h2>Brand</h2>
        <p>Please enter your email and password</p>
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

        <div class="form-group">
          <input
            type="password"
            name="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
       <div class="forgot">
          <router-link to="/forgotpassword">Forgot Password</router-link>

          <router-link to="/verify" class="create" >Create Accounts</router-link>
        </div>
      <p class="botto-text">BrandName All Rights Reserved 2019 </p>
    </div>
  </div>
</template>

<script>
// import bg from ''
export default {
};
</script>

<style scoped>

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
  width: 38%;
padding: 3em;
background: url('../../../assets/background/p.jpg');
object-fit: cover;
margin-top: 5em;
	}
.forgot a {
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
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
  margin-top: 10px;
}
.forgot {
  text-align: left;
}
.create{
	 text-align: right;
	 float: right;
}
.botto-text {
  color: #000;
  font-size: 14px;
 margin: 2em auto 0;
  
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
@media only screen and (max-width: 1074px) {
  .login-form {
    width: 45%
  }
}
@media only screen and (max-width: 992px) {
  .login-form {
    width: 60%
  }
}
@media only screen and (max-width: 768px) {
  .login-form {
    width: 80%
  }
}
@media only screen and (max-width: 500px) {
  .login-form {
    width: 100%;
margin-top: 1em;
  }
}
</style>


