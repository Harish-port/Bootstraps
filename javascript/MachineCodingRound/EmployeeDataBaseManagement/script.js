(async function () {
  const employeeData = await fetch("./data.json");
  const response = await employeeData.json();
  let employees = response;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];
  const displayEmployeeList = document.getElementById("render-employee-list");
  displayEmployeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
    }
    renderEmployeeList();
    renderEmployeeInformation();
  });

  const renderEmployeeList = () => {
    displayEmployeeList.innerHTML = "";
    employees.forEach((employee) => {
      const li = document.createElement("li");
      li.classList.add("employee-li-list");
      if (parseInt(selectedEmployeeId, 10) === employee.id) {
        li.classList.add("selected");
        selectedEmployee = employee;
      }
      li.setAttribute("id", employee.id);
      const fullName = `${employee.firstName}  ${employee.lastName}`;
      li.innerHTML = `${fullName}`;
      displayEmployeeList.append(li);
    });
  };
  const renderEmployeeInformation = () => {
    if (selectedEmployeeId) {
      const displayEmployeeInfo = document.querySelector(
        ".employee-information-details"
      );
      displayEmployeeInfo.innerHTML = "";
      const divElement = document.createElement("div");
      const { address, email, contactNumber, firstName, lastName, dob } =
        selectedEmployee;
      const fullName = `${firstName}  ${lastName}`;
      divElement.innerHTML = `<h3>${fullName}</h3>
      <p>${address}</p>
      <p>${email}</p>
      <p>${contactNumber}</p>
      <p>${dob}</p>
      `;
      displayEmployeeInfo.append(divElement);
    }
  };
  renderEmployeeList();
  renderEmployeeInformation();
})();
