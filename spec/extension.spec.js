import CohortManager from '../src/CohortManager.js'
import Student from '../src/Student.js'
describe('Test core criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should find student', function () {
    cohortManager.addCohort('New cohort')
    const newStudent = new Student(
      1,
      'Kristian',
      'Verduin',
      'kristianverduin',
      'kristian@mail.com'
    )
    cohortManager.addStudent('New cohort', newStudent)
    expect(cohortManager.searchStudent(1)).toEqual(newStudent)
  })

  it('Should find student by name', function () {
    cohortManager.addCohort('New cohort')
    const newStudent = new Student(
      1,
      'Kristian',
      'Verduin',
      'kristianverduin',
      'kristian@mail.com'
    )
    cohortManager.addStudent('New cohort', newStudent)
    expect(cohortManager.searchStudentByName('Kristian', 'Verduin')).toEqual(
      newStudent
    )
  })
})
