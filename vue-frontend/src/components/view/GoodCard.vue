<template>
    <div class="settings">
        <img :src="imgItem">
        <h1>
            {{ name }}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'GoodCard',
    props: {
        id: String,
        name: String
    },
    computed: {
        imgItem () {
            return require(`../../assets/goods/${ this.id }.jpg`)
        }
    }
}
</script>

<style scoped>
.settings {
    width: 350px;
    height: 400px;
    border-radius: 10px;
    background: white;
    margin: 20px;
}

img {
    width: 180px;
    height: auto;
}

</style>