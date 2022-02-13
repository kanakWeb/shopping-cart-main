function updateProductNumber(product, price, isIncress) {

    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value)
    if (isIncress == true) {
        productNumber = productNumber + 1;
    } else if (productNumber > 0) {

        productNumber = productNumber - 1;

    }
    productInput.value = productNumber;

    //update total add price

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate subtotal
    calculateTotal();
}
// input sub toal phone,case 
function getInputValue(product) {
    let productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate total

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const Total = subTotal + tax;

    // console.log(subTotal)

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = Total;


}



//handle phone incress 
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
})

//handle phone drecress

document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false)
})



//handle case incress
document.getElementById('case-plus').addEventListener('click', function() {

    updateProductNumber('case', 59, true);

})

//handle case drecress
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);
})