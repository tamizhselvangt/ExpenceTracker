const addBtn = document.querySelector(".add-amount");
const type = document.querySelector("#type");
const description = document.querySelector("#description");
const amount = document.querySelector("#amount");

//Table data
const tableBody = document.querySelector("#expenses-table");

addBtn.addEventListener("click", function (e) {
  const trow = document.createElement("tr");

  //td !
  const td1 = document.createElement("td");
  td1.classList.add("tdata");
  td1.textContent = type.value;
  trow.appendChild(td1);

  //td2
  const td2 = document.createElement("td");
  td2.textContent = description.value;
  td2.classList.add("tdata");
  trow.appendChild(td2);

  //td3
  const td3 = document.createElement("td");
  td3.textContent = amount.value;
  td3.classList.add("tdata");
  trow.appendChild(td3);

  //td4
  const td4 = document.createElement("td");
  td4.textContent = "Delete";
  td4.classList.add("tdata");
  td4.classList.add("delete");
  trow.appendChild(td4);

  tableBody.appendChild(trow);

  //Delete Button
  const deleteBtn = document.querySelector(".delete");

  td4.addEventListener("click", (e) => {
    e.target.parentNode.remove();
    console.log("Delete");
  });
});

