document.getElementById("bDate").onclick = check;

function check(){
    label = document.getElementById("label"); 
    label.innerHTML = document.getElementById("tDate").value + label.textContent;
    document.getElementById("answer").style.display = "block";
    console.log("emi");
}