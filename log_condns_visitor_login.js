
//if else loop, and operators &&, ||, !

let visitor = prompt("enter your name");

if (visitor ==="Admin") {
  let password=prompt("password ")
  if (password==="TheMaster"){alert("welcome")}
  else if (password === null || password === '') {
      alert("cancelled");
  }
  else {alert("wrong password")}
}
else if (visitor === null || visitor === '') {
  alert("cancelled")
}
else {alert ("I don't know you")}
