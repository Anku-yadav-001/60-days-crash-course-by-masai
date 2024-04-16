let form = document.getElementById('form');
let name = document.getElementById("name");
let employeeID = document.getElementById("employeeID");
let department = document.getElementById("department");
let experience = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let allData = [];
form.addEventListener("submit", function(e){
    e.preventDefault();
    let obj = {};
    obj.name = name.value;
    obj.employeeID = employeeID.value;
    obj.department = department.value;
    obj.email = email.value;
    obj.mobile = mobile.value;
    obj.experience = experience.value;
    allData.push(obj);
    tbody.innerHTML = ""; 
    console.log(allData);

    allData.forEach((ele, index) => {
        let row = document.createElement("tr");
        let name1 = document.createElement("td");
        let employeeID1 = document.createElement("td");
        let department1 = document.createElement("td");
        let experience1 = document.createElement("td");
        let email1 = document.createElement("td");
        let mobile1 = document.createElement("td");
        let role1 = document.createElement("td");
        let deleteBtn = document.createElement("button");

        name1.innerText = ele.name;
        employeeID1.innerText = ele.employeeID;
        department1.innerText = ele.department;
        experience1.innerText = ele.experience;
        email1.innerText = ele.email;
        mobile1.innerText = ele.mobile;

        if (ele.experience > 5) {
            role1.innerText = "Senior";
        } else if (ele.experience >= 2 && ele.experience <= 5) {
            role1.innerText = "Junior";
        } else if (ele.experience <= 1) {
            role1.innerText = "Fresher";
        }

        
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            tbody.removeChild(row);
            
            allData.splice(index, 1);

            localStorage.setItem("data", JSON.stringify(allData));
        });

        row.append(name1, employeeID1, department1, experience1, email1, mobile1, role1, deleteBtn);
        tbody.append(row);
        
        let rowDataString = JSON.stringify({
            name: ele.name,
            employeeID: ele.employeeID,
            department: ele.department,
            experience: ele.experience,
            email: ele.email,
            mobile: ele.mobile,
            role: role1.innerText
        });
        localStorage.setItem("data", rowDataString);
    });
});
