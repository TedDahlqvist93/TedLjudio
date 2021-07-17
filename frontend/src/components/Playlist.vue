<template>
  <div>
    <v-row>
      <v-col>
        <v-sheet>
          <v-list color="grey">
            <v-list-item-group v-model="selectedPlaylist" color="black">
              <v-list-item v-for="(playlist, id) in playlists" :key="id">
                <v-list-item-content de>
                  <v-row>
                    <v-col md="10">
                      <v-list-item-title v-text="playlist.name">
                        {{ playlist.name }}
                      </v-list-item-title>
                    </v-col>
                    <v-col md="2">
                      <v-btn
                        rounded
                        dark
                        color="black"
                        right
                        @click="remove(playlist.id)"
                        ><v-icon>mdi-trash-can</v-icon></v-btn
                      ></v-col
                    >
                  </v-row></v-list-item-content
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col></v-row
    >

    <v-sheet>
      <v-row justify="center">
        <v-Dialog v-model="addDialog" max-width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="black" dark v-bind="attrs" v-on="on" rounded>
              Add playlist
            </v-btn>
          </template>
          <v-card>
            <v-card-title> Add Playlist </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    @submit.prevent="name"
                    @click="clicked"
                    v-model="name"
                    label="Playlist name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" dark rounded @click="add">
                Add Playlist
              </v-btn>
              <v-btn color="black" dark rounded @click="addDialog = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-Dialog>
      </v-row>
    </v-sheet>
    <v-row>
      <v-col>
        <v-sheet>
          <v-list color="grey">
            <v-list-item-group v-model="selectedPlaylist" color="black">
              <v-list-item v-for="(playlist, id) in playlists" :key="id">
                <v-list-item-content de>
                  <v-row>
                  </v-row></v-list-item-content
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col></v-row
    >
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Playlist",
  data() {
    return {
      addDialog: false,
      selectedPlaylist: 0,
      addClicked: false,
        name: ''
      ,
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
        this.addDialog = false;
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
