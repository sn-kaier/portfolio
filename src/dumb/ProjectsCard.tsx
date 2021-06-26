import React, { PropsWithChildren } from 'react'
import { Technology } from '../types/Technologies'

const ProjectsCard = (
  props: PropsWithChildren<{
    title: string
    subtitle: string
    technologies: Array<Technology>
  }>
) => {
  return (
    <div className="">
      <div>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
      </div>
    </div>
  )
}

export default ProjectsCard
