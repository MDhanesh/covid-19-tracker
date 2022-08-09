var div = document.createElement("div");
div.style.textAlign = "center";
var input = document.createElement("input");
input.setAttribute("type", "search");
input.setAttribute("id", "country");
input.setAttribute("class", "input rounded m-2");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary rounded");
button.innerHTML = "search";
button.addEventListener("click", foo);
let active = document.createElement("div");
active.setAttribute("id", "active");
div.append(input, button, active);
document.body.append(div);
async function foo() {
  let res = document.getElementById("country").value;
  let url = `https://api.covid19api.com/dayone/country/${res}`;
  let result = await fetch(url);
  let result1 = await result.json();
  //console.log(result1);
  let index = result1.length - 1;
  //console.log(index);
  //console.log(result1[index].Active);
  active.innerHTML = `Total Active cases:${result1[index].Active}
  <br>Total Death cases:${result1[index].Deaths}<br>
  Total Recovered cases:${result1[index].Recovered}`;
}
