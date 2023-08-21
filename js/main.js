const steps = document.querySelectorAll(".step");
const stepsContainer = document.getElementById("contact-form");
const stepsAmount = steps.length;
const prevStepBtn = document.getElementById("previous-step");
const nextStepBtn = document.getElementById("next-step");
let currentStep = 1;

function changeStep(step) {
  if (step < 1) {
    step = 1;
  } else if (step > stepsAmount) {
    step = stepsAmount;
  }

  currentStep = step;
  stepsContainer.dataset.currentStep = currentStep;

  if (currentStep === stepsAmount) {
    nextStepBtn.textContent = "Enviar";
  } else {
    nextStepBtn.textContent = "Próxima etapa";
  }
}

prevStepBtn.addEventListener("click", function () {
  changeStep(currentStep - 1);
});

nextStepBtn.addEventListener("click", function () {
  changeStep(currentStep + 1);
});
