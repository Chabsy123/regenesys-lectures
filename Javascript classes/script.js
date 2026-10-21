let stock = [];
let sales = [];

function addStock() {
    let name = document.getElementById("stockName").value;
    let price = document.getElementById("costPrice").value;
    let sellPrice = document.getElementById("sellingPrice").value;
    let qty = document.getElementById("quantity").value;

    stock.push({
        name,
        price,
        sellPrice,
        qty
    });

    renderStock();
    updateDropdown();
}

// Rebuilds the stock table from the current stock array.
function renderStock() {
    let table = document.getElementById("stockTable");
    table.innerHTML = '';

    stock.forEach((item, index) => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.sellPrice}</td>
                <td>${item.qty}</td>
                <td>
                    <button onclick="deleteStock(${index})">Delete</button>
                </td>
            </tr>
            `
    })
}

// Keeps the sale-item dropdown in sync with the current stock.
function updateDropdown() {
    let dropdown = document.getElementById("saleItem");
    dropdown.innerHTML = "";

    stock.forEach((item, index) => {
        dropdown.innerHTML += `<option value="${index}">${item.name}</option>`;
    });
}

function deleteStock(index) {
    // splice removes the stock item at this index and shifts later items left.
    // Unlike splice, slice returns a copy and does not change the original array.
    stock.splice(index, 1);
    renderStock();
    updateDropdown();
}