<template>
    <div class="shoppingCar">
        <h1 style="font-size: 24px">购物车</h1>
        <Footer-bar/>
    </div>
</template>

<script>

export default {
    name: 'my',
    data () {
      return {
      }
    },
    mounted() {

    },
    created(){
        
    },
    methods:{
        handleSelect(key, keyPath) {
            this.$router.push({path:key})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shoppingCar{

}

</style>
