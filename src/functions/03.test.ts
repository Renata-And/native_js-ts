import { addHardSkill, StudentType } from "./03"

let student: StudentType;

beforeEach(() => {
  student = {
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
})

test('new hard skill should be added to student', () => {
  expect(student.skills.hardSkills.length).toBe(3);

  addHardSkill(student, 'React');

  expect(student.skills.hardSkills.length).toBe(4);
  expect(student.skills.hardSkills[3].id).toBeDefined();
  expect(student.skills.hardSkills[3].title).toBe('React');
})