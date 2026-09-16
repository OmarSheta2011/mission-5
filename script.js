function loadPage() {
  const submitBtn = document.querySelector(".submit-btn");
  const resetBtn = document.querySelector(".reset-btn");
  // ---------------------------------------------------
  const nameInput = document.querySelector("#name"); // required
  const ageInput = document.querySelector("#age"); // required
  const typeInput = document.querySelector("#type");
  const quantityInput = document.querySelector("#quantity");
  const promoCodeInput = document.querySelector("#promo-code");
  const ticketElem = document.querySelector(".ticket");

  // ---------------------------------------------------
  function checkIfEmpty(str) {
    return !(checker = str.split("").some((element) => element !== " "));
  }
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const age = Number(ageInput.value);
    if (!name || !age || age < 0 || checkIfEmpty(name)) {
      alert("Error: Name or age is invalid");
      return;
    }
    const type = typeInput.value;
    const promoCode = promoCodeInput.value;
    const quantity = Number(quantityInput.value);

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
      <p>Visitor Name: ${name}</p>
      <p>Ticket Type: ${type}</p>
      <p>Quantity: ${quantity}</p>
      <p>Original Total: ${discount !== 0 ? `<strike>${originalPrice}</strike>` : `${originalPrice}`}</p>
      <p>Applied Discount: ${`${discount * 100}` + "%"}</p>
      <p>Final Price: ${priceAfterDiscount}</p>`;
  });

  resetBtn.addEventListener("click", () => {
    ticketElem.innerHTML = "<p>please fill in the form</p>";
  });
}

loadPage();
