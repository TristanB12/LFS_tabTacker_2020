<template>
    <div class="song-item" @click="viewSongDetails">
        <img :src="songItem.albumImage" alt="">
        <p>{{ songItem.title }}</p>
        <p>{{ songItem.artist }}</p>
        <p>{{ songItem.album }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SongItem',
        props: {
            songItem: {
                type: Object,
                default:null
            },
        },
        methods: {
            viewSongDetails() {
                this.$router.push({name: 'song', params: {songId: this.songItem._id}})
            }
        },
    }
</script>

<style lang="scss" scoped>
.song-item {
    display: flex;
    justify-content: space-around;
    border: 2px solid #e67e22;
    background-color: rgba(230, 126, 34, 0.3);
    border-radius: 1em;;
    margin: 1vh 0px;
    padding: 2vh 0px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: rgba(230, 126, 34, 0.5);
    }
    img {
        max-width: 10%;
    }
    p {
        color: black;
        font-size: 1.4em;
        font-weight: 200;
    }
    button {
        font-size: 1em;
        padding: .3em .5em;
    }
}
</style>