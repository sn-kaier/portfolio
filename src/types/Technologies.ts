export type TechnologyName = 'Vue' | 'TypeScript' | 'Angular' | 'MongoDB' | 'Node.js' | 'GraphQL'

import vueIcon from '../../assets/vue.svg';
import typescriptIcon from '../../assets/TypeScript.svg';
import angularIcon from '../../assets/angular.svg';
import mongoIcon from '../../assets/mongo.svg';
import nodeJsIcon from '../../assets/node-icon.svg';
import gqlIcon from '../../assets/gql.svg';

export interface Technology {
  name: TechnologyName
  iconPath: string
  filter?: string
}

export const technologies: Array<Technology> = [
  {
    name: 'Vue',
    iconPath: vueIcon,
    filter: 'hue-rotate(57deg) saturate(2) brightness(0.85)'
  },
  {
    name: 'TypeScript',
    iconPath: typescriptIcon,
  },
  {
    name: 'Angular',
    iconPath: angularIcon,
    filter: 'hue-rotate(232deg) saturate(1.5)'
  },
  {
    name: 'MongoDB',
    iconPath: mongoIcon,
    filter: 'hue-rotate(101deg) brightness(0.5) saturate(4.5)'
  },
  {
    name: 'Node.js',
    iconPath: nodeJsIcon,
    filter: 'hue-rotate(114deg) saturate(1.5) brightness(0.7)'
  },
  {
    name: 'GraphQL',
    iconPath: gqlIcon,
    filter: 'hue-rotate(272deg)'
  },
]
