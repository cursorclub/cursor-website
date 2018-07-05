<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; Cursor 2018</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="https://twitter.com/cursorclub" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://facebook.com/cursor.club" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://instagram.com/cursor.club" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/company/18284485" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// Import Font Awesome
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands'

// Add them all to the library
fontawesome.library.add(faTwitter, faFacebook, faInstagram, faLinkedin)

export default {
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers
  }
}
</script>