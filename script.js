const accordian = document.getElementsByClassName("faq-box");
const plus = document.getElementsByClassName("fa-plus");
const xmark = document.getElementsByClassName("fa-xmark");

// console.log(ourItemDiv)

for (let i = 0; i < accordian.length; i++) {
    xmark[i].style.display = "none";

  accordian[i].addEventListener("click", () => {
    const result= accordian[i].classList.toggle('active')

    if (result) {
      xmark[i].style.display = "block";
      plus[i].style.display = "none";
    } else {
      xmark[i].style.display = "none";
      plus[i].style.display = "block";
    }
  });
}
