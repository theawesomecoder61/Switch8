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

  // load colors
  if(el.getAttribute("data-checkedColor") == "" || el.getAttribute("data-uncheckedColor") == "") {
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

    if(el.getAttribute("data-checkedColor") == "" || el.getAttribute("data-uncheckedColor") == "") {
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
  }

}
