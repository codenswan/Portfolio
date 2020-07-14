// document.addEventListener("DOMContentLoaded", () => {
//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll(".navbar-burger"),
//     0
//   );

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach((el) => {
//       el.addEventListener("click", () => {
//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle("is-active");
//         $target.classList.toggle("is-active");
//       });
//     });
//   }
// });

  document.addEventListener("DOMContentLoaded", () => {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    OverlayScrollbars(document.querySelectorAll("body"), {});
  });

const myMVPdeployed = document.getElementById("myMVP-btn");
  myMVPdeployed.addEventListener("click", () => {
      window.open("https://codenswan.github.io/MyMVP/", "_blank")
  });

const forecastDeployed = document.getElementById("forecast-btn");
  forecastDeployed.addEventListener("click", () => {
      window.open(
        "https://codenswan.github.io/06-Server-Side-APIs-Weather-Dashboard/",
        "_blank"
      );
  })

const workdayDeployed = document.getElementById("get-it-done-btn");
  workdayDeployed.addEventListener("click", () => {
      window.open(
        "https://codenswan.github.io/05-Third-Party-APIs-Work-Day-Scheduler/",
        "_blank"
      );
  })

const drumKitDeployed = document.getElementById("drumkit-btn");
  drumKitDeployed.addEventListener("click", () => {
      window.open("https://codenswan.github.io/drumkit/", "_blank");
  })