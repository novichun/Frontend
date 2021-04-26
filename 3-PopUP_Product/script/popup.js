var modal = document.getElementById("popmodal");
    

    var btn = document.getElementById("popup");
    
 
    var span = document.getElementsByClassName("close")[0];
    

    btn.onclick = function() {
      modal.style.display = "block";
    }
    
 
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    function gridView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
      }
    }

    function increaseCount(a, b) {
      var input = b.previousElementSibling;
      var value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
      document.getElementById("valt").style.color = "#BF2A26";
      document.getElementById("valt").style.backgroundColor = "#F9D8D7";
    }
    
    function decreaseCount(a, b) {
      var input = b.nextElementSibling;
      var value = parseInt(input.value, 10);
      if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
        
      }
      if (value == 1) {
        document.getElementById("valt").style.color = "#898989";
        document.getElementById("valt").style.backgroundColor = "#EAEAEA";
      }
    }

  
    var btn = document.getElementsById('show')[0];
var pc1 = document.getElementById('pc1');

btn.addEventListener('click', function() {
  pc1.classList.toggle('hide');
});


function showhide() 
{  
    var div = document.getElementById("kinyilo");  
    
    
    if (div.style.display !== "block") {  
      document.getElementById('lenyilo').style.transform = "rotate(180deg)";
      document.getElementById("lenyilo").style.transition = "all 1s";
        div.style.display = "block";  
    }  
    else {  
      document.getElementById('lenyilo').style.transform = "rotate(0deg)";
        div.style.display = "none";  
    }  
}  
function showhide2() 
{  
    var div = document.getElementById("kinyilo2");  
    if (div.style.display !== "block") {  
      document.getElementById('lenyilo2').style.transform = "rotate(180deg)";
      document.getElementById("lenyilo2").style.transition = "all 1s";
      
        div.style.display = "block";
          
    }  
    else {  
      document.getElementById('lenyilo2').style.transform = "rotate(0deg)";
        div.style.display = "none";  
    }  
}  
function change1() {
  document.getElementById("big-img").src = "./img/1.jpg";
}
function change2() {
  document.getElementById("big-img").src = "./img/2.jpg";
}
function change3() {
  document.getElementById("big-img").src = "./img/3.jpg";
}

function meret1() {
  document.getElementById("elso").style.background = "#343434";
  document.getElementById("elso").style.color = "white";
  document.getElementById("masodik").style.background = "none";
  document.getElementById("masodik").style.color = "black";
  document.getElementById("harmadik").style.background = "none";
  document.getElementById("harmadik").style.color = "black";
  document.getElementById("negy").style.background = "none";
  document.getElementById("negy").style.color = "black";
  document.getElementById("ot").style.background = "none";
  document.getElementById("ot").style.color = "black";
}
function meret2() {
  document.getElementById("elso").style.background = "none";
  document.getElementById("elso").style.color = "black";
  document.getElementById("masodik").style.background = "#343434";
  document.getElementById("masodik").style.color = "white";
  document.getElementById("harmadik").style.background = "none";
  document.getElementById("harmadik").style.color = "black";
  document.getElementById("negy").style.background = "none";
  document.getElementById("negy").style.color = "black";
  document.getElementById("ot").style.background = "none";
  document.getElementById("ot").style.color = "black";
}
function meret3() {
  document.getElementById("elso").style.background = "none";
  document.getElementById("elso").style.color = "black";
  document.getElementById("masodik").style.background = "none";
  document.getElementById("masodik").style.color = "black";
  document.getElementById("harmadik").style.background = "#343434";
  document.getElementById("harmadik").style.color = "white";
  document.getElementById("negy").style.background = "none";
  document.getElementById("negy").style.color = "black";
  document.getElementById("ot").style.background = "none";
  document.getElementById("ot").style.color = "black";
}
function meret4() {
  document.getElementById("elso").style.background = "none";
  document.getElementById("elso").style.color = "black";
  document.getElementById("masodik").style.background = "none";
  document.getElementById("masodik").style.color = "black";
  document.getElementById("harmadik").style.background = "none";
  document.getElementById("harmadik").style.color = "black";
  document.getElementById("negy").style.background = "#343434";
  document.getElementById("negy").style.color = "white";
  document.getElementById("ot").style.background = "none";
  document.getElementById("ot").style.color = "black";
}
function meret5() {
  document.getElementById("elso").style.background = "none";
  document.getElementById("elso").style.color = "black";
  document.getElementById("masodik").style.background = "none";
  document.getElementById("masodik").style.color = "black";
  document.getElementById("harmadik").style.background = "none";
  document.getElementById("harmadik").style.color = "black";
  document.getElementById("negy").style.background = "none";
  document.getElementById("negy").style.color = "black";
  document.getElementById("ot").style.background = "#343434";
  document.getElementById("ot").style.color = "white";
}
