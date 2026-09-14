function loadPage() {
  const submitBtn = document.querySelector(".submit-btn");
  const resetBtn = document.querySelector(".reset-btn");
  // ---------------------------------------------------
  const nameIput = document.querySelector("#name"); // required
  const ageIput = document.querySelector("#age"); // required
  const typeIput = document.querySelector("#type");
  const quantityIput = document.querySelector("#quantity");
  const promoCodeIput = document.querySelector("#promo-code");
  const ticketElem = document.querySelector(".ticket");

  // ---------------------------------------------------
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!nameIput.value || !ageIput.value) {
      alert("Error: Name or age is invalid");
      return;
    }
    const name = nameIput.value;
    const age = ageIput.value;
    const type = typeIput.value;
    const promoCode = promoCodeIput.value;
    const quantity = Number(quantityIput.value);

    let originalPrice;
    switch (type) {
      case "Standard":
        originalPrice = 100 * quantity;
        break;
      case "VIP":
        originalPrice = 180 * quantity;
        break;
    }

    let discount = 0;
    if (age < 13) discount = 0.2;
    else if (promoCode === "ACCIO10") discount = 0.1;

    const priceAfterDiscount = originalPrice - originalPrice * discount;

    ticketElem.innerHTML = `
      <p>visitor name: ${name}</p>
      <p>Ticket Type: ${type}</p>
      <p>Quantity: ${quantity}</p>
      <p>original total: ${discount !== 0 ? `<strike>${originalPrice}</strike>` : `${originalPrice}`}</p>
      <p>Applied Discount: ${`${discount * 100}` + "%"}</p>
      <p>Final Price: ${priceAfterDiscount}</p>`;
  });

  resetBtn.addEventListener("click", () => {
    ticketElem.innerHTML = "<p>please fill in the form</p>";
  });
}

loadPage();
