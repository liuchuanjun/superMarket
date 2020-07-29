<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
    data() {
        return {
            scroll: null
        };
    },
    props: {

        probeType: {

            type: Number,
            default: 0
        }
    },
    created() {

    },
    mounted() {

        this.scroll = new Bscroll(this.$refs.wrapper,{

            probeType: this.probeType,
            click: true,
            pullUpLoad: true

        })

        // 监听滚动的位置
        this.scroll.on('scroll', (position)=>{

            this.$emit('contentScroll', position)
        })

        // 监听上拉加载
        this.scroll.on('pullingUp',()=>{

            this.$emit('pullingUp')
        })
    },
    methods: {

        scroolTo(x,y,time=300){

            this.scroll && this.scroll.scrollTo(x,y,time)
        },

        refresh(){

            this.scroll && this.scroll.refresh();
        },

        finishPullUp(){

            this.scroll && this.scroll.finishPullUp();
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
