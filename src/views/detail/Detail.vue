<template>
    <div class="detail-container">
        <Naver class="naver-container ">
            <div slot="item-left" class="left" @click="back">
                <img src="~assets/img/arrow/arrow_back.png">
            </div>
            <div slot="item-center" class="center">
                <div :class='{ active: currentIndex == index}'
                    v-for='(item,index) in titles' 
                    :key='index'
                    @click="centerClick(index)">
                    {{item}}
                </div>
            </div>
        </Naver>

    </div>
</template>

<script>
import Naver from 'components/common/navbar/Navbar'

export default {
    components: {
        Naver
    },
    data() {
        return {

            currentIndex: 0,
            titles: ['商品','参数','评论','推荐']
        };
    },
    props: {

    },
    created() {

    },
    mounted() {


    },
    methods: {

        // 返回
        back(){
            this.$router.back()
        },

        // naver 详情点击事件
        centerClick(index){

            this.currentIndex = index
        }

    }
};
</script>

<style lang='scss' scoped>

    .detail-container {

        position: relative;
        z-index: 9;
        width: 100%;
        height: 100vh;

        background-color: #fff;

        .naver-container  {

            background-color: #f5f5f5;

            .left {

                img {

                    width: 20px;
                    height: 20px;
                }
            }

            .center {

                display: flex;           

                > div {

                    color: #000000;
                    margin: 0 6px;

                    &.active {

                        color: red;
                    }
                }
            }
        }
    }

</style>
