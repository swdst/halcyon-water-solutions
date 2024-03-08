document.addEventListener("DOMContentLoaded", () => {
  /*--------------------------------------------------
    Modal 1
  --------------------------------------------------*/
  // Open Modal 1
  document.querySelectorAll(".open-modal-1").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-1").forEach((target) => target.classList.add("active"));
    });
  });
  // Close Modal 1
  document.querySelectorAll(".modal-1").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-1").forEach((target) => target.classList.remove("active"));
    });
  });
  document.querySelectorAll(".close-icon").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-1").forEach((target) => target.classList.remove("active"));
    });
  });

  /*--------------------------------------------------
    Modal 2
  --------------------------------------------------*/
  // Open Modal 2
  document.querySelectorAll(".open-modal-2").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-2").forEach((target) => target.classList.add("active"));
    });
  });
  // Close Modal 2
  document.querySelectorAll(".modal-2").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-2").forEach((target) => target.classList.remove("active"));
    });
  });
  document.querySelectorAll(".close-icon").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-2").forEach((target) => target.classList.remove("active"));
    });
  });

  /*--------------------------------------------------
    Modal 3
  --------------------------------------------------*/
  // Open Modal 3
  document.querySelectorAll(".open-modal-1").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-3").forEach((target) => target.classList.add("active"));
    });
  });
  // Close Modal 3
  document.querySelectorAll(".modal-3").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-3").forEach((target) => target.classList.remove("active"));
    });
  });
  document.querySelectorAll(".close-icon").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelectorAll(".modal-3").forEach((target) => target.classList.remove("active"));
    });
  });
});
