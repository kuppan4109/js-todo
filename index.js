let array = [];
let tname = document.getElementById('name');
let tmail = document.getElementById('email');
let id = document.getElementById('id');
let add = document.getElementById('cu-action');
let table = document.getElementById('table-body');
let currId = null;
let idVal = 1;
add.addEventListener('click', addToArray);
function addToArray() {
    if (currId) {
        array.map(myOb => {
            if (myOb.myID === currId) {
                myOb.tname = document.getElementById('name').value;
                myOb.tmail = document.getElementById('email').value;
            }
            return myOb;
        })
        updateTableValue(null, 'ADD');
    }
    else {
        dispObj = {};
        dispObj.myID = idVal++;
        dispObj.tname = tname.value;
        dispObj.tmail = tmail.value;
        array.push(dispObj);
    }
    buildTable();
}
function resetValue() {
    tname.value = "";
    tmail.value = "";
}
function updateTableValue(myID, text) {
    currId = myID;
    add.innerText = text;
}
function buildTable() {
    let rows = '';
    array.forEach(dispObj => {
        const tr = `<tr>
   <td>${dispObj.myID}</td>
   <td>${dispObj.tname}</td>
   <td>${dispObj.tmail}</td>
   <td><button type='button' onclick='editEntry(${dispObj.myID})' class='btn btn-default'>Edit</button></td>
   <td><button type='button' onclick='entryDelete(${dispObj.myID})' class='btn btn-default'>Delete</button></td>
   </tr>`;
        rows += tr;
    });
    table.innerHTML = rows;
    resetValue();
}
function editEntry(getID) {
    array.forEach(temp => {
        if (temp.myID === getID) {
            document.getElementById('name').value = temp.tname;
            document.getElementById('email').value = temp.tmail;
        }
    });
    updateTableValue(getID, 'UPDATE');
}
function entryDelete(getID) {
    array = array.filter(array => array.myID != getID)
    buildTable();
}





