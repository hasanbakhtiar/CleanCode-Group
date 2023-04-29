document.querySelector('button').onclick=()=>{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.querySelector(".test").innerHTML = this.responseText;
      }
      xhttp.open("GET", "../data/letter.txt");
      xhttp.send();
};



