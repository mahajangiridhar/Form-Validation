let cl = console.log;

let myForm = document.getElementById("myForm")
let myPassword = document.getElementById("password")
let selectBatch = document.getElementById("selectBatch")
let tbody = document.getElementById("tbody")
let gender = Array.from(document.querySelectorAll(".gender"))
let checkBoxCondition = document.getElementById("agree")
let skillsFormControl = Array.from(document.querySelectorAll(".skills"))
cl(skillsFormControl)
let data = [];

let flag = true;



function submitForm(event){
	event.preventDefault();
	let fullnameInputControl = document.getElementById("fullname").value;
	let emailInputControl = document.getElementById("email").value;
	let selectBatchVal = selectBatch.value;
	let obj = {
		fullname : fullnameInputControl,
		email : emailInputControl,
		batchVal : selectBatchVal,
		gender : 	addClickGender(),
		agree : termsAndCondition(),
		skills : getSelectedSkills()
	}
	data.push(obj)
	templating(data)
	cl(data)
	myForm.reset();
}

function clickToshow(e){
	if(flag === true){
		myPassword.setAttribute("type", "text")
		flag = false;
	}else{
		myPassword.setAttribute("type", "password")
		flag = true;
	}
}
function templating(ele){
	let result = "";
	ele.forEach((item, i)=>{
		result += `<tr>
		<td>${i + 1}</td>
		<td>${item.fullname}</td>
		<td>${item.email}</td>
		<td>${convertBatchVal(item.batchVal)}</td>
		<td>${item.gender}</td>
		<td>${item.agree}</td>
		<td>${item.skills}</td>
	</tr>`
	})
	tbody.innerHTML = result
}
templating(data)
function convertBatchVal(batchName){
	if(batchName == "B1"){
		return "Batch 1"
	}else if(batchName == "B2"){
		return "Batch 2"
	}else if(batchName == "B3"){
		return "Batch 3"
	}else if(batchName == "B4"){
		return "Batch 4"
	}else if(batchName == "B5"){
		return "Batch 5"
	}
}

function addClickGender(click){
	let val = "";
	gender.forEach(ele=>{
		if(ele.checked === true){
			val = ele.value;
		}
	})
	if(!val){
		alert("please select gender")
		val = null
	}
	return val
}

function termsAndCondition(){
	if(checkBoxCondition.checked){
		return "agree"
	}else{
		return "disagree"
	}
}

function getSelectedSkills(){
	let skillsArr = [];
	skillsFormControl.forEach(ele=>{
		if(ele.checked){
			skillsArr.push(ele.value);
		}
	})
	return skillsArr
}

myForm.addEventListener("submit", submitForm)

