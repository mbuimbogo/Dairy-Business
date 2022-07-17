
// catch ids
const cowHouse1 = document.getElementById("cat1");
const cowHouse2 = document.getElementById("cat2");
const cowHouse3 = document.getElementById("cat3");
const cowHouse4 = document.getElementById("cat4");
const totalAmount = document.getElementById("total");
const weeklyIncome = document.getElementById("weekly");
const yearlyIncome = document.getElementById("yearly");
const singleMonths = document.getElementById("list");

document.getElementById(form.addEventListener("submit",getTotals));
document.getElementById(form.addEventListener("submit",weeklyIncome));
document.getElementById(form.addEventListener("submit",monthlyIncome));
document.getElementById(form.addEventListener("submit",yearlyIncome));

// Total milk amount in litres
function getTotals() {
    const final = (cowHouse1.value)+(cowHouse2.value)+(cowHouse3.value)+(cowHouse4.value)
}

// Listing individual months
singleMonths.innerHTML=
        <ul>
            <li class="list">Income for ${months[0]} is</li>
            <li class="list">Income for ${months[1]} is</li>
            <li class="list">Income for ${months[2]} is</li>
            <li class="list">Income for ${months[3]} is</li>
            <li class="list">Income for ${months[4]} is</li>
            <li class="list">Income for ${months[5]} is</li>
            <li class="list">Income for ${months[6]} is</li>
            <li class="list">Income for ${months[7]} is</li>
            <li class="list">Income for ${months[8]} is</li>
            <li class="list">Income for ${months[9]} is</li>
            <li class="list">Income for ${months[10]} is</li>
            <li class="list">Income for ${months[11]} is</li>
        </ul>

