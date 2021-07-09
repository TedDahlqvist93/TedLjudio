<template>
  <v-app app>
      <div>
      <v-row>
          <v-col md="8"><v-card color="black">HEJ</v-card></v-col>
          <v-col md="5"><v-card><Playlists/></v-card>></v-col>
      </v-row>
      </div>
  </v-app>
</template>

<script>
import Playlists from './Playlists.vue'
export default {
  components: { Playlists },
    name: 'MainView'

}
</script>

<style>

</style>