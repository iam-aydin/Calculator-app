// Initialize variables
let isPercentageMode = false;

// Function to insert a number into the input field
function insert(symbolOrNum) {

  // Append the symbol or number to the input field
  document.form.textview.value += symbolOrNum;
}


// Function to evaluate the expression in the input field
function equal() {
  // First, convert "×" to "*" and "÷" to "/" in the input field
  let correctedInput = document.form.textview.value.replace(/×/g, '*').replace(/÷/g, '/');
  
  try {
    // Attempt to evaluate the corrected expression
    let result = eval(correctedInput);
    // If the evaluation is successful, update the input field with the result
    document.form.textview.value = result;
  } catch (error) {
  }
}


// Function to clear the input field
function clean() {
  document.form.textview.value = "";
}

// Function to remove the last character from the input field
function backspace() {
  document.form.textview.value = document.form.textview.value.slice(0, -1);
}



function percentageOperation() {
    // Check if there's a current number in the input fielda
    if (document.form.textview.value!== "") {
      // Find the last number in the input field, including decimals
      const lastNumberMatch = document.form.textview.value.match(/([\d\.]+)(?=\D*$)/);
      if (lastNumberMatch) {
        let lastNumber = lastNumberMatch[1];
        // Divide the last number by 100
        lastNumber = parseFloat(lastNumber) / 100;
        // Directly convert the number to a string without specifying decimal places to avoid extra zeros
        const formattedDecimalNum = lastNumber.toString();
        // Replace the last number in the input field with its new value
        document.form.textview.value = document.form.textview.value.replace(/([\d\.]+)(?=\D*$)/, formattedDecimalNum);
      }
    }
  }
  