chrome.commands.onCommand.addListener(function (command) {
  debugger;
  if (["done-task-btn", "fullscreen-btn"].includes(command)) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        done: command === "done-task-btn",
        fullscreen: command === "fullscreen-btn",
      });
    });
  } else {
    const direction = command.split("-")[1];

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { direction });
    });
  }
});
