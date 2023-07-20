<template>
    <form @submit.prevent>
        <h4>Add new post</h4>
        <my-input
            v-model="post.title"
            class="input" 
            type="text" 
            placeholder="Name"
        />
        <my-input 
            v-model="post.body"
            class="input" 
            type="text" 
            placeholder="Description"
        />
        <my-button 
        @click="createPosts" 
        class="btn"
        style="align-self: flex-end;margin-top: 15px;"
        >Create</my-button>
    </form>
</template>

<script>

export default {
    name: 'PostForm',
    data() {
        return {
            post:{
                title: '',
                body: ''
            }
        };
    },methods:{
        createPosts(){
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped>

form{
    display: flex;
    flex-direction: column;
}
</style>