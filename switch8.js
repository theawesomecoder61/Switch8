/*

unminifed version of Switch8

*/

var Switch8 = function(options) {
  // variables
  var el = document.querySelector(options.elem);
  
  // loading switch8.css into the page
  var head = document.head, link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "https://raw.githack.com/theawesomecoder61/Switch8/master/switch8.css";
  head.appendChild(link);
  
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
}
