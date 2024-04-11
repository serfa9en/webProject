<template>
    <div>
        <div>Sort</div>
        <div class="conteiner">
            <div class="tile">
            <GoodCard class="elem"
            v-for="good in goods" 
            v-bind:key="good.id"
            v-bind:id="good.id"
            v-bind:name="good.name">
        </GoodCard>
        </div>
        <div class="filterBlock">
            <div>
                производитель
            </div>
            <div>
                тип
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import GoodCard from './GoodCard.vue'
import GoodService from '../../services/GoodService'

export default {
  name: 'Catalog',
  components: {
    GoodCard
  },
  data() {
            return {
                goods: []
            }
        },
        methods: {
            getGoods() {
                GoodService.getGoods().then((response) => {
                    this.goods = response.data
                })
            }
        },
        created() {
            this.getGoods()
        }
}
</script>

<style scoped>
.conteiner {
    display: flex;
    position: relative;
}

.tile {
    width: 1200px;
    height: auto;

    text-align: center;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 350px);
}

.elem {
    border: #2000A0 2px solid;
}

.filterBlock {
    width: 255px;
    height: auto;
    border: 2px solid #2000A0;
    /*position: fixed;*/
}
</style>