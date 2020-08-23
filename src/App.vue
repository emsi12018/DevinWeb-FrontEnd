<template>
  <div id="app">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <nav class="navbar is-violet " role="navigation" aria-label="main navigation">
    
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../src/assets/new-logo-3.png" width="112" height="28">
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu ">
      <div class="navbar-start ">
        <div class="navbar-item">
          <div class="field">
            <input class="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" checked="checked">
            <label for="exampleRadioInline1" class="is-violet"> Personal </label>
          </div>
        </div>
        <div class="navbar-item">
          <div class="field">
            <input class="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline">
            <label for="exampleRadioInline2" class="is-violet"> Business </label>
          </div>
        </div>
        <div class="navbar-item" style="margin-left:150px;">
          
            <router-link  class="navbar-item" to="/about">About</router-link>
          

          <a class="navbar-item ">
            Pricing
          </a>

          <a class="navbar-item">
            FAQ
          </a>

          <a class="navbar-item">
            Contact Us
          </a>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-info ">
              <strong>Sign up</strong>
            </a>
            <a class="button is-primary">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view/>

  <section id="footer" >
		<div class="container" >
			<div class="row text-center text-xs-center text-sm-left text-md-left" >
				<div class="col-xs-4 col-sm-2 col-md-2 margin-25" >
					<h5>PRODUCTS</h5>
					<ul class="list-unstyled quick-links" >
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Personal</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Business</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Pricing</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Login</a></li>
					</ul>
				</div>
				<div class="col-xs-4 col-sm-2 col-md-2 margin-25">
					<h5>COMPANY</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="/"><i class="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Blog</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Careers</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Contact Us</a></li>
					</ul>
				</div>
				<div class="col-xs-6 col-sm-4 col-md-4 margin-25">
					<h5>HELP CENTER</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="/"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="/"><i class="fa fa-angle-double-right"></i>Insurance</a></li>
            <li><a href="/"><i class="fa fa-angle-double-right"></i>Agreement</a></li>
					</ul>
				</div>
        <div class="col-xs-6 col-sm-4 col-md-4 margin-25" >
					<h5>STAY IN TOUCH</h5>
					<ul class="list-unstyled quick-links">
            <p class="p-footer">Join our mailing list to get updates. We respect your privacy.</p>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Email Address..."/>
                 <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      <i class="fa fa-send"/>
                    </button>
                 </div>
            </div>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="/"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="/"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="/"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="/"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="/" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p class="h6">© All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Devinweb</a></p>
				</div>
				<hr>
			</div>	
		</div>
	</section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.margin-25 {
  margin-top: 25px;
}

p.p-footer{
  color:white;
}

section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #3466f1;
    margin-bottom: 50px;
    text-transform: uppercase;
}
.is-violet{
  color: white;
  background: #e7d5ff !important;
}
#footer {
    background: #310763 !important;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}

</style>
