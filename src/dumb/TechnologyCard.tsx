import React from 'react'
import { technologies, Technology, TechnologyName } from '../types/Technologies'

const TechnologyCard = (props: { technologies: Array<TechnologyName> }) => {
  return (
    <div className="flex gap-3">
      {props.technologies
        .map(
          (name) => technologies.find((tec) => tec.name === name) as Technology
        )
        .filter((tec) => !!tec)
        .map((tech) => (
          <img
            className="w-6 transform hover:scale-110 transition "
            src={tech.iconPath}
            alt={tech.name}
            title={tech.name}
          />
        ))}
    </div>
  )
}

export default TechnologyCard
