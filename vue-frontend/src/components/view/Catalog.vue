<template>
    <div>
        <GoodCard 
            v-for="good in goods" 
            v-bind:key="good.id"
            v-bind:id="good.id"
            v-bind:name="good.name">
        </GoodCard>
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