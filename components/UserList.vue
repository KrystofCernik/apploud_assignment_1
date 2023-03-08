<template>
  <div
    class="user-list w-full h-full bg-slate-200 flex flex-col items-center gap-y-5 p-10 overflow-y-scroll"
  >
    <UserCard
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :username="user.username"
        :groups="[]"
        :projects="[]"
    />
  </div>
</template>

<script setup lang="ts">

  defineProps({
    users: {
        type: Array,
        required: true
    }
  })

</script>

<style>

</style>