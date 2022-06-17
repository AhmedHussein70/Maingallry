let btns = document.querySelectorAll(".btn");
let itemBox = document.querySelectorAll(".itemBox");

btns.forEach((item) => {
  // forEach About buttons

  item.addEventListener("click", (e) => {
    btns.forEach((element) => {
      // Remove Class Active to  All buttons when click button
      element.classList.remove("active");
    });

    // Add  Class Active to button when clicked

    item.classList.add("active");

    // get Attribute data-filter from buttons

    let dataFliter = item.getAttribute("data-filter");

    // forEach About Iamges

    itemBox.forEach((img) => {
      // remove class Active display Block

      img.classList.remove("active");

      // all Images display none

      img.classList.add("hide");

      // If Attribute in image Equle Varyble dataFliter Or dataFliter Equle all

      if (img.getAttribute("data-item") == dataFliter || dataFliter == "all") {
        // all Images display none

        img.classList.add("active");

        // remove class Active display Block

        img.classList.remove("hide");

        // test
        console.log("dataFliter " + dataFliter);
        console.log(img.getAttribute("data-item"));
      }
    });
  });
});
