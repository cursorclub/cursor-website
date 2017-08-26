<template>
  <v-app light>
    <main>
      <v-container fluid>
        <section>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 md4 class="text-xs-center">
                <img src="~static/icon.png" />
              </v-flex>
              <v-flex xs12 md8 class="text-xs-center text-md-left">
                <h1>Cursor</h1>
                <h2>Richmond Hill's Local Tech Community</h2>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
        <section v-if="nextEvent" class="mb-3">
          <v-container>
            <v-card class="elevation-2">
              <v-card-text class="py-5">
                <v-layout row wrap>
                  <v-flex xs12 md4 class="my-3">
                    <img v-if="nextEvent.image" :src="nextEvent.image.src" class="elevation-1" />
                  </v-flex>
                  <v-flex xs12 md8 class="text-xs-center my-3">
                    <h2 class="mt-4 mb-3">{{ nextEvent.name }}</h2>
                    <p>{{ nextEvent.startTime }} - {{ nextEvent.endTime }}</p>
                    <p>{{ nextEvent.location }}</p>
                    <p>{{ nextEvent.description }}</p>
                    <v-btn :class="nextEvent.accent" :to="{ name: 'event', params: nextEvent.permalink }"></v-btn>
                    <router-link :to="{ name: '', params: {} }"></router-link>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-container>
        </section>
        <nuxt />
      </v-container>
    </main>
    <v-footer>
      <span>Made with love by Cursor</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        nextEvent: null
      }
    }
  }
</script>
