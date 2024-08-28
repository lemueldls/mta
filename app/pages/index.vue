<script setup>
const feed = await $fetch('/api/transit')

console.log({ feed })
</script>

<template>
  <div>
    <!-- <div v-for="vehicle in feed" :key="vehicle.id">
      <div>{{ vehicle.trip.routeId }}</div>
      <div>{{ vehicle.trip.startTime }}</div>
      <div>{{ vehicle.trip.scheduleRelationship }}</div>
    </div> -->
  </div>
</template>
