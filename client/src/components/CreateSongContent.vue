<template>
    <div class="create-song-content">
        <h2>Song content</h2>
        <div class="content-inputs">
            <textarea type="text" v-model="tab" placeholder="Tab"></textarea>
            <textarea type="text" v-model="lyrics" placeholder="Lyrics"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateSongContent',
        data() {
            return {
                tab: '',
                lyrics: ''
            }
        },
        methods: {
            isContentAllFilled() {
                if(this.tab != '' && this.lyrics != '')
                    this.$emit('content-state', {
                        state:  true,
                        content: {
                            tab: this.tab,
                            lyrics: this.lyrics
                        }
                    })
                else
                    this.$emit('content-state', {state: false})
            }
        },
        beforeUpdate () {
            this.isContentAllFilled();
        },
    }
</script>

<style lang="scss" scoped>
.create-song-content {
    width: 50%;
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

.content-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 4;
    textarea {
        width: 80%;
        margin: auto;
        padding: .3em .5em;
        padding-bottom: 15%;
        font-size: 1.3em;
        border: none;
        border-radius: .3em;
    }
}
</style>