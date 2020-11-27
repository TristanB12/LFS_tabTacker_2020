<template>
    <div class="search-song">
        <input type="text" placeholder="Filter songs by..." v-model="filter_content">
        <select name="filters" id="filter-type" v-model="filter_type">
            <option value="title">title</option>
            <option value="artist">artist</option>
            <option value="genre">genre</option>
            <option value="album">album</option>
        </select>
        <button @click="$emit('filter-song', {filter_content, filter_type})">Filter</button>
    </div>
</template>

<script>
    export default {
        name: 'SearchSong',
        data() {
            return {
                filter_type: 'title',
                filter_content: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
.search-song {
    width: 60%;
    padding: .5em 1em;
    border: 3px solid #e67e22;
    border-radius: 1.5em;
    background-color: #e67e22;
    display: flex;
    justify-content: space-around;
    input {
        font-size: 1.1em;
        padding: .4em .8em;
        border: none;
        border-radius: .5em;
    }
    select {
        font-size: 1.1em;
        background-color: white;
        border: solid 1px black;
        border-radius: .5em;
    }
    button {
        font-size: 1.1em;
        padding: .5em 1em;
        border: 2px solid black;
        border-radius: .3em;
        background-color: white;
        cursor: pointer;
        &:hover {
            background-color: rgba(230, 126, 34, 0.2);
        }
    }

}
</style>