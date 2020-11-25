<template>
    <div class="song-details-view">
        <img src="@/assets/back_arrow.png" class="back-arrow" @click="goBack">
        <div class="technical-sheet">
            <p>title: {{ songDetails.title }}</p>
            <p>artist: {{ songDetails.artist }}</p>
            <div class="album">
                <img :src="songDetails.albumImage" alt="">
                <p>{{ songDetails.album }}</p>
            </div>
            <p>genre: {{ songDetails.genre }}</p>
        </div>
        <div class="youtube-video">
            <h2>Youtube video</h2>
            <iframe width="90%" height="60%" :src="'https://www.youtube.com/embed/' + songId" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="lyrics">
            <h2>lyrics</h2>
            <textarea readonly v-model="songDetails.lyrics"></textarea>
        </div>
        <div class="tab">
            <h2>tab</h2>
            <textarea readonly v-model="songDetails.tab"></textarea>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'SongDetailsView',
        data() {
            return {
                songDetails: null,
                songId: null
            }
        },
        methods: {
            getSongDetails() {
                const songId = this.$store.state.route.params.songId;
                axios.get(`http://localhost:8081/songs/${songId}`)
                    .then(response => {
                        console.log('song details')
                        this.songDetails = response.data.songDetails
                        this.getSongId();
                    })
                    .catch(error => console.log(error))
            },
            getSongId() {
                var ID = '';
                let url = this.songDetails.youtubeId
                url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                if(url[2] !== undefined) {
                    ID = url[2].split(/[^0-9a-z_]/i);
                    ID = ID[0];
                }
                else {
                    ID = url;
                }
                this.songId = ID
            },
            goBack() {
                this.$router.push({name: 'songs'})
            }
        },
        mounted () {
            this.getSongDetails();
        },
    }
</script>

<style lang="scss" scoped>
.song-details-view {
    width: 90%;
    height: 92%;
    margin: 0px auto 0px auto;
    display: grid;
    grid-template-columns: 5% 25% 35% 35%;
    grid-template-rows: 4% 48% 48%;
    grid-template-areas:
        ". . . ."
        "back-arrow tech-sheet lyrics tab"
        ". youtube lyrics tab";
}
.back-arrow {
    grid-area: back-arrow;
    width: 80%;
    cursor: pointer;
}
.technical-sheet {
    grid-area: tech-sheet;
    background-color: #d35400;
    font-size: 1.7em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .album {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
            width: 20%;
        }
    }
}
.youtube-video {
    grid-area: youtube;
    background-color: #e67e22;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.lyrics {
    grid-area: lyrics;
    background-color: #f39c12;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    textarea {
        width: 90%;
        height: 80%;
        resize: none;
    }
}

.tab {
    grid-area: tab;
    background-color: #e67e22;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    textarea {
        width: 90%;
        height: 80%;
        resize: none;
    }
}
</style>