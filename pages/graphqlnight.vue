<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="https://cursor.club"><img src="~/static/wordmark.svg" alt="Cursor" /></a>
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
      <div id="particles-js"></div>
      <div class="container">
        <div class="intro-text">
          <div class="intro-presented mb-5"><a href="https://cursor.club"><img src="~/static/wordmark.svg" alt="Cursor" /></a></div>
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
              </div>
              <div class="col-md-6">
                <h3>What should I bring?</h3>
                <p>
                  Make sure to bring your laptop, phone, chargers, your student
                  ID. Food will be provided.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>What is Cursor?</h3>
                <p>
                  Cursor is a youth organisation dedicated to bringing tech
                  education to youth in the GTA. You can learn more about us at
                  our <a href="https://cursor.club">main website.</a>
                </p>
              </div>
              <div class="col-md-6">
                <h3>How much will it cost?</h3>
                <p>
                  Absolutely free. Dinner and refreshments will also be
                  available for free throughout the event.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>What is Shopify?</h3>
                <p>
                  <a href="https://www.shopify.ca">Shopify</a> is a company
                  dedicated to making commerce better and easier to use.
                  Their Storefront API is based on GraphQL and lets developers
                  request data about products or create a checkout.
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

<style>
.map {
  height: 300px;
}
header.masthead {
  background: #3d3356;
  position: relative;
}
header.masthead #particles-js {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
header.masthead .container .intro-text {
  position: relative;
  z-index: 1;
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
  },
  mounted () {
    require('particles.js')
    window.particlesJS('particles-js', {
      'particles': {
        'number': {
          'value': 80,
          'density': {
            'enable': true,
            'value_area': 800
          }
        },
        'color': {
          'value': '#ffffff'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
          'image': {
            'src': 'img/github.svg',
            'width': 100,
            'height': 100
          }
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 3,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#ffffff',
          'opacity': 0.4,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 6,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'window',
        'events': {
          'onhover': {
            'enable': false,
            'mode': 'repulse'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 400,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true
    })
  }
}
</script>
