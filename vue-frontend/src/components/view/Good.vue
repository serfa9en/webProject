<template>
    <div class="container">
        <h1 class="text-center">
            Goods List
        </h1>
        <table class="table">
            <thead>
                <th>Id</th>
                <th>Name</th>
            </thead>
            <tbody>
                <tr v-for="good in goods" v-bind:key="good.id">
                    <td>{{ good.id }}</td>
                    <td>{{ good.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import GoodService from '../services/GoodService'

    export default {
        name: '',
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

<style>
</style>