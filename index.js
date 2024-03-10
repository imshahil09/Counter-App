const countValue = document.querySelector('#counter');
const increment = () =>{
    //Get the value
    let value = parseInt(countValue.innerText);
    // Update the value
    value=value+1;
    // Set the value onTO UI 
    countValue.innerText = value;

}

const decrement = () =>{
    //Get the value
    let value = parseInt(countValue.innerText);
    // Update the value
    value=value-1;
    // Set the value
    countValue.innerText = value;
}
const reset = () =>{
     //Get the value
     let value = parseInt(countValue.innerText);
     // Update the value
     value=0;
     // Set the value
     countValue.innerText = value;
}