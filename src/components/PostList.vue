<template>
    <div v-if="posts.length>0">
        <h2>List of souls</h2>
        <post-item 
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
        v-for="post in posts"
        />
    </div>
    <h2 v-else>
        There ain't shit here
    </h2>
</template>

<script>
    import PostItem from "@/components/PostItem.vue"
    export default{
        components:{
            PostItem
        },
        props:{
            posts:{
                type: Array,
                require: true
            }
        }
    }
</script>

<style scoped>
</style>