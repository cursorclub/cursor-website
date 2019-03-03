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
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="/coc">Code of Conduct</nuxt-link>
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
          <h2><em>click</em> into tech</h2>
          <!-- Begin MailChimp Signup Form -->
          <div id="mc_embed_signup">
            <form action="https://club.us12.list-manage.com/subscribe/post?u=4f16b0cc0a9f53e1ebb83769a&amp;id=cb64e39e3b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4f16b0cc0a9f53e1ebb83769a_cb64e39e3b" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="subscribe to updates" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
            </form>
          </div>
          <!--End mc_embed_signup-->
        </div>
      </div>
    </header>
    <!-- <header class="masthead banner">
      <div class="container">
        <div class="intro-text" style="padding-bottom: 40px;">
          <div class="intro-heading"><img src="~/static/lunarhacks.png" alt="LunarHacks" style="margin-top: -70px; margin-right: 100px; margin-bottom: -100px" /></div>
          <h3>February 2 @ Mozilla Toronto</h3>
          <a class="btn" target="_blank" href="https://lunarhacks.eventbrite.ca">Register now!</a>
        </div>
      </div>
    </header> -->

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
        <div class="row">
          <div class="col-md-6 portfolio-item bg-light">
            <nuxt-link class="portfolio-link" to="/reactnative">
              <img class="img-fluid" :src="rnbanner.src" :srcset="rnbanner.srcset" alt="" />
              <h3 class="text-center">Code an App with Cursor</h3>
            </nuxt-link>
            <div class="portfolio-caption">
              <p>Teens (12-16 years) learn to code apps for their phones using React Native, a technology developed by Facebook. All they need is a laptop, their phones and some creativity.</p>
              <p>July 5, 2018, 6-9 PM</p>
              <p><a href="http://www.rhpl.richmondhill.on.ca/libraries/centrallibrary.cfm">Richmond Hill Central Library</a></p>
              <p><nuxt-link to="/reactnative">https://cursor.club/reactnative</nuxt-link></p>
            </div>
          </div>
          <div class="col-md-6 portfolio-item bg-light">
            <a class="portfolio-link" href="https://lunarhacks.ca">
              <img class="img-fluid" :src="lhbanner.src" :srcset="lhbanner.srcset" alt="" />
              <h3 class="text-center">LunarHacks</h3>
            </a>
            <div class="portfolio-caption">
              <p>Cursor's first 12 hour hack day! Students from around Toronto bring their ideas to life over 12 hours of hacking and fun! </p>
              <p>February 2, 2019, 9 AM-8:30 PM</p>
              <p><a href="https://goo.gl/maps/D8HNoGANiB92">Mozilla Toronto</a></p>
              <p><a href="https://lunarhacks.ca">https://lunarhacks.ca</a></p>
            </div>
          </div>
          <div class="col-md-6 portfolio-item bg-light">
            <a class="portfolio-link" href="https://www.eventbrite.ca/e/learn-git-version-control-with-cursor-tickets-57449631394">
              <img class="img-fluid" :src="gitbanner.src" :srcset="gitbanner.srcset" alt="" />
              <h3 class="text-center">Learn Git Version Control with Cursor</h3>
            </a>
            <div class="portfolio-caption">
              <p>Join us for an introductory workshop on Git and GitHub. We'll show you how to use these increasingly popular tools to teamwork your code and back up your previous versions. Please bring your own laptop if possible. </p>
              <p>March 14, 2019, 6 PM-9 PM</p>
              <p><a href="http://www.rhpl.richmondhill.on.ca/libraries/centrallibrary.cfm">Richmond Hill Central Library</a></p>
              <p><a href="https://www.eventbrite.ca/e/learn-git-version-control-with-cursor-tickets-57449631394">https://www.eventbrite.ca/e/learn-git-version-control-with-cursor-tickets-57449631394</a></p>
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
          <div :class="{ 'col-sm-6': i < 2, 'col-sm-4': i >= 2 }" v-for="(member, i) in team" :key="i">
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
    <cursor-footer></cursor-footer>
  </div>
</template>

<script>
// Import LunarHacks banner
import lhbanner from '~/assets/eventcards/lhbanner.png'
import rnbanner from '~/assets/eventcards/rnbanner.jpg'
import gitbanner from '~/assets/eventcards/gitbanner.jpg'
// Import compressed and resized versions of everyone's images
import aaron from '~/static/humans/aaron.jpg'
import arjun from '~/static/humans/arjun.jpg'
import bill from '~/static/humans/bill.jpg'
import feng from '~/static/humans/feng.jpg'
import joey from '~/static/humans/joey.jpg'
import jonathan from '~/static/humans/jonathan.jpg'
import katelyn from '~/static/humans/katelyn.jpg'
import misha from '~/static/humans/misha.jpg'
import nicholas from '~/static/humans/nicholas.jpg'
import samyar from '~/static/humans/samyar.jpg'
import yash from '~/static/humans/yash.jpg'

// Import Font Awesome
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faBars, faCircle, faMoon } from '@fortawesome/fontawesome-free-solid'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands'

// Import footer component
import CursorFooter from '~/components/CursorFooter'

// Add them all to the library
fontawesome.library.add(faBars, faCircle, faMoon, faTwitter, faFacebook, faInstagram, faLinkedin)

export default {
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers,
    CursorFooter
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
      },
      {
        name: 'Katelyn Wang',
        photo: katelyn,
        title: 'Venue Coordinator',
        linkedin: 'https://www.linkedin.com/in/katelyn-wang17/'
      }
    ],
    lhbanner,
    rnbanner,
    gitbanner
  })
}
</script>
