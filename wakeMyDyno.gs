function onOpen() {
  SpreadsheetApp.getActiveSpreadsheet().addMenu("Functions", [{name: "Wake Dynos", functionName: "wakeMyDynos"}]);
}

function wakeMyDynos() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = sheet.getDataRange().getValues();
  var reservedTableRows = 1;
  for (var currentRow = reservedTableRows; currentRow < sheet.getLastRow(); currentRow++) {
    var dynoUrl = data[currentRow][0];
    Logger.log(dynoUrl);
    var fromHour = data[currentRow][1];
    Logger.log(fromHour);
    var toHour = data[currentRow][2];
    Logger.log(toHour);
    var currentHour = Number(Utilities.formatDate(new Date(), "UTC", "HH"));
    Logger.log("Current hour " + currentHour);
    if (dynoUrl && currentHour > fromHour && currentHour < toHour) {
      var responseCode = wakeDyno(dynoUrl);
      Logger.log("Request to " + dynoUrl + " got " + responseCode);
    }
  }
  //sendDebugMail();
}

function wakeDyno(dynoUrl) {
  var response = UrlFetchApp.fetch(dynoUrl);
  return response.getResponseCode();
}

function sendDebugMail() {
  if (Logger.getLog() != null && Logger.getLog() != '') {
    var recipient = Session.getActiveUser().getEmail();
    var subject = 'wake-my-dynos log';
    var body = Logger.getLog();
    MailApp.sendEmail(recipient, subject, body);
  }
}
