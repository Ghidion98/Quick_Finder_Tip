let amountBill = document.getElementById('tip');
let amountTip = document.getElementById('tipPercent');
let amountTotal = document.getElementById('submit');
let result = document.getElementById('result');
let tipAm = document.getElementById('tipAm');
let reset = document.getElementById('reset');
let resetBtn = document.getElementById('resetButton');

amountTotal.addEventListener('click', function() {
      billValue = parseFloat(amountBill.value);
      tipPercentValue = parseFloat(amountTip.value);
      
      if(isNaN(billValue) || isNaN(tipPercentValue)) {
            alert("Please enter valid number.");
            return;
      }
       
        let tipAmount = billValue * (tipPercentValue / 100);
        tipAm.textContent = tipAmount.toFixed(2);

        // Show the result

        result.style.display = "block";
        reset.style.display = "block";
        
});
 // Reset Button

 resetBtn.addEventListener('click', function(){
       amountBill.value = "";
       amountTip.value = "";
       
       tipAm.textContent = "0.00";

       result.style.display = "none";
       reset.style.display = "none";

 });