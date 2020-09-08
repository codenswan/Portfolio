document.addEventListener("DOMContentLoaded", () => {
    OverlayScrollbars(document.querySelectorAll("body"), {});
  });

function openUrlOnClick(id, url) {
    document.getElementById(id).addEventListener("click", () => {
      window.open(url, "_blank");
    });
}

openUrlOnClick(
    "myMVP-btn", 
    "https://codenswan.github.io/MyMVP/");
openUrlOnClick(
    "forecast-btn",
    "https://codenswan.github.io/06-Server-Side-APIs-Weather-Dashboard/"
);
openUrlOnClick(
    "get-it-done-btn",
    "https://codenswan.github.io/05-Third-Party-APIs-Work-Day-Scheduler/"
);
openUrlOnClick(
    "drumkit-btn", 
    "https://codenswan.github.io/drumkit/"
);
openUrlOnClick(
    "tiny-steps-btn",
    "https://tinystepsau.herokuapp.com/"
);