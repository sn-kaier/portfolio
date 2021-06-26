export type TechnologyName = 'Vue' | 'TypeScript'

export interface Technology {
  name: TechnologyName
  iconPath: string
}

export const technologies: Array<Technology> = [
  {
    name: 'Vue',
    iconPath: '/vue.svg',
  },
]
