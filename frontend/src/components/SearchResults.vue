<template>
    <div>
      <v-list  color="grey">
        <v-list-item-group color="black">
          <v-list-item @click="setSong(song)" v-for="song in this.$store.state.searchList.songs" :key="song.videoId">
            <v-list-item-content>
              <v-row>
                <v-col md="5">
                  <v-list-item-title>
                    {{ song.name }}
                  </v-list-item-title>
                </v-col>
                <v-col md="5">
                  <v-list-item-title>
                    {{ song.artist.name}}
                  </v-list-item-title>
                </v-col>
                <v-col md="2">
                <v-btn v-on:click="add(song)" rounded dark color="black" right>
                  <v-icon>
                    mdi-plus
                  </v-icon>
                </v-btn>
                </v-col>
              </v-row>
            </v-list-item-content>


          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchResults",
  data() {
    return {
      result: this.$store.state.searchList,
      playlist: this.$store.state.currentPlaylist 
    }
  },
  computed: {},
  methods: {
    ...mapGetters(["getSearchList"]),
    ...mapActions(["addSong"]),
    setSong(song) {
      this.$store.commit("setIsPlaying", false);
      this.$store.commit("setCurrentSong", {
        id: '',
        title: '',
        artist: '',
        album: '',
      })
      this.$store.commit("setCurrentSong", {
        id: song.videoId,
        title: song.name,
        artist: song.artist.name,
        album: song.album.name,
      });
      
      this.$store.commit("setIsPlaying", true);
    },
    async add(song) {
      let plist = this.$store.state.currentPlaylist
      if (plist === undefined) return
      const format = {
        id: this.$store.state.currentPlaylist.id,
        key: song.videoId,
        userId: this.$store.state.user.id,
        title: song.name,
        artist: song.artist.name,
        album: song.album.name
      }
      await this.addSong(format)
      .then(response => {
        console.log(response)
      })
    }
  },
};
</script>
<style>

</style>
