const subject = (code, name, internal, external, grade) => ({ code, name, internal, external, total: internal + external, grade })
const semester = (subjects, cgpa) => {
  const total = subjects.reduce((sum, item) => sum + item.total, 0)
  return { subjects, total, percentage: Number(((total / (subjects.length * 100)) * 100).toFixed(1)), cgpa }
}

export const seedStudents = [
  {
    registerNumber: '411625243044', name: 'Student User', dob: '19/12/2007',
    department: 'Artificial Intelligence and Data Science', year: '2nd Year',
    semester1: {
      subjects: [
        { semester: '1SEM', code: '24TA101', name: 'Heritage of Tamils', credits: 1, grade: 'S', result: 'P' },
        { semester: '1SEM', code: '24BS151', name: 'Physics and Chemistry Laboratory', credits: 2, grade: 'S', result: 'P' },
        { semester: '1SEM', code: '24CH101', name: 'Engineering Chemistry', credits: 3, grade: 'S', result: 'P' },
        { semester: '1SEM', code: '24PH101', name: 'Engineering Physics', credits: 3, grade: 'A', result: 'P' },
        { semester: '1SEM', code: '24AC101', name: 'Indian Constitution and Freedom Movement', credits: 0, grade: 'C', result: 'P' },
        { semester: '1SEM', code: '24EN101', name: 'Technical English - I', credits: 3, grade: 'A+', result: 'P' },
        { semester: '1SEM', code: '24MA102', name: 'Matrices and Differential Equations', credits: 4, grade: 'A', result: 'P' },
        { semester: '1SEM', code: '24CS192', name: 'Design for Developers', credits: 4, grade: 'A+', result: 'P' },
        { semester: '1SEM', code: '24CS193', name: 'Logic Building using Java', credits: 4, grade: 'A+', result: 'P' },
      ],
      total: null,
      percentage: null,
      cgpa: null,
    },
    semester2: {
      subjects: [
        { semester: '2SEM', code: '24EN291', name: 'Technical English - II', credits: 3, grade: 'A+', result: 'P' },
        { semester: '2SEM', code: '24TA201', name: 'Tamils and Technology', credits: 1, grade: 'A', result: 'P' },
        { semester: '2SEM', code: '24MA292', name: 'Probability Distributions and Statistics', credits: 4, grade: 'A', result: 'P' },
        { semester: '2SEM', code: '24EE293', name: 'Basics of Electrical and Electronics for Computer Engineers', credits: 3, grade: 'A', result: 'P' },
        { semester: '2SEM', code: '24CS292', name: 'Web Technology', credits: 4, grade: 'A', result: 'P' },
        { semester: '2SEM', code: '24CS293', name: 'Problem Solving using Python for Computer Engineers', credits: 4, grade: 'A', result: 'P' },
        { semester: '2SEM', code: '24CS294', name: 'Object Oriented Programming using Java', credits: 4, grade: 'A', result: 'P' },
      ],
      total: null,
      percentage: null,
      cgpa: null,
    },
  },
  {
    registerNumber: '23AD001', name: 'Saranya D', dob: '15-08-2006',
    department: 'Artificial Intelligence and Data Science', year: '2nd Year',
    semester1: semester([subject('MA101', 'Mathematics', 25, 70, 'O'), subject('CS101', 'Programming', 23, 65, 'A+'), subject('PH101', 'Engineering Physics', 22, 63, 'A')], 9.1),
    semester2: semester([subject('MA201', 'Probability and Statistics', 24, 68, 'A+'), subject('CS201', 'Web Technology', 23, 66, 'A+')], 8.9),
  },
  {
    registerNumber: '23AD002', name: 'Arun Kumar', dob: '02-11-2006',
    department: 'Computer Science and Engineering', year: '2nd Year',
    semester1: semester([subject('MA101', 'Mathematics', 21, 61, 'A'), subject('CS101', 'Programming', 22, 64, 'A'), subject('PH101', 'Engineering Physics', 20, 57, 'B+')], 8.2),
    semester2: semester([subject('MA201', 'Probability and Statistics', 22, 63, 'A'), subject('CS201', 'Web Technology', 24, 67, 'A+')], 8.6),
  },
  {
    registerNumber: '23EC014', name: 'Meera S', dob: '27-03-2006',
    department: 'Electronics and Communication Engineering', year: '2nd Year',
    semester1: semester([subject('MA101', 'Mathematics', 24, 67, 'A+'), subject('EC101', 'Circuit Analysis', 25, 71, 'O'), subject('PH101', 'Engineering Physics', 23, 65, 'A+')], 9.0),
    semester2: semester([subject('EC201', 'Electronic Devices', 23, 68, 'A+'), subject('MA201', 'Probability and Statistics', 24, 69, 'O')], 9.2),
  },
]

export const getResultStatus = (term) => {
  if (!term?.subjects?.length) return 'PENDING'
  if (term.subjects.some((item) => item.result)) {
    return term.subjects.every((item) => item.result?.toUpperCase() === 'P') ? 'PASS' : 'FAIL'
  }
  return term.subjects.every((item) => Number(item.total) >= 50) ? 'PASS' : 'FAIL'
}

export const calculateSemester = (subjects, cgpa = 0) => {
  const normalized = subjects.map((item) => {
    const hasMarks = item.internal != null || item.external != null || item.total != null
    return hasMarks ? { ...item, total: Number(item.total ?? Number(item.internal || 0) + Number(item.external || 0)) } : item
  })
  if (!normalized.some((item) => item.total != null)) {
    return { subjects: normalized, total: null, percentage: null, cgpa: Number(cgpa) || null }
  }
  const total = normalized.reduce((sum, item) => sum + item.total, 0)
  const maximum = normalized.length * 100
  return { subjects: normalized, total, percentage: maximum ? Number(((total / maximum) * 100).toFixed(1)) : 0, cgpa: Number(cgpa) || 0 }
}
