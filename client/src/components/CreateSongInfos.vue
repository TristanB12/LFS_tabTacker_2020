<template>
    <div class="create-song-infos">
        <h2>Song informations</h2>
        <div class="infos-inputs">
            <input type="text" v-model="title" placeholder="Title">
            <input type="text" v-model="artist" placeholder="Artist">
            <input type="text" v-model="genre" placeholder="Genre">
            <input type="text" v-model="album" placeholder="Album">
            <input type="text" v-model="albumImage" placeholder="Album image Url">
            <input type="text" v-model="youtubeId" placeholder="Youtube link">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateSongInfos',
        data() {
            return {
                title: '',
                artist: '',
                genre: '',
                album: '',
                albumImage: '',
                youtubeId: ''
            }
        },
        methods: {
            areInfosAllFilled() {
                if(this.title != '' && this.artist != '' &&
                    this.genre != '' && this.album != '' &&
                    this.albumImage != '' && this.youtubeId != '')
                    this.$emit('infos-state', {
                        state:  true,
                        infos: {
                            title: this.title,
                            artist: this.artist,
                            genre: this.genre,
                            album: this.album,
                            albumImage: this.albumImage,
                            youtubeId: this.youtubeId
                        }
                    })
                else
                    this.$emit('infos-state', {state: false})
            }
        },
        beforeUpdate () {
            this.areInfosAllFilled();
        },
    }
</script>

<style lang="scss" scoped>
.create-song-infos {
    width: 30%;
    height: 50vh;
    padding: 1em 2em;
    border: 3px solid #e67e22;
    border-radius: .8em;
    background-color: #e67e22;
    display: flex;
    flex-direction: column;
    h2 {
        display: block;
        align-self: center;
    }
}

.infos-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 4;
    input {
        width: 70%;
        margin: auto;
        padding: .3em .5em;
        font-size: 1.3em;
        border: none;
        border-radius: .3em;
    }
}
</style>