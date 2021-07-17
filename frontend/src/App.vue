<template>
  <v-app>
    <v-app-bar>
      <Header />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-sheet color="grey" height="100%"><SearchResults/> </v-sheet>
          </v-col>
          <v-col
            ><v-sheet color="grey"><Playlist/> </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
      <MediaController />
    </v-footer>
  </v-app>
</template>

<script>
import MediaController from "./components/MediaController.vue";
import Header from "./components/Header.vue";
import Playlist from "./components/Playlist.vue";
import SearchResults from "./components/SearchResults.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    Playlist,
    Header,
    MediaController,
    SearchResults
  },
  data() {
    return {
      value: 1,
      text: "",
      query: "",
      song: "",
      selected: null,
    };
  },
  computed: {
    getSong() {
      return this.$store.state.currentSong.title;
    },

    ...mapGetters(["getSearchList"]),
    ...mapGetters(["getCurrentPlaylist"]),
  },
  methods: {
    async update() {
      this.selected = this.$store.state.currentPlaylist;
      await this.$nextTick(() => {
        this.selected = this.$store.state.currentPlaylist;
      });
    },

  mounted() {
    this.$store.dispatch("getUser");
  },

    ...mapActions(["searchSong"]),

    changeVolume(volume) {
      this.$store.commit("setVolume", volume);
    },
    play(bool) {
      this.$store.commit("setIsPlaying", bool);
    },
    search(query) {
      this.searchSong(query);
    },
  },
};
</script>

<style scoped>
body {
    overflow: hidden;
    height: 100vh;
}
</style>