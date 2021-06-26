import React from 'react'
import Markdown from 'markdown-to-jsx'
import TechnologyCard from '../TechnologyCard'
import { Project } from '../../types/Projects'

import classes from './ProjectCard.module.css';


const ProjectCard = (props: Project) => {
  return (
    <div className={classes.ProjectCard}>
      <div>
        <div>
          <h1>{props.title}</h1>
          <span>{props.subtitle}</span>
        </div>
        <TechnologyCard technologies={props.technologies} />
      </div>
      <div>
        <Markdown>{props.detailsShort}</Markdown>
        {props.detailsLong && <Markdown>{props.detailsLong}</Markdown>}
      </div>
    </div>
  )
}

export default ProjectCard
