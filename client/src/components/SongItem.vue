<template>
    <div class="song-item">
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
    p {
        color: black;
        font-size: 1.4em;
        font-weight: 200;
    }
}
</style>