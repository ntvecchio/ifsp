function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }

    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }

        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 300;
        const caseTotal = getInputvalue('case') * 150;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 2;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }
function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }

    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }

        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 300;
        const caseTotal = getInputvalue('case') * 150;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 2;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }
    function incrementarQuantidade(id) {
        var input = document.getElementById(id);
        var quantidade = parseInt(input.value);
        input.value = quantidade + 1;
     }

     function decrementarQuantidade(id) {
        var input = document.getElementById(id);
        var quantidade = parseInt(input.value);
        if (quantidade > 0) {
           input.value = quantidade - 1;
        }
     }

     function calcularTotal() {
        var qtdMeia = parseInt(document.getElementById('qtdMeia').value);
        var qtdInteira = parseInt(document.getElementById('qtdInteira').value);
        var precoMeia = 20.00;
        var precoInteira = 40.00;
        var total = (qtdMeia * precoMeia) + (qtdInteira * precoInteira);
        document.getElementById('total').innerHTML = 'R$ ' + total.toFixed(2);
        alert("Total calculado: R$ " + total.toFixed(2));
     }
     

     