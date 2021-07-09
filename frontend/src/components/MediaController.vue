<template>
  <v-app>
    <v-app-bar extended app bottom color="green">
      <v-container>
        <div></div>
        <v-row>
          <v-col>
            <v-row color="green">
              <v-col>
                <v-card flat color="green"
                  ><v-slider color="black" height="20px"></v-slider></v-card
                ><v-spacer></v-spacer>
              </v-col>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn rounded dark color="black"
                ><v-icon>mdi-pause</v-icon></v-btn
              >
              <v-btn rounded dark color="black"
                ><v-icon>mdi-play</v-icon></v-btn
              >
              <v-btn rounded dark color="black"
                ><v-icon>mdi-stop</v-icon></v-btn
              >
              <v-spacer></v-spacer>
              <div>
                <v-icon large>mdi-volume-high</v-icon>
              </div>
              <v-slider color="black"></v-slider>
              <v-spacer></v-spacer>
            </v-row>
          </v-col>
            <youtube
              :video-id="videoId"
              ref="youtube"
              :player-vars="playerVars"
              @ready="load()"
              resize
              width="160"
              height="90"
            ></youtube>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "MediaController",

  data() {
    return {
      videoId: "",
      playerVars: {
        autoplay: 1,
        controls: 0,
        autohide: 1,
        origin: 'http://localhost:8080',
      },
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    video() {
      return this.$store.state.currentSong.id;
    },
    play() {
      return this.$store.state.player.isPlaying;
    },

    pause() {
      return this.$store.state.player.isPlaying;
    },
    volume() {
      return this.$store.state.player.volume;
    },
  },
  watch: {
    video(id) {
      this.videoId = id;
    },
    play() {
      if (this.$store.state.player.isPlaying === true) {
        this.$refs.youtube.player.playVideo();
      }
    },
    pause() {
      if (this.$store.state.player.isPlaying === false) {
        this.$refs.youtube.player.pauseVideo();
      }
    },
    volume(volume) {
      this.$refs.youtube.player.setVolume(volume);
    },
  },
  methods: {
    load() {
      this.$refs.youtube.player.cueVideoById(this.$store.state.currentSong.id);
      this.$store.commit("setIsPlaying", false);
    },
  },
};
</script>

<style>
</style>