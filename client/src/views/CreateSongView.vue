<template>
    <div class="create-song-view">
        <h1>Add a song</h1>
        <div class="create-song-container">
            <CreateSongInfos @infos-state="manageInfosState"></CreateSongInfos>
            <CreateSongContent @content-state="manageContentState"></CreateSongContent>
        </div>
        <button :class="{disabled : !can_create_song}" @click="createSong">Create song</button>
    </div>
</template>

<script>
import CreateSongInfos from '@/components/CreateSongInfos.vue';
import CreateSongContent from '@/components/CreateSongContent.vue';
import axios from 'axios'
    export default {
        name: 'CreateSongView',
        components: {
            CreateSongInfos,
            CreateSongContent,
        },
        data() {
            return {
                can_create_song: false,
                song_infos_filled:false,
                song_content_filled:false,
                song_to_create: {
                    title: '',
                    artist: '',
                    genre: '',
                    album: '',
                    albumImage: '',
                    youtubeId: '',
                    tab: '',
                    lyrics: '',
                }
            }
        },
        methods: {
            canCreateSong() {
                if(this.song_infos_filled && this.song_content_filled) {
                    this.can_create_song = true;
                }
                else {
                    this.can_create_song = false;
                }
            },
            manageContentState(payload) {
                if(payload.state == true) {
                    this.song_content_filled = true;
                    this.song_to_create.tab = payload.content.tab;
                    this.song_to_create.lyrics = payload.content.lyrics;
                }
                else
                    this.song_content_filled = false;
                this.canCreateSong();
            },
            manageInfosState(payload) {
                if(payload.state == true) {
                    this.song_infos_filled = true;
                    this.song_to_create.title = payload.infos.title;
                    this.song_to_create.artist = payload.infos.artist;
                    this.song_to_create.genre = payload.infos.genre;
                    this.song_to_create.album = payload.infos.album;
                    this.song_to_create.albumImage = payload.infos.albumImage;
                    this.song_to_create.youtubeId = payload.infos.youtubeId;
                }
                else
                    this.song_infos_filled = false;
                this.canCreateSong();
            },
            createSong() {
                axios.post('http://localhost:8081/songs', {
                    ...this.song_to_create
                })
                    .then(() => console.log('song created'))
                    .catch(error => console.log(error))
            }
        },
    }
</script>

<style lang="scss" scoped>
.create-song-view {
    display: flex;
    flex-direction: column;
    h1 {
        align-self: center;
        padding: 3vh 0;
    }
    button {
        width: 13%;
        margin: auto;
        margin-top: 5vh;
        font-size: 1.7em;
        padding: .4em 1.2em .4em 1.2em;
        border: 2px solid #e67e22;
        border-radius: .5em;
        color: white;
        background-color: #e67e22;
        font-family: Josefin Sans, sans-serif;
        cursor: pointer;
        outline: none;
        transition-duration: 400ms;
        &:hover {
            background-color: white;
            color: #e67e22;
        }
    }
    .disabled {
        cursor: not-allowed;
        background-color: white;
        color: #e67e22;
    }
}
.create-song-container {
    display: flex;
    justify-content: space-around;
}
</style>