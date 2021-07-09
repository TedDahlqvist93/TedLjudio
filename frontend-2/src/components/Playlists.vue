<template>
<div>
    <div :key="playlist.id" v-for="playlist in playlist">
        <Playlist @delete-task="$emit('delete-task', task.id)" 
        :playlist="playlist"/>
    </div> </div>
</template>

<script>
import Playlist from './Playlist.vue'

export default {
  name: "Playlists",
  props: {
    playlists: Array,
  },
  components: {
    Playlist,
  },
  emits: ["delete-playlist"],
};
</script>

<style>
</style>