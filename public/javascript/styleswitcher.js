//wait for page to fully load so it doesnt execute so fast that it doesnt catch the selector
window.onload = setTimeout(waitLoad, 1000);
//enable style selector if javascript is enabled (if it isnt, well this wouldnt work)
function waitLoad(){
  var selector = document.getElementById("selector");
  selector.disabled = false;
}

function imagechange(val){
  if (val == "mebi") {
     document.getElementById("cssbanner").src = "/images/page_deco/banner.png"
     document.getElementById("cssnix_kate").src = "/images/page_deco/nix_kate.png";
  } else if (val == "halloween") {
  document.getElementById("cssbanner").src = "/images/page_deco/halloween/banner.png"
  document.getElementById("cssnix_kate").src = "/images/page_deco/halloween/nix_kate.png";
  }
}

function changeStyle(style, js) {
    if (style == null)
        style = localStorage.getItem("style");
        if (style == null) 
            style = "mebi";
    document.querySelector("link[type='text/css']").setAttribute("href", /styles/ + style + ".css");
    localStorage.setItem("style", style);

    if (js == null)
      js = localStorage.getItem("js");
      if (js == null) 
          js = "mebi";
    document.querySelector("script[type='text/javascript']").setAttribute("src", "/javascript/replace/" + js + ".js");
    localStorage.setItem("js", js);
    imagechange(js);
}

changeStyle();