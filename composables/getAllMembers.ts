export const getAllMembers = async(id: number, token: string) => {
    const members = await getGroupMembers(id, token)
    const subgroups = await getSubgroups(id, token)
    const projects = await getProjects(id, token)

    const subgroupPromise = subgroups.map((subgroup: any) => {
      return getAllMembers(subgroup.id, token)
    })

    const projectPromise = projects.map((project: any) => {
      return getProjectMembers(project.id, token)
    })

    const subgroupMembers = await Promise.all(subgroupPromise)
    const projectMembers = await Promise.all(projectPromise)

    const allMembers = [...members, ...subgroupMembers.flat(), ...projectMembers.flat()]

    const allFilteredMembers = [...new Map(allMembers.map(member => [member.id, member])).values()]
    return allFilteredMembers
  }

  const getGroupMembers = async(id: number, token: string) => {
    const response = await fetch(`https://gitlab.com/api/v4/groups/${id}/members`, {
      headers: {
        'PRIVATE-TOKEN': token
      }
    })
    const members = response.json()
    return  members
  }

  const getSubgroups = async(id: number, token: string) => {
    const response = await fetch(`https://gitlab.com/api/v4/groups/${id}/subgroups`, {
      headers: {
        'PRIVATE-TOKEN': token
      }
    })
    const subgroups = response.json()
    return subgroups
  }

  const getProjects = async(id: number, token: string) => {
    const response = await fetch(`https://gitlab.com/api/v4/groups/${id}/projects`, {
      headers: {
        'PRIVATE-TOKEN': token
      }
    })
    const projects = response.json()
    return projects
  }

  const getProjectMembers = async(id: number, token: string) => {
    const response = await fetch(`https://gitlab.com/api/v4/projects/${id}/members`, {
      headers: {
        'PRIVATE-TOKEN': token
      }
    })
    const members = response.json()
    return members
  }