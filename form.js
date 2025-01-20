function clickHandler(){
  const input = document.getElementById("inputId")
  const inputValue = input.value // read the value of the input
  const paragraph = document.getElementById("paragraph")
  if(inputValue.length > 5){
    paragraph.innerHTML = inputValue // add the value of the input to paragraph
  }
}

function upperCaseHandler(){
  const input = document.getElementById("inputId")
  var pattern = /^[\w&.\-]+$/   //Regex
  // input.value = input.value.toUpperCase() // read the value of the input
  if(input.value.match(pattern)){
  input.value = input.value // read the value of the input
  }else{
    input.value = input.value.substring(0,input.value.length-1) // to avoid write special characters
    paragraph.innerHTML = "Special Characters is not allowed"
  }
  
}