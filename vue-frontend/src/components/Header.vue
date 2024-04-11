<template>
    <div class="settings" v-show="showComponent">
        <div class="icon">
            <p>Electronic</p>
        </div>
        <div 
            class="button"
            id="catalog"
            :style="[{ 'background-color': `${ this.$store.getters.getCatalog }` }]"
            v-on:click="setStep(1)">
            <p>Каталог</p>
        </div>
        <div 
            class="button"
            id="favourites"
            :style="[{ 'background-color': `${ this.$store.getters.getFavourites }` }]"
            v-on:click="setStep(2)">
            <p>Избранное</p>
        </div>
        <div
            class="button"
            id="busket"
            :style="[{ 'background-color': `${ this.$store.getters.getBusket }` }]"
            v-on:click="setStep(3)">
            <p>Корзина</p>
        </div>
        <div class="cook">
            <p>Город</p>
        </div>
        <div class="button log">
            <p><u>Log In</u></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    showComponent () {
        if (this.$store.getters.getHeader === true) {
            this.setElem()
        }
        return this.$store.getters.getHeader
    }
  },
  methods: {
    setElem: function () {
        this.$store.dispatch('setCatalog', { data: '#D1C1FF' }) 
        this.$store.dispatch('setFavourites', { data: '#FFFFFF' }) 
        this.$store.dispatch('setBusket', { data: '#FFFFFF' }) 
        this.$store.dispatch('setStep', { data: 'catalog' }) 

    },
    setStep: function (val) {
        switch (val) {
            case 1: {
                this.$store.dispatch('setStep', { data: 'catalog' })
                this.$store.dispatch('setCatalog', { data: '#D1C1FF' }) 
                this.$store.dispatch('setFavourites', { data: '#FFFFFF' }) 
                this.$store.dispatch('setBusket', { data: '#FFFFFF' }) 
                break
            }
            case 2: {
                this.$store.dispatch('setStep', { data: 'favourites' }) 
                this.$store.dispatch('setCatalog', { data: '#FFFFFF' }) 
                this.$store.dispatch('setFavourites', { data: '#D1C1FF' }) 
                this.$store.dispatch('setBusket', { data: '#FFFFFF' }) 
                break
            }
            case 3: {
                this.$store.dispatch('setStep', { data: 'busket' }) 
                this.$store.dispatch('setCatalog', { data: '#FFFFFF' }) 
                this.$store.dispatch('setFavourites', { data: '#FFFFFF' }) 
                this.$store.dispatch('setBusket', { data: '#D1C1FF' }) 
                break
            }
        }
    }
  }
}
</script>

<style scoped>
.settings {
    width: 100%;
    height: 100px;
    background: #ffffff;
    display: flex;
    text-align: center;
    position: relative;
}

.icon {
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    bottom: 0;
    display: flex;
    font-size: 32px;
    cursor: pointer;
    color: #2000A0;
}

.log {
    position: absolute;
    right: 0;
}

.button {
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    bottom: 0;
    display: flex;
    font-size: 24px;
    cursor: pointer;
    color: #2000A0;
}

.button:hover {
    background: #D1C1FF;
}

.cook {
    width: 200px;
    height: 100%;
    font-size: 24px;
    cursor: pointer;
    color: #2000A0;
    text-align: center;
    justify-content: center;
    bottom: 0;
    display: flex;
    align-items: center;
}

</style>