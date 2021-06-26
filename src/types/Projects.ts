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
    title: 'Freelancer: Frontend at FutureValueGroup',
    subtitle: 'Tool for financial risk analytics',
    technologies: ['Angular', 'TypeScript'],
    detailsShort: `* Migration of a _C# WinForms_ project to _Angular_
* _NgRx_, _Angular Material_ and AmCharts4
* Communication between C# and Angular with _ASP.net_ and _REST_`
  },
  {
    title: 'Freelancer: FullStack at ScaleNc',
    subtitle: 'Platform for NC programs on demand',
    technologies: ['Vue', 'Node.js', 'TypeScript'],
    detailsShort: `* Migrate the _Vue_ frontend from JS to _TypeScript_
* CAD files preview rendering with _AWS serverless_
* Build component library with _storybook_`
  },
  {
    title: 'Full Stack Development: Customer projects',
    subtitle: 'Incedo Services GmbH, Stuttgart',
    technologies: ['Vue', 'Node.js', 'MongoDB'],
    detailsShort: `* Microservices with _Node.js_, _TypeScript_ and _Moleculer_
* Frontend design/implementation with _Vue_ and _Figma_
* _GraphQL_ Endpoint development with _Apollo Server_
* Agile approach with Jira, Confluence, GitLab, _GitLab CI/CD_`
  },
  {
    title: 'App Development and technology transfer',
    subtitle: 'AEB SE, Malmö',
    technologies: ['Angular', 'Node.js', 'GraphQL', 'TypeScript'],
    detailsShort: `* Support of the Swedish team with the entry into _Angular_ & _Node.js_ & _Apollo_ platform of the Stuttgart team
* Development of customer specific web apps with _PrimeNG_
* BPMN process modeling for logistic applications using _Camunda_`
  }
]
