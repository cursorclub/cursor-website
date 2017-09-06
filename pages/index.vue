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
        <section v-if="data" class="mb-3">
          <v-container>
            <v-card class="elevation-2">
              <v-card-text class="py-5">
                <v-layout row wrap>
                  <v-flex xs12 md4 class="my-3">
                    <img v-if="data.image" :src="data.image.src" class="elevation-1" />
                  </v-flex>
                  <v-flex xs12 md8 class="text-xs-center my-3">
                    <h2 class="mt-4 mb-3">{{ data.name }}</h2>
                    <p>{{ data.startTime }} - {{ data.endTime }}</p>
                    <p>{{ data.location }}</p>
                    <p>{{ data.description }}</p>
                    <v-btn :class="data.accent" :to="{ name: 'event', params: data.permalink }"></v-btn>
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
  import populate from '~plugins/api'
  export default {
    data: () => ({
      data: null
    }),
    mounted: populate('events/next')
  }
</script>
