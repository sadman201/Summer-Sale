const nameList = document.getElementById("nameList");
const Total = document.getElementById("Total");
const Discount = document.getElementById("Discount");
let totalPrice = 0;
const handleClick = (data) => {
 const name = data.childNodes[1].childNodes[5].innerText;
  const priceAndTk = data.childNodes[1].childNodes[7].innerText;
  const price = priceAndTk.split(" ")[0];
  const priceNumber = parseInt(price);
  

  totalPrice = totalPrice + priceNumber;
    Total.innerText = totalPrice;
    DiscountTotal.innerText = totalPrice;

  const li = document.createElement("li");
  li.innerText = name;
  nameList.appendChild(li);

};
