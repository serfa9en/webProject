<template>
    <div class="settings">
        <img :src="imgItem">
        <h1 class="text">{{ name }}</h1>
        <div class="conteiner">
            <h1 class="cost">Цена</h1>
            <div class="button">В корзину</div>
        </div>
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
    margin: 30px;
}

.text {
    height: 50px;
    font-size: 16px;
    margin: 20px;
}

.conteiner {
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 20px;
}

.cost {
    font-size: 16px;
    margin: 30px;
    position: absolute;
    left: 0;
}

.button {
    width: 120px;
    height: 40px;
    border-radius: 4px;
    background: #D1C1FF;
    color: #2000A0;
    font-size: 16px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    margin: 30px;
}

.button:hover {
    background: #e3daff;
    cursor: pointer;
}
</style>