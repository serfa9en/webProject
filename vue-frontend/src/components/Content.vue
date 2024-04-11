<template>
    <div class="settings">
      <transition name="fade">
            <div v-if="this.$store.getters.getStep === 'catalog'">
              <Catalog/>
            </div>
        </transition>
    </div>
</template>

<script>
import Catalog from './view/Catalog.vue'

export default {
  name: 'Content',
  components: {
    Catalog
  }
}
</script>

<style scoped>
.settings {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
}
</style>