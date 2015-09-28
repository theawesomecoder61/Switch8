  /*
  
  Switch8 version 3.0
  
  (C) 2014-2015 theawesomecoder61
  
  What's new?
  - a new switch size: mini
  
  */
  
var Switch8 = function(options) {
  // variables
  var el = document.querySelector(options.elem);

  // adding .switch8, if .switch8 exists say something
  if(!el.classList.contains("switch8")) {
    el.classList.add("switch8");
  } else {
    console.log(options.elem + " is already Switch8'd! Ya dun goofed!");
  }

  // mini
  if(options.mini) {
    el.classList.add("mini");
  }
  
  // make sure the element is a checkbox, if not make it one
  if(el.getAttribute("type") !== "checkbox") {
    el.setAttribute("type", "checkbox");
  }
  
  // checked?
  if(options.checked) {
    el.setAttribute("checked", "checked");
  }

  // disabled?
  if(options.disabled) {
    el.setAttribute("disabled", "disabled");
  }

  // load colors
  if(!options.htmlAttr || options.htmlAttr == "no" || options.htmlAttr === null) {
    if(el.checked && options.checkedColor !== "") {
      el.style.background = options.checkedColor;
    } else {
      if(!el.checked || options.checkedColor == "") {
        el.style.background = "#e5e5e5";
      }
    }
    // unchecked
    if(!el.checked && options.uncheckedColor !== "") {
      el.style.background = options.uncheckedColor;
    } else {
      if(options.checkedColor !== "" || options.uncheckedColor == "") {
        el.style.background = "#4cd964";
      }
      if(options.checkedColor !== "" && options.uncheckedColor !== "") {
        el.style.background = options.checkedColor;
      }
    }
  } else {
    // checked with html
    if(el.checked && el.getAttribute("data-checkedColor") !== "") {
      el.style.background = el.getAttribute("data-checkedColor");
    } else {
      if(!el.checked || el.getAttribute("data-checkedColor") == "") {
        el.style.background = "#e5e5e5";
      }
    }
    // unchecked
    if(!el.checked && el.getAttribute("data-uncheckedColor") !== "") {
      el.style.background = el.getAttribute("data-uncheckedColor");
    } else {
      if(el.getAttribute("data-checkedColor") !== "" || el.getAttribute("data-uncheckedColor") == "") {
        el.style.background = "#4cd964";
      }
      if(el.getAttribute("data-checkedColor") !== "" && el.getAttribute("data-uncheckedColor") !== "") {
        el.style.background = el.getAttribute("data-checkedColor");
      }
    }
  }

  // toggle colors
  el.onclick = function() {

    if(!options.htmlAttr || options.htmlAttr == "no" || options.htmlAttr === null) {
      // checked,  customized with js
      if(el.checked && options.checkedColor !== "") {
        el.style.background = options.checkedColor;
      } else {
        if(!el.checked || options.checkedColor == "") {
          el.style.background = "#e5e5e5";
        }
      }
      // unchecked,  customized with js
      if(!el.checked && options.uncheckedColor !== "") {
        el.style.background = options.uncheckedColor;
      } else {
        if(options.checkedColor !== "" || options.uncheckedColor == "") {
          el.style.background = "#4cd964";
        }
        if(options.checkedColor !== "" && options.uncheckedColor !== "") {
          el.style.background = options.checkedColor;
        }
      }
    } else {
      // checked,  customized with html
      if(el.checked && el.getAttribute("data-checkedColor") !== "") {
        el.style.background = el.getAttribute("data-checkedColor");
      } else {
        if(!el.checked || el.getAttribute("data-checkedColor") == "") {
          el.style.background = "#e5e5e5";
        }
      }
      // unchecked,  customized with html
      if(!el.checked && el.getAttribute("data-uncheckedColor") !== "") {
        el.style.background = el.getAttribute("data-uncheckedColor");
      } else {
        if(el.getAttribute("data-checkedColor") !== "" || el.getAttribute("data-uncheckedColor") == "") {
          el.style.background = "#4cd964";
        }
        if(el.getAttribute("data-checkedColor") !== "" && el.getAttribute("data-uncheckedColor") !== "") {
          el.style.background = el.getAttribute("data-checkedColor");
        }
      }
    }
  }

}