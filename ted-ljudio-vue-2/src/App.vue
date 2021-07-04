<template>
  <v-app>
    <div> 
    <header>
      <Header/>
      </header>
      <div>
    <v-main>
      <v-container fluid>
      <v-row>
        <v-col>
          <v-card color="black" height="100%"> <v-card-text>AAA</v-card-text>
            </v-card>
          
            </v-col>
      <v-col><Playlists/>
        </v-col></v-row>
      </v-container>
      
    </v-main>
      </div>
      <div>
    <v-footer>
      <MediaController/>
    </v-footer>
      </div>
    </div>

  </v-app>
</template>

<script>
import MediaController from './components/MediaController.vue';
import Header from './components/Header.vue';
import Playlists from './components/Playlists.vue';

export default {
  name: 'App',

  components: {
    Playlists,
    Header,
    MediaController,
  },

  data: () => ({
  }),
};
</script>
