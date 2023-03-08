<template>
  <div class="user-card py-3 px-4 w-full max-w-[500px] rounded-lg bg-slate-50">
    <h1>{{ name }}</h1>
    <p
        class="username"
        :class="{ 'mb-2': projects?.length || groups?.length }"
    >
        @{{ username }}
    </p>
    <h2 v-if="projects && projects.length">Projects</h2>
    <ul class="list-disc list-inside">
        <li
            v-for="project in projects"
            :key="project"
        >
            {{ project }}
        </li>
    </ul>
    <h2 v-if="groups && groups.length">Groups</h2>
    <ul class="list-disc list-inside">
        <li
            v-for="group in groups"
            :key="group"
        >
            {{ group }}
        </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

  defineProps({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    projects: {
        type: Array,
        default: null
    },
    groups: {
        type: Array,
        default: null
    }
  })

</script>

<style>

</style>