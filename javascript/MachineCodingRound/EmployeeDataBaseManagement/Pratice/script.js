// (async function () {
//     const data = await fetch("./data.json");
//     const res = await data.json();
//     console.log(res, "k<<");
//     let employees = res;
//     let selectedEmployeeId = employees[0].id;
//     let selectedEmploye = employees[0];
//     const employeeList = document.querySelector(".employees_names--list");
//     const employeeInfo = document.querySelector(".employees_single--list");
//     employeeList.addEventListener("click", (e) => {
//         if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
//             selectedEmployeeId = e.target.id;
//             renderEmployees();
//             renderSingleEmployee();
//         }
//     })
//     const renderEmployees = () => {
//         employeeList.innerHTML = '';
//         employees.forEach(emp => {
//             const employee = document.createElement("span");
//             employee.classList.add('employees_names--item');
//             if (parseInt(selectedEmployeeId, 10) === emp.id) {
//                 employee.classList.add('selected');
//                 selectedEmploye = emp;
//             }
//             employee.setAttribute("id", emp.id)
//             employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">X</i>`;
//             employeeList.append(employee);
//         });
//     }
//     renderEmployees();
//     const renderSingleEmployee = () => { }
// })();

(async function () {
    const data = await fetch("./data.json");
    const res = await data.json();
    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];
    const employeeList = document.querySelector(".employees_names--list");
    const employeeSingleInfo = document.querySelector(".employees_single--list");
    const createEmployee = document.querySelector(".createEmployee");
    const addEmployeeModel = document.querySelector(".addEmployee");
    const addEmployeeForm = document.querySelector(".employees-form");

    createEmployee.addEventListener('click', (e) => {
        addEmployeeModel.style.display = "flex";
    });

    addEmployeeModel.addEventListener('click', (e) => {
        if (e.target.className === "addEmployee") {
            addEmployeeModel.style.display = "none";
        }
    });

    addEmployeeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(addEmployeeForm);
        const values = [...formData.entries()];
        let empData = {};
        values.forEach((val) => {
            empData[val[0]] = val[1];
        });
        empData.id = employees[employees.length - 1].id + 1;
        empData.imageUrl = empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png"
        employees.push(empData);
        renderEmployess();
        addEmployeeForm.reset();
        addEmployeeModel.style.display = "none";

    })
    employeeList.addEventListener('click', (e) => {
        if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
            selectedEmployeeId = e.target.id;
            renderEmployess();
            renderSingleEmployee();
        }
        if (e.target.tagName === "I") {
            employees = employees.filter(emp =>
                String(emp.id) !== e.target.parentNode.id
            )
            if (String(selectedEmployeeId) === e.target.parentNode.id) {
                selectedEmployee = employees[0] || {}
                selectedEmployeeId = employees[0].id || -1
                renderSingleEmployee();
            }
            renderEmployess();
        }
    })
    const renderEmployess = () => {
        employeeList.innerHTML = '';
        employees.forEach(emp => {
            let employee = document.createElement("span");
            employee.classList.add("employees_names--item");
            if (parseInt(selectedEmployeeId, 10) === emp.id) {
                employee.classList.add("selected")
                selectedEmployee = emp;
            };
            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">X</i>`;
            employeeList.append(employee);
        });
    };
    renderEmployess();
    const renderSingleEmployee = () => {
        employeeSingleInfo.innerHTML = `
        <div class="employee-list-wrapper">
        <img src="${selectedEmployee.imageUrl}"/>
        <span>Name: ${selectedEmployee.firstName} ${selectedEmployee.lastName}</span>
        <span>Age: ${selectedEmployee.age}</span>
        <span>DOB: ${selectedEmployee.dob}</span>
        <span>Address: ${selectedEmployee.address}</span>
        <span>Salary: ${selectedEmployee.salary}</span>
        <span>Email: ${selectedEmployee.email}</span>
        <span>Contact Number: ${selectedEmployee.contactNumber}</span>
        <div>
        `
    }
    renderSingleEmployee();
})();
