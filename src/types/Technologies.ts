export type TechnologyName =
  | 'Vue'
  | 'TypeScript'
  | 'Angular'
  | 'MongoDB'
  | 'Node.js'
  | 'GraphQL'

import vueIcon from '../../assets/tech-icons-colored/vue.svg'
import typescriptIcon from '../../assets/tech-icons-colored/TypeScript.svg'
import angularIcon from '../../assets/tech-icons-colored/angular.svg'
import mongoIcon from '../../assets/tech-icons-colored/mongo.svg'
import nodeJsIcon from '../../assets/tech-icons-colored/node-icon.svg'
import gqlIcon from '../../assets/tech-icons-colored/gql.svg'

export interface Technology {
  name: TechnologyName
  iconPath: string
}

export const technologies: Array<Technology> = [
  {
    name: 'Vue',
    iconPath: vueIcon,
  },
  {
    name: 'TypeScript',
    iconPath: typescriptIcon,
  },
  {
    name: 'Angular',
    iconPath: angularIcon,
  },
  {
    name: 'MongoDB',
    iconPath: mongoIcon,
  },
  {
    name: 'Node.js',
    iconPath: nodeJsIcon,
  },
  {
    name: 'GraphQL',
    iconPath: gqlIcon,
  },
]
