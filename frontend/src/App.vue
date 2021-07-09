<template>
  <v-app>
      <header>
        <Header />
      </header>
        <v-main>
          <v-container>
            <v-row>
              <v-col>
                <v-card color="grey" height="100%">
                    
                </v-card>
              </v-col>
              <v-col><v-card color="grey"><Playlist /></v-card> </v-col
            ></v-row>
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    Playlist,
    Header,
    MediaController,
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
  watch: {
    getSong(song) {
      this.song = song;
    },
  },
  methods: {
    async update() {
      this.selected = this.$store.state.currentPlaylist;
      await this.$nextTick(() => {
        this.selected = this.$store.state.currentPlaylist;
      });
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
