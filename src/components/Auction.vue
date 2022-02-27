<template>
<h1>
  Auction #{{ id }}
</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id
</script>
