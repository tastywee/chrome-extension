let myLeads = [];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

inputBtn.addEventListener("click", function () {
  ///PUSH THE INPUT VALUE TO THE LEADS ARRAY
  myLeads.push(inputEl.value);
  inputEl.value = "";

  //SAVE TO LOCAL STORAGE
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();

  console.log( localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  let inputValue = inputEl.value;
  console.log(inputValue);
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a href='${myLeads[i]}' target='_blank'>
          ${myLeads[i]}
        </a>
      </li>`;
    //ALTERNATIVE CODE
    // const listItem = document.createElement("li");
    // listItem.textContent = myLeads[i];
    // ulEl.append(listItem);
  }
  ulEl.innerHTML = listItems;
}
