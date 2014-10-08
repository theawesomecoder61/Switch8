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

  // colors
  if(el.checked && options.checkedColor !== null) {
    el.style.background = options.checkedColor;
  } else {
    el.style.background = "#e5e5e5";
  }

  // toggle colors
  el.onclick = function() {
    // checked
    if(el.checked && options.checkedColor !== null) {
      el.style.background = options.checkedColor;
    } else {
      if(!el.checked || options.checkedColor === null) {
        el.style.background = "#e5e5e5";
      }
    }
    // unchecked
    if(!el.checked && options.uncheckedColor !== null) {
      el.style.background = options.uncheckedColor;
    } else {
      if(!el.checked || options.uncheckedColor === null) {
      	el.style.background = "#4cd964";
      }
    }
  }

}
