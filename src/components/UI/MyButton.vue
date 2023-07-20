<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<script>
    export default{
        name: 'my-button'
    }
</script>


<style scoped>
.btn{
    background: none;
    border: 1px teal solid;
    color: teal;
    padding: 10px 15px;
    cursor: pointer;
}
</style>