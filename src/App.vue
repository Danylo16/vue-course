<template>
    <div class="app">
        <PostForm
            @create="createPost"
        ></PostForm>
        <PostList 
            :posts="posts"
            @remove="removePost"
        ></PostList>
    </div>
</template>

<script>
import PostForm from './components/PostForm';
import PostList from "@/components/PostList"

export default {
    components: {
        PostForm, PostList
    },
    data(){
        return{
           posts: [
            {id: 1, title: "Js", body: "Some very intresting text"},
            {id: 2, title: "Js-2", body: "Some very intresting text"},
            {id: 3, title: "Js-apollon", body: "Some very intresting text"}
           ]
        }
    }, methods:{
        createPost(post){
            this.posts.push(post)
        },
        removePost(post){
            this.posts = this.posts.filter(p=> p.id !== post.id)
        }
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

</style>