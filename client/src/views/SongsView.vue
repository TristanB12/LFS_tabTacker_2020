<template>
    <div class="songs-view">
        <h1>Songs</h1>
        <div class="song-actions">
            <button class="add-song" @click="createSong">
                <img src="@/assets/plus_button.png" alt="">
                <p>Add a song</p>
            </button>
            <SearchSong @filter-song="filterSong"></SearchSong>
        </div>
        <div class="songs-card">
            <SongItem v-for="song in songs" :key="song._id" :songItem="song"></SongItem>
        </div>
    </div>
</template>

<script>
import SongItem from '@/components/SongItem.vue';
import SearchSong from '@/components/SearchSong.vue';
import axios from  'axios';

    export default {
        name: 'SongsView',
        components: {
            SongItem,
            SearchSong,
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
            },
            filterSong(payload) {
                axios.post('http://localhost:8081/songs/filter', {
                    filterType: payload.filter_type,
                    filterContent: payload.filter_content
                })
                .then(response => {
                    this.songs = response.data.songs;
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
.song-actions {
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.add-song {
    width: 30%;
    display: flex;
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