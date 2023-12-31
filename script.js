let myLeads = [];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  ///PUSH THE INPUT VALUE TO THE LEADS ARRAY
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  let inputValue = inputEl.value;
  console.log(inputValue);
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href='${myLeads[i]}' target='_blank'> ${myLeads[i]}</a>
    </li>`;
    console.log(listItems);
    //ALTERNATIVE CODE
    // const listItem = document.createElement("li");
    // listItem.textContent = myLeads[i];
    // ulEl.append(listItem);
  }
  ulEl.innerHTML = listItems;
}
