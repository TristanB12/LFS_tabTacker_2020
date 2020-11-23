<template>
    <div class="create-song-view">
        <h1>Add a song</h1>
        <CreateSongInfos></CreateSongInfos>
    </div>
</template>

<script>
import CreateSongInfos from '@/components/CreateSongInfos.vue';
    export default {
        name: 'CreateSongView',
        components: {
            CreateSongInfos,
        },
    }
</script>

<style lang="scss" scoped>

</style>