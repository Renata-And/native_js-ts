type AddressType = {
  country: string
  city: string
  street: string
  number: number
}

type HardSkillType = {
  id: number
  title: string
}

type SoftSkillType = {
  id: number
  title: string
}

type SkillType = {
  softSkills: SoftSkillType[]
  hardSkills: HardSkillType[]
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  skills: SkillType
}

const student: StudentType = {
  id: 1,
  name: 'Renata',
  age: 33,
  isActive: true,
  address: {
    country: 'Vietnam',
    city: 'Nha trang',
    street: 'Nguen',
    number: 85
  },
  skills: {
    softSkills: [{ id: 1, title: 'communicate' }, { id: 2, title: 'friendly' }],
    hardSkills: [{ id: 3, title: 'HTML' }, { id: 4, title: 'CSS' }, { id: 5, title: 'JS' }]
  }
}

export const addHardSkill = (student: StudentType, skill: string) => {
  student.skills.hardSkills.push({ id: 5, title: skill })
}