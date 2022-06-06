chrome.runtime.onMessage.addListener(function (message) {
  // GOOGLE CAL
  const calendarContainer = document.querySelector(".rbGOge.SeRypc");
  const clickupContainer = document.querySelector(".task__toolbar");
  //   debugger;

  if (calendarContainer) {
    const containerChildren = calendarContainer.childNodes;

    const leftArrow = containerChildren[1];
    const rightArrow = containerChildren[2];

    const { direction } = message;
    direction === "left" ? leftArrow.click() : rightArrow.click();
  }

  // CLICKUP

  if (clickupContainer) {
    const doneButton = document.querySelector(".done-task-btn");
    const fullscreenBtn = document.querySelector(".cu-editor-fullscreen");
    const { done, fullscreen } = message;
    if (done) {
      doneButton.click();
    }
    if (fullscreen) {
      fullscreenBtn.click();
    }
  }
});
