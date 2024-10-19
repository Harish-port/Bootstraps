(async function () {
  const employeeData = await fetch("./data.json");
  const response = await employeeData.json();
  let employees = response;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];
  const displayEmployeeList = document.getElementById("render-employee-list");
  const addEmployeeDetails = document.querySelector(".add-employee");
  const createEmployeeModal = document.querySelector(".add-employee-modal");
  const formSubmitData = document.querySelector(".add-employee-create");
  displayEmployeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
    }
    renderEmployeeList();
    renderEmployeeInformation();
  });
  formSubmitData.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formSubmitData);
    const values = [...formData.entries()];
    let employeeData = {};
    values.forEach((val) => {
      employeeData[val[0]] = val[1];
    });
    employeeData.id = employees[employees.length - 1].id + 1;
    employees.push(employeeData);
    renderEmployeeList();
    formSubmitData.reset();
    createEmployeeModal.style.display = "none";
  });
  addEmployeeDetails.addEventListener("click", () => {
    createEmployeeModal.style.display = "flex";
  });
  createEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "add-employee-modal") {
      createEmployeeModal.style.display = "none";
    }
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
      console.log(selectedEmployee, "selectedEmployee");

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
