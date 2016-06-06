

// module.exports = function (input) {
//   return [];
// }

exports.employeesOfCompanies = (crm) => {
  var results = [];
  crm.companies.forEach(function(currentValue, index, array){
    // var i = index;
    results[index] = {};
    results[index].name = currentValue.name;
    results[index].employees = [];

  })
  for (var i = 0; i < crm.people.length; i++) {
    if(crm.people[i].employments.length > 0){
      results.forEach(function(currentValue, index, array){
        if(crm.people[i].employments[0].company_id == index){
            results[index].employees.push({
            id : crm.people[i].id,
            first_name : crm.people[i].first_name,
            last_name: crm.people[i].last_name,
            title: crm.people[i].employments[0].title
          })
        }
      })
    }
  }
  return results;
}


exports.allEmployments = (crm) => {
  var results2 = [];
  for (var i = 0; i < crm.people.length; i++) {
    if (crm.people[i].employments.length > 0) {
      for (var j = 0; j < crm.people[i].employments.length; j++) {
        results2.push({
            company_id: crm.people[i].employments[j].company_id,
            company_name: crm.companies[crm.people[i].employments[j].company_id].name,
            person_id: crm.people[i].id,
            person_first_name: crm.people[i].first_name,
            person_last_name: crm.people[i].last_name,
            title: crm.people[i].employments[j].title
        })
      }
    }
  }
  return results2;
}

exports.peopleWithoutEmployments = (crm) => {
  var results3 = [];
  for (var i = 0; i < crm.people.length; i++) {
    if(crm.people[i].employments.length == 0){
      results3.push({
        id: crm.people[i].id,
        first_name: crm.people[i].first_name,
        last_name: crm.people[i].last_name
      })
      console.log(results3);
    }
  }
  return results3;
}
