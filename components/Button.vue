<template>
  <button
    :type="submit ? 'submit' : ''"
    class="py-3 px-4 rounded-lg w-[10rem] bg-slate-50 mx-auto hover:bg-slate-100 transition duration-100 ease-in"
  >
    {{ label }} 
  </button>
</template>

<script setup lang="ts">

  defineProps({
    label: {
        type: String,
        required: true
    },
    submit: {
        type: Boolean,
        default: false
    }
  })

</script>

<style>

</style>