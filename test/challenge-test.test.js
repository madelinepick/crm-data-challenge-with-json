'use strict';
const expect = require("chai").expect
const lib = require("../src/challenge")
const data = require("../data/crm.json")

describe("employeesOfCompanies", () => {

  it("returns an array of companies and their employees", () => {
    // TODO: write this test
    let output = lib.employeesOfCompanies(data);
   // expect(output).to.deep.equal()
    expect(output[4]).to.deep.equal(
            {
        name: "Schmidt-Rolfson",
        employees: [
          {
            id: 3,
            first_name: "Elyse",
            last_name: "Jensen",
            title: "Chief Communications Consultant"
          },
          {
            id: 19,
            first_name: "Jaren",
            last_name: "Easter",
            title: "District Communications Director"
          },
        ]
      }
    )
  })

})

describe("allEmployments", () => {

  it("returns an array of employments with the person and company info", () => {
    // TODO: write this test
    let output = lib.allEmployments(data);
    expect(output[0]).to.deep.equal(
      {
        company_id: 4,
        company_name: "Schmidt-Rolfson",
        person_id: 3,
        person_first_name: "Elyse",
        person_last_name: "Jensen",
        title: "Chief Communications Consultant"
      }
    )
  })

})

describe("peopleWithoutEmployments", () => {

  it("returns an array of people without employments", () => {
    // TODO: write this test
    let output = lib.peopleWithoutEmployments(data);
    expect(output[0]).to.deep.equal(
      {
        "id": 1,
        "first_name": "Whitney",
        "last_name": "Domenic"
      }
    )
  })

})
