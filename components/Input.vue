<template>
  <div>
    <label class="font-medium text-slate-600">
        {{ label }}
    </label>
    <input
        v-model="value"
        type="text"
        class="py-3 px-4 w-full rounded-lg mt-2 mb-5 outline-none hover:placeholder:text-slate-900 focus:placeholder:text-slate-900 placeholder:transtition-all placeholder:duration-100 placeholder:ease-in"
        :placeholder="'Enter ' + text"
        @change="$emit('input', value)"
    >
  </div>
</template>

<script setup lang="ts">

  defineProps({
    label: {
        type: String,
        default: null
    },
    text: {
        type: String,
        required: true
    }
  })

  const value = ref<String | Number>()

</script>

<style lang="scss">



</style>