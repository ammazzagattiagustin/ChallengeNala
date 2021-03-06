export const cornershopMapper = (arrData) => ({
  users: arrData.map((obj) => ({
    name: obj.Nome,
    CPF: obj.CPF,
    ID: obj.ID,
    CPFManager: obj["CPF Manager"],
    managerName: obj.Manager,
    email: obj["e-mail"],
    startingDate: obj["Starting Date"],
    birthDate: obj["Birth Date"],
    companyArea: {
      country: obj.Country,
      city: obj.CIty,
      division: obj.Division,
      area: obj.Area,
      subarea: obj.Subarea,
      costCenter: obj["Cost Center"],
      position: obj["Cargo Ingles"],
      herarchyLevel: "",
    },
    taxes: {
      healthInsurance: obj["Health Insurance"],
      mealAllowance: obj["Meal Allowance"],
      dentalInsurance: obj["Dental Insurance"],
      lifeInsurance: obj["Life Insurance"],
      accrued: obj.Accrued,
      value: obj.Taxes,
    },
    salary: {
      grossSalary: obj["Gross Salary"],
      salaryPayment: obj["Salario Pago em Folha"],
      CTCMonth: obj["CTC Month"],
      flatCTC: obj["Flat CTC"],
      FlatVsMonth: obj["Flat vs Month CTC"],
    },
    company: {
      id: "CORNERSHOP",
      name: "Cornershop",
    },
    leaf: obj.Folha,
    typeOfContract: obj["Type of Contract"],
  })),
});
