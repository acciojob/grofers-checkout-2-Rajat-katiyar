//your code here
function calculateTotalPrice() {  
    // Get all price cells  
    const priceCells = document.querySelectorAll('td[data-ns-test="prices"]');  
    let total = 0;  

    // Sum up prices  
    priceCells.forEach(cell => {  
        total += parseFloat(cell.textContent); // Convert cell text to float and add to total  
    });  

    // Create a new row to display the total  
    const tableBody = document.querySelector('#groceryTable tbody');  
    const totalRow = document.createElement('tr');  
    const totalCell = document.createElement('td');  
    
    // Create an empty cell for the item name  
    const emptyCell = document.createElement('td');  
    emptyCell.textContent = 'Total'; // Optional: Display "Total" in the first cell  
    totalRow.appendChild(emptyCell);  
    
    // Set the total price cell  
    totalCell.textContent = total.toFixed(2); // Format to two decimal places  
    totalCell.setAttribute('data-ns-test', 'grandTotal'); // Add data attribute for testing  
    totalRow.appendChild(totalCell);  

    // Append the total row to the table body  
    tableBody.appendChild(totalRow);  
}  

// Call the function to calculate and display the total price  
calculateTotalPrice();