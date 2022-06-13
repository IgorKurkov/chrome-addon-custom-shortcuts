chrome.runtime.onMessage.addListener(function (message) {
  const clickupContainer = document.querySelector(".task__toolbar");

  if (clickupContainer) {
    const doneButton = document.querySelector(".done-task-btn");
    const seemoreBtn = document.querySelector(
      ".task-description__show-more-btn"
    );
    const fullscreenBtn = document.querySelector(".cu-editor-fullscreen");
    const { done, fullscreen, seemore } = message;
    if (done) {
      doneButton.click();
    }
    if (fullscreen) {
      fullscreenBtn.click();
    }
    if (seemore) {
      seemoreBtn.click();
    }
  }
});
