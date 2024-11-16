// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]
  
//   for (const [country, city] of countries) {
//     console.log(country, city)
//   }
  
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB'],
//   ]
  
//   for (const [first, second, third, fourth ='default'] of fullStack) {
//     console.log(first, second, third, fourth)
//   }

//   const rectangle = {
//     width: 20,
//     height: 10,
//   }
  
//   let { width: w, height: h } = rectangle

//   console.log(w, h);

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }


  const getPersonInfo = (person) => {
    const {firstName:fname, lastName:lname, age, country, job, skills, languages:[l1,l2,l3]} = person;
    console.log(skills.join(", "));
    for (const skill of skills) {console.log(skill+', ')}
    //onsole.log(`${fname} ${lname} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${s1}, ${s2}, ${s3}, ${s4}, ${s5}, ${s6}, ${s7}, ${s8} and ${s9}. He speaks ${l1}, ${l2} and a little bit of ${l3}`);
  }

  getPersonInfo(person);