<template>
  <v-app>
      <Header/>
    <v-main>
      <MainView/>
    </v-main>
    <v-footer>
      <MediaController/>
    </v-footer>

  </v-app>
</template>

<script>
import MediaController from './components/MediaController.vue';
import Header from './components/Header.vue';
import MainView from './components/MainView.vue';

export default {
  name: 'App',

  components: {
    MainView,
    Header,
    MediaController,
  },

  data: () => ({
  }),
};
</script>
