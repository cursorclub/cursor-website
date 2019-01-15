<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <nuxt-link class="navbar-brand js-scroll-trigger" to="/"><img src="~/static/wordmark.svg" alt="Cursor" /></nuxt-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <font-awesome-icon icon="bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="/#about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="/#events">Events</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="/#team">Team</nuxt-link>
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
          <div class="intro-heading">Code of Conduct</div>
        </div>
      </div>
    </header>
    
    <!-- Further Reading -->
    <section id="about" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="section-subheading text-muted">Cursor’s priority is ensuring we maintain a safe and fun space for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, religion, political views, or experience level. We do not tolerate harassment or any actions which make others feel unwelcome/unsafe. We reserve the right to ask you to leave if we believe you are harming others’ wellbeing.</h3>

            <h2>Policy:</h2>
            <p>All participants are expected to follow the Code of Conduct as follows:</p>
            <p>Drugs, alcohol, weapons, and firearms are not permitted at any Cursor events.</p>
            <p>Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, religion or political views, sexual images in public spaces, deliberate intimidation, stalking, following, photography or audio/video recording against reasonable consent, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>

            <p>Photography is encouraged, but other participants must be given a reasonable chance to opt out from being photographed. If they object to the taking of their photograph, comply with their request. It is inappropriate to take photographs in contexts where people have a reasonable expectation of privacy (in bathrooms or where participants are sleeping).</p>

            <p>Participants asked to stop any harassing behavior are expected to comply immediately. As this is a technology event, we like to explicitly note that the projects created at our event are equally subject to the anti-harassment policy.</p>

            <p>Sponsors and partners are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Sponsor representatives (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.</p>

            <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of event staff immediately.</p>

            <p>Event staff will be happy to help participants contact any local security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance.</p>

            <p>If a participant engages in harassing behavior, the event organisers may take any action they deem appropriate. This includes warning the offender, expulsion from the event with no refund (if applicable), or reporting their behaviour to local law enforcement.</p>

            <p>We expect participants to follow these rules at event and workshop venues and event-related social events.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <cursor-footer></cursor-footer>
  </div>
</template>

<script>
// Import Font Awesome
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

import CursorFooter from '~/components/CursorFooter'

fontawesome.library.add(faBars)

export default {
  components: {
    FontAwesomeIcon,
    CursorFooter
  },
  head: {
    title: 'Cursor Code of Conduct'
  }
}
</script>
