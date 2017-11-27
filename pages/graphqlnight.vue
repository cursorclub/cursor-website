<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="~/static/wordmark.svg" alt="Cursor" /></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#schedule">Schedule</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#location">Location</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-presented"><img src="~/static/wordmark.svg" alt="Cursor" /></div>
          <div class="intro-heading">GraphQL Night</div>
          <h3>Learn to build web apps using real data</h3>
          <h3>2018-01-05</h3>
          <h4>18:00-21:00</h4>
        </div>
      </div>
    </header>

    <!-- About -->
    <section id="about" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">About the Event</h2>
            <p>
              During the workshop, you will learn to create a web app with
              Node.js to request only the data you need from the Shopify
              Storefront API. We'll help you through setting up a Node.js
              environment, registering for a developer account with Shopify and
              using all these technologies to build an online storefront.
            </p>
            <h2 class="section-heading">FAQ</h2>
            <div class="row">
              <div class="col-md-6">
                <h3>What is GraphQL?</h3>
                <p>
                  <a href="http://graphql.org">GraphQL</a> provides a complete
                  description of the information you can request from an API
                  so that developers can request exactly what data they need and
                  nothing more.
                </p>
                <h3>What is Cursor?</h3>
                <p>
                  Cursor is a youth organisation dedicated to bringing tech
                  education to youth in the GTA. You can learn more about us at
                  our <a href="https://cursor.club">main website.</a>
                </p>
                <h3>What is Shopify?</h3>
                <p>
                  <a href="https://www.shopify.ca">Shopify</a> is a company
                  dedicated to making commerce better and easier to use.
                  Their Storefront API is based on GraphQL and lets developers
                  request data about products or create a checkout.
                </p>
              </div>
              <div class="col-md-6">
                <h3>What should I bring?</h3>
                <p>
                  Make sure to bring your laptop, phone, chargers, your student
                  ID. Food will be provided.
                </p>
                <h3>How much will it cost?</h3>
                <p>
                  Absolutely free. Dinner and refreshments will also be
                  available for free throughout the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule -->
    <section id="schedule">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Schedule</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-12">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-calendar fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Coming Soon</h4>
            <p class="text-muted"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section id="location" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Location</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-6">
            <h4 class="service-heading">To Be Announced</h4>
          </div>
          <div class="col-md-6">
            <googlemaps-map
              :center="center"
              :zoom="zoom"
              class="map">

              <googlemaps-user-position />
            </googlemaps-map>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsors -->
    <section id="sponsors">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Sponsors</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-12">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-calendar fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Coming Soon</h4>
            <p class="text-muted"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Cursor 2017</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="https://twitter.com/cursorclub">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://facebook.com/cursor.club">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://instagram.com/cursor.club">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/company/18284485">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.map {
  height: 300px;
}
</style>

<script>
export default {
  data: () => ({
    center: { lat: 43.6565353, lng: -79.6010332 },
    zoom: 10,
    mapOptions: {}
  }),
  head: {
    title: 'GraphQL Night | Cursor'
  }
}
</script>
