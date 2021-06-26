import { TechnologyName } from './Technologies'

export interface Project {
  title: string
  subtitle: string
  technologies: Array<TechnologyName>
  detailsShort: string
  detailsLong?: string
}

export const myProjects: Array<Project> = [
  {
    subtitle: 'Tool for financial risk analytics',
    title: 'Freelancer: Frontend at FutureValueGroup',
    technologies: ['Angular', 'GraphQL', 'MongoDB', 'Node.js', 'Vue', 'TypeScript'],
    detailsShort: `* Migration of a C# WinForms project to Angular
* NgRx, Angular Material and AmCharts4
* Communication between C# and Angular with ASP.net and REST`
  }
]
