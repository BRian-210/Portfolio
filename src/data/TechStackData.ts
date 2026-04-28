export interface TechStackData {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design'
  iconName: string
  description: string
  proficiency: 'Core' | 'Advanced' | 'Working knowledge'
}
