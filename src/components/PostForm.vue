<template>
    <form @submit.prevent>
        <h4>Add new post</h4>
        <input
            v-bind:value="title"
            @input="title = $event.target.value"
            class="input" 
            type="text" 
            placeholder="Name"
        >
        <input 
            v-bind:value="body" 
            @input="body = $event.target.value"
            class="input" 
            type="text" 
            placeholder="Description"
        >
        <button  class="btn">Create</button>
    </form>
</template>

<script>
export default {
    name: 'PostForm',
    data() {
        return {
            title: '',
            body: ''
        };
    }
}
</script>

<style scoped>
.input{
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;

}
.btn{
    margin-top: 15px;
    align-self: flex-end;
    background: none;
    border: 1px teal solid;
    color: teal;
    padding: 10px 15px;
    cursor: pointer;
}
form{
    display: flex;
    flex-direction: column;
}
</style>