<template>
  <div
    class="h-screen flex justify-center"
    :class="{ 'items-center': true }"
  >
    <LoginForm
      v-if="!users.length"
      @submit="handleSubmit"
    />
    <UserList
      v-if="users.length"
      :users="users"
    />
  </div>
</template>

<script setup lang="ts">

  import Request from '~/types/Request'
  import User from '~/types/User'
  import { getAllMembers } from '~/composables/getAllMembers'

  definePageMeta({
    name: 'Index'
  })

  const users = ref<Array<User>>([])

  const handleSubmit = async (req: Request) => {
    getAllMembers(req.id, req.token).then(members => {
      members.forEach((member: any) => {
        const user: User = {
          id: member.id,
          username: member.username,
          name: member.name,
          role: member.access_level
        }
        users.value.push(user)
      })
      console.log('loading')
      console.log(users)
    })
  }

















  

  // const handleSubmit = async (req: Request) => {
  //   const { data, pending, error } = await useFetch(`https://gitlab.com/api/v4/groups/10975505/members`, { //{req.id}
  //     headers: {
  //         xc //req.token
  //     }
  //   })
  //   users.value = data.value

  //   console.log(data)
  // }

// async function getGroupMembers(groupId: number, token: string) {
//   const response = await fetch(`https://gitlab.com/api/v4/groups/${groupId}/members`, {
//     headers: {
//       'PRIVATE-TOKEN': token
//     }
//   })
//   const members = response.json()
//   return members
// }

// async function getSubgroups(groupId: number, token: string) {
//   const response = await fetch(`https://gitlab.com/api/v4/groups/${groupId}/subgroups`, {
//     headers: {
//       'PRIVATE-TOKEN': token
//     }
//   })
//   const subgroups = response.json()
//   return subgroups
// }

// async function getProjects(groupId: number, token: string) {
//   const resposne = await fetch(`https://gitlab.com/api/v4/groups/${groupId}/projects`, {
//     headers: {
//       'PRIVATE-TOKEN': token
//     }
//   })
//   const projects = resposne.json()
//   return projects
// }

// async function getProjectMembers(projectId: number, token: string) {
//   const response = await fetch(`https://gitlab.com/api/v4/projects/${projectId}/members`, {
//     headers: {
//       'PRIVATE-TOKEN': token
//     }
//   })
//   const members = response.json()
//   return members
// }

// async function getAllGroupMembers(groupId: number, token: string) {
  
//   const members = await getGroupMembers(groupId, token)
//   const subgroups = await getSubgroups(groupId, token)
//   const projects = await getProjects(groupId, token)

//   const subgroupPromises = subgroups.map(subgroup => {
//     return getAllGroupMembers(subgroup.id, token)
//   })

//   const projectPromises = subgroups.map(subgroup => {
//     return getProjects(subgroup.id, token)
//   }).flat().map(project => {
//     return getProjectMembers(project.id, token)
//   })

//   const subgroupMembers = await Promise.all(subgroupPromises)
//   const projectMembers = await Promise.all(projectPromises)

//   return [...members, ...subgroupMembers.flat(), ...projectMembers.flat()]
// }

</script>

<style>

</style>