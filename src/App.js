import React, {useState} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]= useState("");
const[rollno,setRollno]= useState("");
const[branch,setBranch]= useState("");
const[tech,setTechnology]= useState("");
const[status,setStatus]= useState("");

const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{name:sname,
rollno:rollno,
branch:branch,
tech:tech,
sub:status}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="String"
name="sname"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Student Roll.no</b></label>
<input
type="Number"
name="rollno"
onChange={(e)=>{
setRollno(e.target.value);
}}
required/>
<label><b>Branch</b></label>
<input
type="String"
name="branch"
onChange={(e)=>{
setBranch(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="String"
name="tech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>Status</b></label>
<input
type="Boolean"
name="status"
onChange={(e)=>{
setStatus(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;

