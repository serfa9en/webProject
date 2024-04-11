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
        <div class="cook" v-on:click="setLoction()">
            <img src="../assets/icons/location.jpg">
            <p><u>{{ location }}</u></p>
        </div>
        <div class="button log">
            <p><u>Log In</u></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
        location: null
    }
  },
  computed: {
    showComponent () {
        if (this.$store.getters.getHeader === true) {
            // console.log(document.getElementById("location"))
            this.setElem()
        }
        return this.$store.getters.getHeader
    }
  },
  methods: {
    showPosition(position) {

        /*
        var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
        var token = "34ae466ece5958ebd8fec42454bd71d4537465a2";
    
        var query = { lat: position.coords.latitude, lon: position.coords.longitude };

        var options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(query)
        }

        fetch(url, options)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
*/

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        document.getElementById("location").innerHTML = lat + " - " + lon;
        //document.cookie = position.coords.latitude + " - " + position.coords.longitude
    },
    setElem: function () {
        this.location = document.cookie.split('=')[1]
        /*
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            document.getElementById("location").innerHTML = "Геолокация не поддерживается.";
        }
        */

        this.$store.dispatch('setCatalog', { data: '#D1C1FF' }) 
        this.$store.dispatch('setFavourites', { data: '#FFFFFF' }) 
        this.$store.dispatch('setBusket', { data: '#FFFFFF' }) 
        this.$store.dispatch('setStep', { data: 'catalog' }) 

    },
    setLoction: function () {
        var city = prompt('Где вы находитесь?');
        document.cookie = "city=" + city
        this.location = city
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
    width: 250px;
    height: 100%;
    font-size: 16px;
    cursor: pointer;
    color: #000000;
    text-align: center;
    justify-content: center;
    bottom: 0;
    display: flex;
    align-items: center;
}

</style>