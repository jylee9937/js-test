import _ from 'lodash' //From `node_modules`!
import getType from './getType' //getType.js // DEFAULT 통로
import{ random } from './getRandom' //getRandom.js //NAMEED 통로

import { students } from './practiceExport'
import student from './practiceExport'

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
console.log(random(), random())
student(students)