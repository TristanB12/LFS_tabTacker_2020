<template>
    <div class="songs-view" @click="createSong">
        <h1>Songs</h1>
        <button class="add-song">
            <img src="@/assets/plus_button.png" alt="">
            <p>Add a song</p>
        </button>
        <div class="songs-card">
            <SongItem v-for="song in songs" :key="song._id" :songItem="song"></SongItem>
        </div>
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
            },
            createSong() {
                this.$router.push({name: 'create'})
            }
        },
        mounted () {
            this.getSongs();
        },
    }
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
}
.songs-card {
    width: 40%;
    text-align: center;
    margin: auto;
}

.add-song {
    width: 10%;
    display: flex;
    margin: auto;
    padding: .5em 1em;
    align-items: center;
    border: 3px solid #e67e22;
    border-radius: 1.5em;
    background-color: #e67e22;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
        background-color: white;
    }
    img {
        max-width: 20%;
        flex: 1;
    }
    p {
        font-family: Oswald, sans-serif;
        font-size: 1.4em;
        color: black;
        flex: 2;
    }
}
</style>