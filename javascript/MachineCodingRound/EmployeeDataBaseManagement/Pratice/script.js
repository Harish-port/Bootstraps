(async function () {
    const data = await fetch("./data.json");
    const res = await data.json();
    console.log(res, "k<<");
    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmploye = employees[0];
    const employeeList = document.querySelector(".employees_names--list");
    const employeeInfo = document.querySelector(".employees_single--list");
    employeeList.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
            selectedEmployeeId = e.target.id;
            renderEmployees();
            renderSingleEmployee();
        }
    })
    const renderEmployees = () => {
        employeeList.innerHTML = '';
        employees.forEach(emp => {
            const employee = document.createElement("span");
            employee.classList.add('employees_names--item');

            if (parseInt(selectedEmployeeId, 10) === emp.id) {
                employee.classList.add('selected');
                selectedEmploye = emp;
            }
            employee.setAttribute("id", emp.id)
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">X</i>`;
            employeeList.append(employee);

        });
    }
    renderEmployees();
    const renderSingleEmployee = () => { }
})();
