<template lang="html">
    <div class="pop-container">
        <div class="pop-item" v-for="(list,index) in popImgs" :key="index">
            <img :src="list.image" alt="">
            <span>{{list.title}}</span>
        </div>
    </div>
  
  </template>
  
  <script>

  
  export default {
    name: 'popItemShow',
    props: {
        popImgs: {
            type: Array,
            default: () => []
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
      .pop-container {

        width: 100%;
        padding: 10px 1%;

        display: flex;
        justify-content: space-between;

        background-color: #fff;

        .pop-item {

            text-align: center;

            img {

                width: 84px;
                height: 84px;
                border-radius: 50%;
            }

            span {
                
                display: inline-block;
                margin-top: 4px;
            }
        }
      }
  </style>
  