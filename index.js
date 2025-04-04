const coffeeData = [
  {
    name: "Espresso",
    price: "$3.00",
    size: "Small",
    image: "images/espresso.jpg",
  },
  {
    name: "Latte",
    price: "$4.50",
    size: "Medium",
    image: "images/latte.jpg",
  },
  {
    name: "Cappuccino",
    price: "$4.00",
    size: "Medium",
    image: "images/cappuccino.jpg",
  },
  {
    name: "Americano",
    price: "$3.50",
    size: "Large",
    image: "images/americano.jpg",
  },
  {
    name: "Mocha",
    price: "$5.00",
    size: "Large",
    image: "images/mocha.jpg",
  },
  {
    name: "Flat White",
    price: "$4.50",
    size: "Medium",
    image: "images/flat-white.jpg",
  },
  {
    name: "Macchiato",
    price: "$4.00",
    size: "Small",
    image: "images/macchiato.jpg",
  },
  {
    name: "Affogato",
    price: "$5.50",
    size: "Small",
    image: "images/affogato.jpg",
  },
  {
    name: "Irish Coffee",
    price: "$6.00",
    size: "Large",
    image: "images/irish.jpg",
  },
  {
    name: "Iced Coffee",
    price: "$3.50",
    size: "Large",
    image: "images/iced.jpg",
  },
];

const testimonials = [
  {
    image: "people/img2.jpg",
    name: "Lisa",
    opinion:
      "The decor is very relaxed and the shop is immaculate. The staff doesn't mind if you have any food allergies. They are happy to accommodate! Finally, LOVE that.Wow!",
  },
  {
    image: "people/img3.jpg",
    name: "Mike",
    opinion:
      "I opened my bag of beans and the aroma was incredible. I never realized that the coffee could smell that good. I couldn't wait to grind them up and make a pot.",
  },
  {
    image: "people/img4.jpg",
    name: "Tom",
    opinion:
      "The decor is very relaxed and the shop is immaculate. The staff doesn't mind if you have any food allergies. They are happy to accommodate! Finally, LOVE that ...",
  },
  {
    image: "people/img6.jpg",
    name: "Ali",
    opinion:
      "The coffee here is simply phenomenal - rich, flavorful, and perfectly brewed every time. I can't get enough of their latte art!This coffee shop is a hidden gem in the neighborhood",
  },
  {
    image: "people/img8.jpg",
    name: "Megan",
    opinion:
      "Best iced coffee in town! The perfect blend of sweetness and coolness, ideal for a hot summer day.This coffee shop is a great place to work or catch up with friends",
  },
];

const seasonal = [
  {
    season: "Spring",
    details: "Rose, Jasmine and Lavender",
    image: "seasonal/spring-coffee.webp",
  },
  {
    season: "Summer",
    details: "Straw Berry, rase berry, and cherry",
    image: "seasonal/summer-coffee.jpg",
  },
  {
    season: "Fall",
    details: "Pumpkin with cinnamon ",
    image: "seasonal/fall-coffee.jpg",
  },
  {
    season: "winter",
    details: "Candy coin, ginger and peppermint",
    image: "seasonal/winter-coffee.jpg",
  },
];

const menuLists = document.querySelector(".menu-lists");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const testimonialsImage = document.querySelector(".customer-img");
const customerName = document.querySelector(".customer-name");
const customerTestimony = document.querySelector(".customer-testimony");

// menu
coffeeData.forEach((coffee) => {
  const coffeeCard = document.createElement("div");
  coffeeCard.classList.add("coffee-card");
  coffeeCard.innerHTML = `
    <h3>${coffee.name}</h3>
    <p>Price: ${coffee.price}</p>
    <p>Size: ${coffee.size}</p>
    <img src="
    ${coffee.image}" alt="${coffee.name}"> 
    `;
  menuLists.appendChild(coffeeCard);
});

// seasonal
const seasonalGallery = document.querySelector(".seasonal-gallery");
seasonal.forEach((season) => {
  const seasonCard = document.createElement("div");
  seasonCard.classList.add("seasonal-card");
  seasonCard.innerHTML = `
<h3>${season.season}</h3>
<p>${season.details}</p>
<img src="${season.image}" alt="${season.season}">
`;
seasonalGallery.appendChild(seasonCard)
});

// testimony
let currentIndex = 0;

function updatedTestimonial() {
  const currentTestimonial = testimonials[currentIndex];
  testimonialsImage.src = currentTestimonial.image;
  customerName.textContent = currentTestimonial.name;
  customerTestimony.textContent = currentTestimonial.opinion;
}

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updatedTestimonial();
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updatedTestimonial();
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let thankYouMessage = document.getElementById("thankyou");
  let form = document.getElementById("contact-form");

  thankYouMessage.classList.remove("hidden");

  form.reset();

  thankYouMessage.addEventListener("click", () => {
    thankYouMessage.classList.add("hidden");
  });
  setTimeout(() => {
    thankYouMessage.classList.add("hidden");
  }, 3000);
});

/* discount timer */

let timeLeft = 180;
let timer;

const timerDisplay = document.getElementById("timer");
const submitButton = document.getElementById("discount-submit");
const successMessage = document.querySelector(".success-message");
const failMessage = document.querySelector(".fail-message");
const phoneInput = document.querySelector("input[name='phone']");

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Time's up!";
      submitButton.disabled = true;
      phoneInput.disabled = true;
      failMessage.textContent = "Time's up! Discount expired 🙁";
      failMessage.style.color = "red";
    } else {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      timerDisplay.textContent = `Time left : ${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
      timeLeft--;
    }
  }, 1000);
}

window.addEventListener("load", startTimer);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let phoneNumber = phoneInput.value;

  if (phoneNumber) {
    clearInterval(timer);
    successMessage.textContent = "Success! Discount has been sent 😀";
    successMessage.style.color = "green";
    failMessage.textContent = "";
  }
});

/* humber button */

const humberBtn = document.querySelector(".humber-btn");
const menuIcon = document.querySelector(".menuIcon");
const navLists = document.querySelector(".navbar-ul");

let isOpen = false;

humberBtn.addEventListener("click", () => {
  navLists.classList.toggle("active");
  isOpen = !isOpen;
  menuIcon.src = isOpen ? "images/icon-close.svg" : "images/icon-hamburger.svg";
});
