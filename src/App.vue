<script setup lang="ts">
import { useAppStore } from './store/app'
const app = useAppStore()
console.log(app.setData('hello'), app.$state.config,'这是pinia')
console.log('---环境变量----', import.meta.env)
</script>

<template>
	<router-view></router-view>
</template>

<style></style>
