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
        let editSymbol = document.createElement("button")
        editSymbol.setAttribute("class", "editSymbol")
        editSymbol.innerText = "Edit"
        let newCellDivWrapper = document.createElement("div")
        newCell.append(newCellDivWrapper)
        newCellDivWrapper.append(editSymbol)
    }
}