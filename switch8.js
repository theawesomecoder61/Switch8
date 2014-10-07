/*

unminifed version of Switch8

*/

var Switch8 = function(options) {
  // variables
  var el = document.querySelector(options.elem);

  // adding .switch8, if .switch8 exists, say something
  if(!el.classList.contains("switch8")) {
    el.classList.add("switch8");
  } else {
    console.log("Switch already is Switch8'd! Ya dun goofed!");
  }
  
  // checked
  if(options.checked) {
    el.setAttribute("checked", "checked");
  }
  
  // disabled
  if(options.disabled) {
    el.setAttribute("disabled", "disabled");
  }
  
  // checked color
  if(options.checkedColor !== null || options.checkedColor !== "") {
    el.style.backgroundImage = options.checkedColor;
  }
}
