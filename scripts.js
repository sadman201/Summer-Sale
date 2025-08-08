const nameList = document.getElementById("nameList");
const total = document.getElementById("total");
const discountTotal = document.getElementById("discountTotal");
const purchaseBtn = document.getElementById("purchaseBtn");
const applyBtn = document.getElementById("applyBtn");
const inputCoupon = document.getElementById("inputCoupon");
const discountContainer = document.getElementById("discount");
 applyBtn.disabled = true;
purchaseBtn.disabled = true;

let totalPrice = 0;
if  (totalPrice <= 0){

  applyBtn.classList.add("bg-gray-400");

}
 if (totalPrice <= 0){
   purchaseBtn.classList.add("bg-gray-400");
  }
  

const handleClick = (data) => {
 const name = data.childNodes[1].childNodes[5].innerText;
  const priceAndTk = data.childNodes[1].childNodes[7].innerText;
  const price = priceAndTk.split(" ")[0];
  const priceNumber = parseInt(price);
  

  totalPrice = totalPrice + priceNumber;
    total.innerText = totalPrice;
    discountTotal.innerText = totalPrice;

  const li = document.createElement("li");
  li.innerText = name;
  nameList.appendChild(li);
  if ( totalPrice < 0) {
    applyBtn.disabled = false;
  }
  if (totalPrice  > 0 ){
    purchaseBtn.disabled = false;
     purchaseBtn.classList.add("bg-pink-400");
  }
  if (totalPrice >= 200){
    applyBtn.disabled = false;
    applyBtn.classList.add("bg-pink-400")
  }

};


applyBtn.addEventListener("click", () => { 
  if (inputCoupon.value === ""){
    alert("Input is required");
    return;
  }
   
  if (inputCoupon.value === "SELL200" ){

    const discounRate = 0.2;
   const discount = totalPrice * discounRate;
  const totalPriceWidthDiscount = totalPrice - discount;
  discountContainer.innerText = discount.toFixed(2);
  discountTotal.innerText = totalPriceWidthDiscount;
  }else {
    alert("Coupon Not match");
  }
   
})


purchaseBtn.addEventListener("click",() => {
  totalPrice = 0;
 total.innerText = "00";
  discountTotal.innerText = "00";
  discountContainer.innerText = "00";
  nameList.innerHTML = "";

}) 