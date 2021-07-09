<template>
  <div>
    <h3>
      {{ playlist.text }}
      <i @click="$emit('delete-playlist', task.id)" class="fas fa-times"></i>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: {
    playlist: Object,
  },
};
</script>

<style>
</style>