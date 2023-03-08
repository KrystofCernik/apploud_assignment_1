<template>
  <form
    @submit.prevent="handleSubmit"
    class="login-form w-full md:w-[600px] h-full md:h-auto md:rounded-2xl bg-slate-200 flex flex-col items-stretch justify-center md:justify-between p-10"
  >
    <div class="mb-16">
        <Input
            label="Group ID"
            text="ID"
            @input="handleId"
        />
        <Input
            label="Access token"
            text="token"
            @input="handleToken"
        />
    </div>
    <Button
        label="Submit"
        submit
    />
  </form>
</template>

<script setup lang="ts">

  const Id = ref<number>(0)
  const accessToken = ref<string>('')

  const handleId = (id: number) => {
    Id.value = id
  }

  const handleToken = (token: string) => {
    accessToken.value = token
  }

  const emit = defineEmits(['submit'])

  const handleSubmit = () => {
    emit('submit', {
        id: Id.value,
        token: accessToken.value
    })
  }

</script>