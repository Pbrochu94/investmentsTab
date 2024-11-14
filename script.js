let addRowButton = document.querySelector(".addButton"),
tbody = document.querySelector("tbody");
addRowButton.addEventListener("click", addRow);






function addRow()
{
    let newRow = tbody.insertRow()
    for(let i = 0; i< 9; i++)
    {
        /*create row, cells and elements inside*/
        let newCell = newRow.insertCell(),
        editSymbol = document.createElement("button"),
        newCellButtonWrapper = document.createElement("div"),
        penImage = document.createElement("img"),
        newCellTextWrapper = document.createElement("input");

        /*Set up classes and attributes for inside elements*/
        penImage.setAttribute("src", "img/pen.png");
        editSymbol.setAttribute("class", "editSymbol");
        newCellTextWrapper.setAttribute("type", "text");
        newCellTextWrapper.setAttribute("class", "textCells");

        /*Insert elements*/
        editSymbol.append(penImage);
        newCell.append(newCellButtonWrapper); 
        newCellButtonWrapper.append(newCellTextWrapper);
        newCellButtonWrapper.append(editSymbol);

        /*add event listeners*/
        editSymbol.addEventListener("click", editButtonClick)

    }
}

function editButtonClick(event)
{

}