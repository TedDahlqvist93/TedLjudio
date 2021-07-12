<template>
  <div class="main">
    <v-list color="grey">
      <v-list-item-group v-model="selectedPlaylist" color="black">
        <v-list-item v-for="(playlist, id) in playlists" :key="id">
          <v-list-item-content>
            <v-row
              ><v-col>
                <v-list-item-title v-text="playlist.name">
                  {{ playlist.name }}
                </v-list-item-title>
              </v-col>

              <v-btn
                rounded
                dark
                color="black"
                right
                large
                @click="remove(playlist.id)"
                ><v-icon>mdi-trash-can</v-icon></v-btn
              >
            </v-row></v-list-item-content
          >
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <div v-if="!this.addClicked">
      <v-btn rounded small color="black" dark @click="clicked" max-width="120">
        Add playlist
      </v-btn>
    </div>
    <div v-else>
      <v-sheet color="grey" dark>
        <v-text-field
          @submit.prevent="name"
          v-model="name"
          dense
          flat
          solo-inverted
          placeholder="Playlist name"
        >
        </v-text-field>
        <v-btn small rounded dark color="black" @click="add">Add</v-btn>
        <v-btn small rounded dark color="black" @click="clicked">Cancel</v-btn>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Playlist",
  data() {
    return {
      selectedPlaylist: 0,
      addClicked: false,
      name: "",
    };
  },
  computed: {
    playlists() {
      return this.$store.getters.getAllPlaylists;
    },
    playlistSelect(playlist) {
      if (playlist.id == this.selected) {
        return `Selected: ${playlist.name}`;
      } else {
        return playlist.name;
      }
    },
  },
  async mounted() {
    await this.getPlaylists(this.$store.state.user.id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    ...mapActions(["getPlaylists"]),
    ...mapActions(["addPlaylist"]),
    ...mapActions(["deletePlaylist"]),
    ...mapActions(["getSongs"]),
    ...mapMutations(["setCurrentPlaylist"]),
    async clicked() {
      this.addClicked = !this.addClicked;
      await this.$nextTick();
    },
    async add() {
      const id = this.$store.state.user.id;
      const data = {
        userId: id,
        name: this.name,
      };

      await this.addPlaylist(data).then(() => {
        this.addClicked = !this.addClicked;
        this.name = "";
      });
    },
    async remove(id) {
      var r = confirm("Do you want to delete this playlist?");

      if (r === true) {
        const userId = this.$store.state.user.id;
        const data = {
          userId: userId,
          id: id,
        };

        await this.deletePlaylist(data).then(() => {});
      } else {
        console.log("We dont delete");
      }
    },
    async selectPlaylist(playlist) {
      const wrap = {
        id: playlist.id,
        name: playlist.name,
        userId: playlist.user_id,
      };

      this.setCurrentPlaylist(wrap);
      delete wrap.name;
      this.selected = playlist.id;
      await this.getSongs(wrap).then(() => {
        this.$store.state.allSongs;
      });
    },
  },
};
</script>

<style scoped>
