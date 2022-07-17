
function getTotal(){

       let data = [];

     data[0] = data["shed1"] = parseInt(document.getElementById("shed1").value);
     data[1] = data["shed2"] = parseInt(document.getElementById("shed2").value);
     data[2] = data["shed3"] = parseInt(document.getElementById("shed3").value);
     data[3] = data["shed4"] = parseInt(document.getElementById("shed4").value);

    let sumData = data.shed1 + data.shed2 + data.shed3 + data.shed4;

    document.getElementById("cat").innerHTML += "<Br>"

    document.getElementById("cat1").innerHTML += "<p>Your production in shed 1 is " + data.shed1 + " litres per day</p>";
    document.getElementById("cat2").innerHTML += "<p>Your production in shed 2 is " + data.shed2 + " litres per day</p>";
    document.getElementById("cat3").innerHTML += "<p>Your production in shed 3 is " + data.shed3 + " litres per day</p>";
    document.getElementById("cat4").innerHTML += "<p>Your production in shed 4 is " + data.shed4 + " litres per day</p>";

    document.getElementById("total").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";
    
}