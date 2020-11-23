<template>
    <div class="songs-view">
        <h1>Songs</h1>
        <SongItem v-for="song in songs" :key="song.id" :songItem="song"></SongItem>
    </div>
</template>

<script>
import SongItem from '@/components/SongItem.vue';
import axios from  'axios';

    export default {
        name: 'SongsView',
        components: {
            SongItem,
        },
        data() {
            return {
                songs: null
            }
        },
        methods: {
            getSongs() {
                axios.get('http://localhost:8081/songs')
                    .then(reponse => {
                        this.songs = reponse.data.songs;
                    })
                    .catch(error => console.log(error))
            }
        },
        mounted () {
            this.getSongs();
        },
    }
</script>

<style lang="scss" scoped>
.songs-view {
    width: 40%;
    text-align: center;
    margin: auto;
    h1 {
        margin-top: 5vh;
        margin-bottom: 5vh;
    }
}
</style>