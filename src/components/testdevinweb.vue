<template>
<div>
 <head>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<div class="body">
    <b-media right-align vertical-align="center" class="hero-image" :style="{'background-image': 'url(' + require('../assets/back-01.jpg') + ')'}" style="height:350px;">
    <div class="container">
      <div class="row">
        <div class="col-md-12 " style="text-align:center;" >
          <p style="margin-left:100px;margin-top:50px;font-size:40px;">
            Juste drive.<br/>
            We'll do the rest.
          </p>
          <p style="margin-left:100px;margin-top:10px;font-size:12px;">
            All-inclusive, usage-based car subscription
          </p>
          <div style="margin-left:100px;margin-top:10px;">
            <div class=row>
              <div class=col-md-3  >
                <div class="form-group">
                  <input type="phone" class="form-control" id="exampleInputPhone1" placeholder="Phone number... ">
                </div>
              </div>
              <div class=col-md-2>
                <button type="button" class="button is-primary is-outlined">Get started</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    </b-media>
</div>

<div class="aboutus-section">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="aboutus">
                    <h2 class="aboutus-title">About Us</h2>
                    <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                    <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                    <a class="aboutus-more" href="#">read more</a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="aboutus-banner">
                    <br/>
                    <br/>
                    <br/>
                    <img src="../assets/logo-b.png" alt="">
                </div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12">
                <div class="feature">
                    <div class="feature-box">
                        <div class="clearfix">
                            <div class="iconset">
                                <span class="fa fa-male"></span>
                            </div>
                            <div class="feature-content">
                                <h4>Work with heart</h4>
                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            </div>
                        </div>
                    </div>
                    <div class="feature-box">
                        <div class="clearfix">
                            <div class="iconset">
                                <span class="fa fa-car"></span>
                            </div>
                            <div class="feature-content">
                                <h4>Reliable services</h4>
                                <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                            </div>
                        </div>
                    </div>
                    <div class="feature-box">
                        <div class="clearfix">
                            <div class="iconset">
                                <span class="fa fa-cog"></span>
                            </div>
                            <div class="feature-content">
                                <h4>Great support</h4>
                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<hr class="rounded">

   <div class="container">
      <div class="process">
          <div class="process-row">
              <div class="process-step">
                    <button type="button" class="btn btn-default btn-circle" disabled="disabled"><i class="fa fa-comments-o fa-3x"></i></button>
                    <h4>Text Us</h4>
                    <p> Wide variety and high pay. <br/>
                      Clients are now posting jobs <br/>
                      in hundreds of skill categories, </p>
                </div>
                <div class="process-step">
                    <button type="button" class="btn btn-default btn-circle" disabled="disabled"><i class="fa fa-user fa-3x"></i></button>
                    <h4>We deliver</h4>
                     <p> Wide variety and high pay. <br/>
                      Clients are now posting jobs <br/>
                      in hundreds of skill categories, </p>
                </div>
                <div class="process-step">
                    <button type="button" class="btn btn-default btn-circle" disabled="disabled"><i class="fa fa-car fa-3x"></i></button>
                    <h4>You drive</h4>
                     <p> Wide variety and high pay. <br/>
                      Clients are now posting jobs <br/>
                      in hundreds of skill categories, </p>
                </div> 
                <div class="process-step">
                    <button type="button" class="btn btn-default btn-circle" disabled="disabled"><i class="fa fa-arrow-up fa-3x"></i></button>
                    <h4>We pick it up</h4>
                     <p> Wide variety and high pay. <br/>
                      Clients are now posting jobs <br/>
                      in hundreds of skill categories, </p>
                </div> 
            </div>
          </div>
      </div>
      <br/>
      <br/>
<hr class="rounded">

<div class="how-section1">
        <div class="row">
            <div class="col-md-6 how-img">
                <img src="../assets/rent-02.png" class="rounded-circle img-fluid" alt=""/>
            </div>
            <div class="col-md-6">
                <h4>Find rewarding projects</h4>
                            <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
            <p class="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                                Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                                More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4>Get hired quickly</h4>
                            <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
                            <p class="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                                Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                                Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
            </div>
            <div class="col-md-6 how-img">
                <img src="../assets/rent-01.png" class="rounded-circle img-fluid" alt=""/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 how-img">
                  <img src="../assets/rent-03.jpg" class="rounded-circle img-fluid" alt=""/>
            </div>
            <div class="col-md-6">
                <h4>Work efficiently, effectively.</h4>
                            <h4 class="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h4>
                            <p class="text-muted">Send and receive files. Deliver digital assets in a secure environment.
                                Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                                Use our mobile app. Many features can be accessed on your mobile phone when on the go.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4>Get paid on time</h4>
                            <h4 class="subheading">All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.</h4>
                            <p class="text-muted">All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                                Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                                Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.</p>
            </div>
            <div class="col-md-6 how-img">
                <img src="../assets/rent-04.jpg" class="rounded-circle img-fluid" alt=""/>
            </div>
        </div>
    </div>



  <div class="container text-center" style="margin-top:30px;">
        <div class="row">

<!-- Card #1, Starter -->
            <div class="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
                <div class="pricing-item" style="border: 1px solid">
                    <!-- Indicator of subscription type -->
                    <div class="pt-4 pb-3" style="letter-spacing: 2px">
                        <h4>FlexPass</h4>
                    </div>
                    <!-- Price class -->
                    <div class="pricing-price pb-1 text-dark color-primary-text ">
                        <h1 style="font-weight: 1000; font-size: 3.5em;">
                            <span style="   font-size: 20px;">€</span>25 
                        </h1>
                    </div>
                    <!-- Perks of said subscription -->
                    <div class="pricing-description">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li class="pl-3 pr-3">Donec vitae sapien</li>
                            <li class="pl-3 pr-3">1 days free</li>
                            <li class="pl-3 pr-3">Phone and email support</li>
                            <li class="pl-3 pr-3">Help center access</li>
                        </ul>
                    </div>
                    <!-- Button -->
                    <div class="pricing-button pb-4">
                        <button type="button" class="button is-dark w-75">Start with FlexPass</button>
                    </div>
                </div>
            </div>

<!-- Card #2, Intermediate -->
        <div class="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
            <div class="pricing-item" style="box-shadow: 0px 0px 30px -7px rgba(0,0,0,0.29);border: 1px solid;">
                <div class="pt-4 pb-3" style="letter-spacing: 2px">
                    <h4>Getaway</h4>
                </div>
                <div class="pricing-price pb-1 text-dark color-primary-text ">
                    <h1 style="font-weight: 1000; font-size: 3.5em;">
                        <span style="font-size: 20px;">€</span>50
                    </h1>
                </div>
                <div class="pricing-description">
                    <ul class="list-unstyled mt-3 mb-4">
                        <li class="pl-3 pr-3">Donec vitae sapien</li>
                        <li class="pl-3 pr-3">2 days free</li>
                        <li class="pl-3 pr-3">Phone and email support</li>
                        <li class="pl-3 pr-3">Help center access</li>
                    </ul>
                </div>
                <div class="pricing-button pb-4">
                    <button type="button" class="button is-dark w-75">Start with Getaway</button>
                </div>
            </div>
        </div>

<!-- Card #3, Professional -->

            <div class="col-lg-4 col-md-6 col-sm-10 pb-4 d-block m-auto">
                <div class="pricing-item" style="border: 1px solid">
                    <div class="pt-4 pb-3" style="letter-spacing: 2px">
                        <h4>Freedom</h4>
                    </div>
                    <div class="pricing-price pb-1 text-dark color-primary-text ">
                        <h1 style="font-weight: 1000; font-size: 3.5em;">
                            <span style="font-size: 20px;">€</span>125
                        </h1>
                    </div>
                    <div class="pricing-description">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li class="pl-3 pr-3">Donec vitae sapien</li>
                            <li class="pl-3 pr-3">3 days free</li>
                            <li class="pl-3 pr-3">Phone and email support</li>
                            <li class="pl-3 pr-3">Help center access</li>
                        </ul>
                    </div>
                    <div class="pricing-button pb-4">
                        <button type="button" class="button is-dark w-75">Start with Freedom</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

 

</div>

</template>

<script>
export default {
  

  
}
</script>

<style>
@import "~bulma/css/bulma.css";
.hero-image {
  background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.body {
  color: #cccccc;
}

h2{
  text-align:center;
  padding: 20px;
}
/* Slider */

.slick-slide {
    margin: 0px 20px;
}

.slick-slide img {
    width: 100%;
}

.slick-slider
{
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;
    display: block;
}
.slick-track:before,
.slick-track:after
{
    display: table;
    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;
    height: auto;
    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}

.how-section1{
    margin-top:-15%;
    padding: 10%;
}
.how-section1 h4{
    color: #8c94ff;
    font-weight: bold;
    font-size: 30px;
}
.how-section1 .subheading{
    color: #000000;
    font-size: 20px;
}
.how-section1 .row
{
    margin-top: 10%;
}
.how-img 
{
    text-align: center;
}
.how-img img{
    width: 40%;
}
body {
    font-family: 'Roboto';font-size: 16px;
}

.aboutus-section {
    padding: 90px 0;
}
.aboutus-title {
    font-size: 30px;
    letter-spacing: 0;
    line-height: 32px;
    margin: 0 0 39px;
    padding: 0 0 11px;
    position: relative;
    text-transform: uppercase;
    color: #000;
}
.aboutus-title::after {
    background: #1d1d1d none repeat scroll 0 0;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 54px;
}
.aboutus-text {
    color: #606060;
    font-size: 13px;
    line-height: 22px;
    margin: 0 0 35px;
}

a:hover, a:active {
    color: #1d1d1d;
    text-decoration: none;
    outline: 0;
}
.aboutus-more {
    border: 1px solid #1d1d1d;
    border-radius: 25px;
    color: #1d1d1d;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    padding: 7px 20px;
    text-transform: uppercase;
}
.feature .feature-box .iconset {
    background: #fff none repeat scroll 0 0;
    float: left;
    position: relative;
    width: 18%;
}
.feature .feature-box .iconset::after {
    background: #1d1d1d none repeat scroll 0 0;
    content: "";
    height: 150%;
    left: 43%;
    position: absolute;
    top: 100%;
    width: 1px;
}

.feature .feature-box .feature-content h4 {
    color: #0f0f0f;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 22px;
    margin: 0 0 5px;
}


.feature .feature-box .feature-content {
    float: left;
    padding-left: 28px;
    width: 78%;
}
.feature .feature-box .feature-content h4 {
    color: #0f0f0f;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 22px;
    margin: 0 0 5px;
}
.feature .feature-box .feature-content p {
    color: #606060;
    font-size: 13px;
    line-height: 22px;
}
.icon {
    color : #1d1d1d;
    padding:0px;
    font-size:40px;
    border: 1px solid #1d1d1d;
    border-radius: 100px;
    color: #1d1d1d;
    font-size: 28px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    width: 70px;
}

body{margin:40px;}

.stepwizard-step p {
    margin-top: 10px;    
}

.process-row {
    display: table-row;
}

.process {
    display: table;     
    width: 100%;
    position: relative;
}

.process-step button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
}

.process-row:before {
    top: 50px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-order: 0;
    
}

.process-step {    
    display: table-cell;
    text-align: center;
    position: relative;
}

.process-step p {
    margin-top:10px;
    
}

.btn-circle {
  width: 100px;
  height: 100px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}

hr.rounded {
  border-top: 8px solid #bbb;
  border-radius: 5px;
}

</style>