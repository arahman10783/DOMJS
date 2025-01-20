const programmingLanguages = [
  {
    name: "JavaScript",
    firstPublishDate: "1995",
    lastAddition: "2021"
  },
  {
    name: "Python",
    firstPublishDate: "1991",
    lastAddition: "2021"
  },
  {
    name: "Java",
    firstPublishDate: "1995",
    lastAddition: "2021"
  },
  {
    name: "C++",
    firstPublishDate: "1985",
    lastAddition: "2020"
  },
  {
    name: "Ruby",
    firstPublishDate: "1995",
    lastAddition: "2020"
  },
  {
    name: "PHP",
    firstPublishDate: "1995",
    lastAddition: "2021"
  },
  {
    name: "Swift",
    firstPublishDate: "2014",
    lastAddition: "2021"
  },
  {
    name: "Go",
    firstPublishDate: "2009",
    lastAddition: "2021"
  }
];


const dataTable = document.getElementById("dataTable")

// for(let {name, firstPublishDate, lastAddition} of programmingLanguages){
//   dataTable.innerHTML += `
//   <tr>
//   <td>${name}</td>
//   <td>${firstPublishDate}</td>
//   <td>${lastAddition}</td>

//   </tr>
//   `
// }

programmingLanguages.forEach(({name, firstPublishDate, lastAddition}) => {
  dataTable.innerHTML += `
  <tr>
  <td>${name}</td>
  <td>${firstPublishDate}</td>
  <td>${lastAddition}</td>

  </tr>
  `
})

const tableRows = dataTable.getElementsByTagName("tr")

for (let tr of tableRows){
  // tr.getElementsByTagName("td")[0].style.color = "blue"
  tr.getElementsByTagName("td")[0].className = "langName"
}

