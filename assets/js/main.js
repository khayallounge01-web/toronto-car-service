(function () {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const revealItems = document.querySelectorAll(".reveal");

  const googleReviews = [
    {
      name: "Sue Dorion",
      meta: "2 reviews · 1 photo",
      time: "a month ago",
      avatar: "S",
      text: "I have been using Toronto Car Service and Moe since 2005. I take them with me when I move jobs. Moe and his team are amazing. They take good care of me and my coworkers. Always on time, never disappointed me in 20 years. Very safe and punctual. It truly amazes me every time I ride in their cars, how the cars look so clean and in mint condition."
    },
    {
      name: "Katharine Srere",
      meta: "3 reviews",
      time: "2 months ago",
      avatar: "K",
      text: "We had a great experience with Toronto Car Service. Pricing was very fair, communication was quick and responsive, and the car was clean and clearly well maintained. The team was friendly and even helped us out with an issue we ran into down the road, which really went above and beyond. Can’t recommend them enough!"
    },
    {
      name: "Janet Hibbs",
      meta: "1 review",
      time: "3 months ago",
      avatar: "J",
      text: "My experience with Toronto City Limo and my driver, Mithu, was excellent from start to finish. The driver was friendly and professional, communication was clear, and pickup was right on time. The ride was smooth and safe and the vehicle was very comfortable. I highly recommend using this service!"
    },
    {
      name: "Karthik C",
      meta: "3 reviews",
      time: "5 months ago",
      avatar: "K",
      text: "We used this service for two days while we were in Toronto, and the experience exceeded our expectations. Even with canceled flights, last-minute airport changes, and a tight schedule to make an event, Moe was friendly, flexible, and genuinely helpful throughout. I’d highly recommend them, and we’ll definitely use them again on our next trip."
    },
    {
      name: "taraq Ali",
      meta: "2 reviews",
      time: "3 months ago",
      avatar: "T",
      text: "I booked Toronto Car Service for my airport transfer last week and honestly, I was so impressed. From the moment I was picked up to drop-off, everything was smooth, professional, and comfortable. The driver was friendly and on time, the car was spotless, and the whole experience felt premium without being over the top. I’ll definitely be using them again — highly recommend!"
    },
    {
      name: "Yanick Marie",
      meta: "3 reviews",
      time: "4 months ago",
      avatar: "Y",
      text: "Absolutely exceptional experience with Toronto Car Service. From booking to drop-off, everything is always seamless and professional. The car is consistently spotless, smells lovely, and the music is always perfect—making every ride relaxing and enjoyable. The driver is truly amazing: always on time, drives safely and comfortably, and is incredibly courteous and accommodating."
    },
    {
      name: "Andre Dallager",
      meta: "Local Guide · 65 reviews · 7 photos",
      time: "3 months ago",
      avatar: "A",
      text: "Mo and the TCS team were fantastic! I was flying in on short notice during a snow storm and they actively adjusted for my flight delay due to the weather and got me to my destination safely despite the poor road conditions."
    },
    {
      name: "Darrin Hanik",
      meta: "1 review",
      time: "6 months ago",
      avatar: "D",
      text: "Toronto Car Service is first rate. Both Moe and Eddy were punctual, professional and great to chat with. Will certainly be calling them for our next visit."
    },
    {
      name: "Daisy",
      meta: "6 reviews · 1 photo",
      time: "3 months ago",
      avatar: "D",
      text: "A very professional and efficient Car Service from reservation to the actual Car service. Thank you to Moe and to Eddie. What a pleasant experience it was to use this Car Service."
    },
    {
      name: "Brando Usher",
      meta: "6 reviews",
      time: "6 months ago",
      avatar: "B",
      text: "Moe and his team have been extremely helpful and have provided top tier service to me and my family from day one. I would highly recommend them for any driving needs. They are on time, fairly priced and always professional. Thank you!"
    },
    {
      name: "Jon",
      meta: "1 review",
      time: "5 months ago",
      avatar: "J",
      text: "Excellent service. Moe was reliable and on time. Ride was smooth and safe with no delays. Highly recommend, would book again."
    },
    {
      name: "Angela Obeng",
      meta: "8 reviews",
      time: "8 months ago",
      avatar: "A",
      text: "I am so glad that I chose Toronto Car Service for my family’s needs. We had a car booked for a wedding that got cancelled. Moe was super understanding and accommodating to our situation. I would for sure use this service again and recommend them to anyone. Thank you so much again Toronto Car service. We appreciate the entire team!"
    },
    {
      name: "Brianna Bowman",
      meta: "1 review",
      time: "7 months ago",
      avatar: "B",
      text: "We recently used Travel Car Service to transport our CEO from Pearson to Hamilton, and the experience was outstanding from start to finish. The communication was clear and prompt throughout, which gave us great peace of mind. What truly stood out was their flexibility — they accommodated several last-minute changes with complete professionalism and a smile."
    },
    {
      name: "Jennifer Tarr",
      meta: "11 reviews",
      time: "7 months ago",
      avatar: "J",
      text: "Moh was a fantastic driver. My family and I tend to get car sick, but his driving was calm and fluid. Didn’t brake too hard or make us feel uneasy. Made our concert experience that much better."
    },
    {
      name: "Saira Rahim",
      meta: "3 reviews",
      time: "6 months ago",
      avatar: "S",
      text: "Car service was excellent. The car was clean and on time! Moh was fantastic to deal with. I would book again. 11/10 experience!"
    },
    {
      name: "John Filipetti",
      meta: "3 reviews · 1 photo",
      time: "8 months ago",
      avatar: "J",
      text: "My family used Toronto Car Service to attend an out of town wedding. Moe and his colleague provided safe, timely, and reliable service! Changes to our schedule were easily accommodated. I highly recommend! Thanks Moe!"
    },
    {
      name: "Wendy Rhodes",
      meta: "12 reviews",
      time: "8 months ago",
      avatar: "W",
      text: "We were fortunate enough to have Toronto Car Service pick up our friends in Toronto and return them back to the Four Seasons later in the evening and the service was second to none. They were prompt and so considerate and helpful! The cars were beautifully maintained and the drivers...experts. Thank you Moe and staff for this awesome experience!"
    },
    {
      name: "J Fo",
      meta: "Local Guide · 16 reviews",
      time: "10 months ago",
      avatar: "J",
      text: "I searched for a transportation company for some of my Executives attending a conference in Toronto. I saw that Toronto Car Service had a lot of good reviews and let me say, they were not wrong! Moe is absolutely amazing, communicative, and went above and beyond for my Executives."
    },
    {
      name: "Chuck Fralick",
      meta: "Local Guide · 17 reviews · 1 photo",
      time: "7 months ago",
      avatar: "C",
      text: "We used Toronto Car Service to take us to and from the Oasis concert at Rogers Stadium. If you know the layout, it’s challenging for the driver. Abe was terrific - I use drivers all over the world for business travel and Abe was as good as they come. Easy drop off, easy pickup and the car was spotless and very comfortable."
    },
    {
      name: "Janiece Lehmann",
      meta: "2 reviews",
      time: "9 months ago",
      avatar: "J",
      text: "Moe was very professional and very easy to work with. He was adaptable to our schedule and needs, had great recommendations of the local area, and was both personable and professional - would highly recommend him / his company!"
    }
  ];

  function onScroll() {
    if (!header) {
      return;
    }

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  function closeMenu() {
    if (!menuToggle || !mainMenu) {
      return;
    }

    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    mainMenu.classList.remove("active");
    document.body.classList.remove("menu-open");

    document.querySelectorAll(".dropdown.open").forEach(function (dropdown) {
      dropdown.classList.remove("open");
    });
  }

  function setupMobileMenu() {
    if (!menuToggle || !mainMenu) {
      return;
    }

    menuToggle.addEventListener("click", function () {
      const isOpen = mainMenu.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    mainMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1020) {
        closeMenu();
      }
    });
  }

  function setupDropdowns() {
    dropdownButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const dropdown = button.closest(".dropdown");

        if (!dropdown) {
          return;
        }

        dropdown.classList.toggle("open");
      });
    });
  }

  function setupReveal() {
    if (!revealItems.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  function getRandomReviews(reviewList, count) {
    const shuffled = reviewList.slice();

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const temporary = shuffled[index];
      shuffled[index] = shuffled[randomIndex];
      shuffled[randomIndex] = temporary;
    }

    return shuffled.slice(0, count);
  }

  function shortenReviewText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    return text.slice(0, maxLength).trim().replace(/[.,;:!?-]+$/, "") + "...";
  }

  function setupRandomGoogleReviews() {
    const reviewRows = document.querySelectorAll(".review-row");

    if (!reviewRows.length) {
      return;
    }

    reviewRows.forEach(function (reviewRow) {
      const selectedReviews = getRandomReviews(googleReviews, 3);

      reviewRow.innerHTML = selectedReviews
        .map(function (review) {
          return `
            <article class="review-card reveal visible">
              <div class="review-top">
                <div class="avatar">${review.avatar}</div>
                <div>
                  <strong>${review.name}</strong>
                  <small>${review.time}</small>
                </div>
                <span>G</span>
              </div>
              <div class="stars">★★★★★</div>
              <p>${shortenReviewText(review.text, 165)}</p>
              <a href="faq-book-online.html">Book Toronto car service</a>
            </article>
          `;
        })
        .join("");
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  onScroll();
  setupMobileMenu();
  setupDropdowns();
  setupReveal();
  setupRandomGoogleReviews();
})();