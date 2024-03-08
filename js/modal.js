document.addEventListener("DOMContentLoaded", () => {
  function toggleModal(modalClass) {
    document.querySelectorAll(modalClass).forEach((target) => {
      target.classList.toggle("active");
    });
  }

  /*--------------------------------------------------
    Modal 1
  --------------------------------------------------*/
  // Open Modal 1
  document.querySelectorAll(".open-modal-1").forEach((trigger) => {
    trigger.addEventListener("click", () => toggleModal(".modal-1"));
  });

  /*--------------------------------------------------
    Modal 2
  --------------------------------------------------*/
  // Open Modal 2
  document.querySelectorAll(".open-modal-2").forEach((trigger) => {
    trigger.addEventListener("click", () => toggleModal(".modal-2"));
  });

  /*--------------------------------------------------
    Modal 3
  --------------------------------------------------*/
  // Open Modal 3
  document.querySelectorAll(".open-modal-3").forEach((trigger) => {
    trigger.addEventListener("click", () => toggleModal(".modal-3"));
  });

  // Close any modal when close-icon is clicked
  document.querySelectorAll(".close-icon").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      document.querySelectorAll(".modal").forEach((target) => {
        target.classList.remove("active");
      });
    });
  });
});
