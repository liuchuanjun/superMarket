<template lang="html">
    <div class="tabControl-container">
        <div class="tabControl-item" :class="{'active': currentIndex == index}" 
            v-for="(item,index) in titles" 
            :key="index"
            @click="tabControlClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
    
</template>

<script>
export default {

    name:"tabControl",
    data(){

        return {

            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default: ()=>[]
        }
    },
    methods: {

        tabControlClick(index){

            this.currentIndex = index
            this.$emit("tabControlClick", index)
        }
    }
}
</script>

<style lang="scss" scoped>

    .tabControl-container {

        width: 100%;
        height: 36px;
        padding: 0 1%;
        box-sizing: border-box;

        display: flex;

        margin-top: 10px;

        .tabControl-item {

            flex: 1;

            line-height: 36px;
            text-align: center;

            background-color: #fff;

            span {

                padding: 2px 2px;
            }

        }

        .active {

            span {

                color: red;
                border-bottom: 1px solid red;
            }
        }

    }

</style>
  
