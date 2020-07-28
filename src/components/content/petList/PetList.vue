<template>
    <div class="pet-container">
        <div class="pet-item" v-for="(item,index) in petLists.list" :key="index">
            <img :src="item.image" alt="" @load='petImageLoad'>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {

        };
    },
    props: {
        petLists: {
            type: Object,
            default: ()=>{}
        }
    },
    methods: {
        
        petImageLoad(){

            this.$emit('petImageLoad')
        }
    },
    created() {

    }    
};
</script>

<style lang='scss' scoped>
    .pet-container {

        width: 100%;
        padding: 0 1%;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .pet-item {

            width: 48.5vw;
            height: 240px;
            
            text-align: center;
            margin-bottom: 8px;

            background-color: #fff;

            img {

                width: 100%;
                height: 220px;
            }
        }
    }
</style>
