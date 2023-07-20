<template>
    <div>
        <h2>List of souls</h2>
        <post-item 
        :post="post"
        :key="post.id"
        @remove="$emit('rempove', post)"
        v-for="post in posts"
        />
    </div>
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