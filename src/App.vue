<template>
    <div class="app">
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
            <button @click="createPosts" class="btn">Create</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Name: </strong>{{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>
    </div>
   
</template>

<script>
export default {
    data(){
        return{
           posts: [
            {id: 1, title: "Js", body: "Some very intresting text"},
            {id: 2, title: "Js-2", body: "Some very intresting text"},
            {id: 3, title: "Js-apollon", body: "Some very intresting text"}
           ],
            title: '',
            body: ''
        }
    }, methods:{
        createPosts(){
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            }
            this.posts.push(newPost)
            this.title = ''
            this.body = ''
        },
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app{
    padding: 20px;
}
.post{
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
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