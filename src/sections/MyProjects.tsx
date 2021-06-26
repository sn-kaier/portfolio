import React from 'react'
import { myProjects } from '../types/Projects'
import ProjectCard from '../dumb/ProjectCard/ProjectCard'

const MyProjects = () => {
  return (
    <div className="flex flex-wrap mx-auto mt-2 overflow-hidden justify-center w-around">
      {myProjects.map((project, i) => (
        <ProjectCard {...project} key={i} />
      ))}
    </div>
  )
}

export default MyProjects
