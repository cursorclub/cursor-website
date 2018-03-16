<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="~/static/wordmark.svg" alt="Cursor" /></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <font-awesome-icon icon="bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#events">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-heading"><img src="~/static/wordmark.svg" alt="Cursor" /></div>
          <a class="btn btn-xl js-scroll-trigger" href="#events"><em>click</em> into tech</a>
        </div>
      </div>
    </header>

    <!-- About -->
    <section id="about" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">About</h2>
            <h3 class="section-subheading text-muted">Why we're here</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p class="text-muted text-center">
              We are an organisation dedicated to helping passionate youth to learn about tech and programming through mentoring and by experience. We strive to create a rich high school tech culture in and throughout the GTA by hosting hackathons, workshops, tech talks, and other in-person events.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Events -->
    <section id="events">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Events</h2>
            <h3 class="section-subheading text-muted">We've got a lot of stuff planned. Stay tuned for more details!</h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4 mx-auto">
            <div class="card">
              <font-awesome-layers class="fa-8x mx-auto mt-3">
                <font-awesome-icon icon="circle" class="text-primary" />
                <font-awesome-icon icon="moon" transform="shrink-6" class="fa-inverse" />
              </font-awesome-layers>
              <div class="card-body">
                <h4 class="card-title">Lunar Hacks</h4>
                <p class="card-text">Cursor and <a href="http://torontoyouthnetwork.com">TYN</a>'s latest hackathon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Our Planning Team</h2>
            <h3 class="section-subheading text-muted">We're working hard to build new events.</h3>
          </div>
        </div>
        <div class="row">
          <!-- Dynamically render team members to separate layout from data -->
          <div :class="{ 'col-sm-6': i < 2 || i > 7, 'col-sm-4': i >= 2 && i <= 7 }" v-for="(member, i) in team" :key="i">
            <div class="team-member">
              <img class="mx-auto rounded-circle" :src="member.photo.src" :srcset="member.photo.srcset" sizes="225px" :alt="member.name">
              <h4 v-text="member.name"></h4>
              <p class="text-muted" v-text="member.title"></p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item" v-if="member.twitter">
                  <a :href="member.twitter">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                  </a>
                </li>
                <li class="list-inline-item" v-if="member.facebook">
                  <a :href="member.facebook">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                  </a>
                </li>
                <li class="list-inline-item" v-if="member.linkedin">
                  <a :href="member.linkedin">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Cursor 2018</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="https://twitter.com/cursorclub">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://facebook.com/cursor.club">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://instagram.com/cursor.club">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/company/18284485">
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// Import compressed and resized versions of everyone's images
import aaron from '~/static/humans/aaron.jpg'
import arjun from '~/static/humans/arjun.jpg'
import bill from '~/static/humans/bill.jpg'
import feng from '~/static/humans/feng.jpg'
import joey from '~/static/humans/joey.jpg'
import jonathan from '~/static/humans/jonathan.jpg'
import misha from '~/static/humans/misha.jpg'
import nicholas from '~/static/humans/nicholas.jpg'
import samyar from '~/static/humans/samyar.jpg'
import yash from '~/static/humans/yash.jpg'

// Import Font Awesome
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faBars, faCircle, faMoon } from '@fortawesome/fontawesome-free-solid'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands'

// Add them all to the library
fontawesome.library.add(faBars, faCircle, faMoon, faTwitter, faFacebook, faInstagram, faLinkedin)

export default {
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers
  },
  data: () => ({
    team: [
      {
        name: 'Nicholas Carr',
        photo: nicholas,
        title: 'Co-Founder',
        twitter: 'https://twitter.com/nicholas_carr1',
        facebook: 'https://www.facebook.com/profile.php?id=100009871454553',
        linkedin: 'https://www.linkedin.com/in/nicholas-carr-729a95143'
      },
      {
        name: 'Misha Larionov',
        photo: misha,
        title: 'Co-Founder',
        twitter: 'https://twitter.com/Misha_Larionov',
        facebook: 'https://www.facebook.com/mishalarionov2',
        linkedin: 'https://www.linkedin.com/in/misha-larionov-617289b9/'
      },
      {
        name: 'Samyar Vahid',
        photo: samyar,
        title: 'Head of Marketing',
        twitter: 'https://twitter.com/samyarvahid',
        facebook: 'https://www.facebook.com/samyarv',
        linkedin: 'https://www.linkedin.com/in/samyarvahid/'
      },
      {
        name: 'Feng Guo',
        photo: feng,
        title: 'Head of Logistics',
        twitter: 'https://twitter.com/Feggle_Blast',
        facebook: 'https://www.facebook.com/profile.php?id=100009677594415',
        linkedin: 'https://www.linkedin.com/in/feng-guo-546a84143/'
      },
      {
        name: 'Bill Liu',
        photo: bill,
        title: 'Head of Finance',
        twitter: 'https://twitter.com/penguinofwinter',
        facebook: 'https://www.facebook.com/penguinofwinter',
        linkedin: 'https://www.linkedin.com/in/bill-liu-a89a52142/'
      },
      {
        name: 'Yash Arora',
        photo: yash,
        title: 'Marketing',
        twitter: 'https://www.twitter.com/yasharora0606',
        facebook: 'https://www.facebook.com/yasharora6',
        linkedin: 'https://www.linkedin.com/in/yasharora0606/'
      },
      {
        name: 'Joey Chik',
        photo: joey,
        title: 'Event Coordinator',
        facebook: 'https://www.facebook.com/joey.chik.75',
        linkedin: 'https://www.linkedin.com/in/joey-c-1319b7151/'
      },
      {
        name: 'Aaron Yee',
        photo: aaron,
        title: 'Social Media Manager',
        twitter: 'https://twitter.com/AaronYee7',
        facebook: 'https://www.facebook.com/ayyy.ron',
        linkedin: 'https://www.linkedin.com/in/aaron-yee-9466a614a/'
      },
      {
        name: 'Arjun Pillai',
        photo: arjun,
        title: 'Event Coordinator',
        twitter: 'https://twitter.com/ArjunPillai9',
        facebook: 'https://www.facebook.com/arjun.pillai.31',
        linkedin: 'https://www.linkedin.com/in/arjun-pillai-268860145/'
      },
      {
        name: 'Jonathan Xu',
        photo: jonathan,
        title: 'Sponsor Coordinator',
        twitter: 'https://twitter.com/JonathanXu20',
        facebook: 'https://www.facebook.com/jonathan.xu.50',
        linkedin: 'https://www.linkedin.com/in/jonathanxu01/'
      }
    ]
  })
}
</script>
