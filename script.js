let addRowButton = document.querySelector(".addButton")
console.log(addRowButton)
addRowButton.addEventListener("click", addRow)
let tbody = document.querySelector("tbody")





function addRow()
{
    let newRow = tbody.insertRow()
    for(let i = 0; i< 9; i++)
    {
        let newCell = newRow.insertCell()
        let editSymbol = document.createElement("div")
        editSymbol.setAttribute("class", "editSymbol")
        editSymbol.innerText = "Edit"
        newCell.append(editSymbol)
        newCell.addEventListener("mouseover", editIconAppear)
        newCell.addEventListener("mouseout", editIconDisappear)
    }
}

function editIconAppear(event)/*function that change the visibility to visivble of the inside div of the cell*/
{
    let editSymbol = event.target.querySelector(".editSymbol")
    editSymbol.style.visibility = "visible";
}

function editIconDisappear(event)/*function that change the visibility to hidden of the inside div of the cell*/
{
    let editSymbol = event.target.querySelector(".editSymbol")
    editSymbol.style.visibility = "hidden";
}