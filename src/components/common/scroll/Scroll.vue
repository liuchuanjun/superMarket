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
            click: true

        })

        this.scroll.on('scroll', (position)=>{

            this.$emit('arrowShow', position)
        })

        console.log(this.scroll);
    },
    methods: {

        scroolTo(x,y,time=300){

            this.scroll.scrollTo(x,y,time)
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
