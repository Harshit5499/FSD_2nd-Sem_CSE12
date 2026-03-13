let employee=[];
function addEmployee(){
    let name=document.getElementById("name").value;
    let empid=document.getElementById("empid").value;
    let salary=document.getElementById("salary").value;
    let department=document.getElementById("department").value;
    if (name===""|| empid===""|| isNaN(salary)||department===""){
        alert("Please fill all fields properly");
        return;
    }
    let employee={
        name:name,
        id:empid,
        salary:salary,
        department:department
    };
    employees.push(employee);
    alert("Employee Added Successfully!!");
    document.getElementById("name").value;
    document.getElementById("empid").value;
    document.getElementById("salary").value;
    document.getElementById("department").value;
}
    function displayEmployees(){
        
    }

    
