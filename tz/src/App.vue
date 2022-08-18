<script>
import FileTree from './components/FileTree.vue'

export default {
    name: 'App',
    components: { FileTree },
    computed: {
        fileTreeList() {
            return this.$store.getters.getFileTree
        }
    }
}
</script>

<template>
  <div>
    <div v-for="(el, idx) in fileTreeList" :key="idx">
      <FileTree
        :name="el.name"
        :children="el.children"
        :depth="0"
        :id="el.id"
        >
      </FileTree>
    </div>
  </div>
</template>

<style scoped>
</style>
