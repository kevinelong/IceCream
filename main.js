//main input
let scoops = 1; // range 1-4
let container = "cup";

//options
let hasSprinkles = false;
let hasWhip = false;
let hasFudge = false;
let hasCherry = false;

document.getElementById("cup").addEventListener("click",(e)=>{
    console.log("CUP " + e.target.checked);
    document.getElementById("toppingsWrapper").style.display = "block";
    container = "cup";
    calculate();
});

document.getElementById("cone").addEventListener("click",(e)=>{
    console.log("CONE " + e.target.checked);
    document.getElementById("toppingsWrapper").style.display = "none";
    container = "cone";
    calculate();
});

function calculate() {
    //GET VALUES FROM HTML
    scoops = Number(document.getElementById("scoopsInput").value);

    hasSprinkles = document.getElementById("sprinkles").checked;
    hasWhip = document.getElementById("whip").checked;
    hasFudge = document.getElementById("fudge").checked;
    hasCherry = document.getElementById("cherry").checked;

    //OUTPUT VARS
    let basePrice = 0;
    let tax = 0;
    let total = 0;
    const TAX_RATE = 0.08;

    basePrice = 1; //extra for first scoop
    basePrice += scoops * 1.25; // 1.25 per scoop
    //VALIDATE INPUTS
    if (scoops < 1 || scoops > 4) { // OR is two "pipe" "broken-bar" "vertical-bar"
        console.log("INVALID SCOOPS. VALID RANGE IS 1-4");
    }

    if ("cup" == container) {
        if (hasSprinkles) {
            basePrice += 0.50;
        }
        if (hasWhip) {
            basePrice += 0.25;
        }
        if (hasFudge) {
            basePrice += 1.25;
        }
        if (hasCherry) {
            basePrice += 0.25;
        }
    }
    tax = basePrice * TAX_RATE;
    total = basePrice + tax;
    console.log(basePrice)
    console.log(tax)
    console.log(total)

    //OUTPUT TO HTML
    document.getElementById("basePriceOutput").innerHTML = basePrice;
    document.getElementById("taxOutput").innerHTML = tax;
    document.getElementById("totalOutput").innerHTML = total;
}

calculate();

document.getElementById("submitOrder").addEventListener("click", calculate);