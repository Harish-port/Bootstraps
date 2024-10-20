(async function () {
  const employeeData = await fetch("./data.json");
  const response = await employeeData.json();
  let employees = response;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];
  const displayEmployeeList = document.getElementById("render-employee-list");
  const addEmployeeDetails = document.querySelector(".add-employee");
  const editEmployeeDetails = document.querySelector(".editEmployee");
  const createEmployeeModal = document.querySelector(".add-employee-modal");
  const formSubmitData = document.querySelector(".add-employee-create");
  const modalHeaderText = document.querySelector(".form-heading");
  const displayEmployeeInfo = document.querySelector(
    ".employee-information-details"
  );
  displayEmployeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployeeList();
      renderEmployeeInformation();
    }

    if (e.target.tagName === "SPAN") {
      employees = employees.filter(
        (employee) => String(employee.id) !== e.target.parentNode.id
      );
      if (String(selectedEmployeeId) === e.target.parentNode.id) {
        selectedEmployeeId = employees[0]?.id || -1;
        selectedEmployee = employees[0] || {};
      }
      renderEmployeeList();
      renderEmployeeInformation();
    }
  });

  const populateSelectedEmployeeToForm = () => {
    document.getElementById("firstName").value = selectedEmployee.firstName;
    document.getElementById("lastName").value = selectedEmployee.lastName;
    document.getElementById("address").value = selectedEmployee.address;
    document.getElementById("email").value = selectedEmployee.email;
    document.getElementById("contactNumber").value =
      selectedEmployee.contactNumber;
    document.getElementById("dob").value = selectedEmployee.dob;
    document.getElementById("salary").value = selectedEmployee.salary;
  };
  editEmployeeDetails.addEventListener("click", () => {
    createEmployeeModal.style.display = "flex";
    modalHeaderText.innerHTML = "Edit Employee";
    populateSelectedEmployeeToForm();
  });
  const addEmployee = () => {
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
  };
  const editEmployee = () => {
    console.log("tirfffer");
    
    const formData = new FormData(formSubmitData);
    const values = [...formData.entries()];
    let updatedEmployee = {};
    values.forEach((val) => {
      updatedEmployee[val[0]] = val[1];
    });
    const employeeIdIndex = employees.findIndex(employee =>
      parseInt(employee.id) === parseInt(selectedEmployeeId)
    );
    if (employeeIdIndex !== -1) {
      Object.assign(employees[employeeIdIndex], updatedEmployee);
      renderEmployeeList();
      renderEmployeeInformation();
      createEmployeeModal.style.display = "none";
    }
  };
  formSubmitData.addEventListener("submit", (e) => {
    e.preventDefault();
    modalHeaderText.textContent.includes("Add")
      ? addEmployee()
      : editEmployee();
  });
  addEmployeeDetails.addEventListener("click", () => {
    formSubmitData.reset();
    createEmployeeModal.style.display = "flex";
    modalHeaderText.innerHTML = "Add a new Employee";
  });
  createEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "add-employee-modal") {
      createEmployeeModal.style.display = "none";
    }
  });

  const renderEmployeeList = () => {
    if (selectedEmployeeId === -1) {
      displayEmployeeList.innerHTML = "";
      return;
    }
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
      li.innerHTML = `${fullName} <span class="employeeDelete">X</span>`;
      displayEmployeeList.append(li);
    });
  };

  const renderEmployeeInformation = () => {
    if (selectedEmployeeId === -1) {
      displayEmployeeInfo.innerHTML = "";
      return;
    }
    if (selectedEmployeeId) {
      displayEmployeeInfo.innerHTML = "";
      const divElement = document.createElement("div");
      divElement.classList.add("employe-info");
      const { address, email, contactNumber, firstName, lastName, dob } =
        selectedEmployee;
      const fullName = `${firstName}  ${lastName}`;
      divElement.innerHTML = `<div><h3>${fullName}</h3>
      <p>${address}</p>
      <p>${email}</p>
      <p>${contactNumber}</p>
      <p>${dob}</p></div> 
      `;
      displayEmployeeInfo.append(divElement);
    }
  };
  renderEmployeeList();
  renderEmployeeInformation();
})();
