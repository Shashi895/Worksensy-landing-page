// =====================================================
// Google Sheets Integration Config
// =====================================================
// STEP 1: Go to your Google Sheet
// STEP 2: Extensions → Apps Script
// STEP 3: Paste the script from the README below
// STEP 4: Deploy → New Deployment → Web App
//         (Execute as: Me, Who has access: Anyone)
// STEP 5: Copy the Web App URL and paste it below
// =====================================================

export const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyePp5aygy32rZjVU0SOhqPnmJGT6z6jD6lqurR96rSHc-JFaiIM-4tIcAnTOyBsKS84g/exec';

// ─── Apps Script Code (paste in Apps Script editor) ───
/*
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(), data.name, data.email,
    data.company, data.teamSize
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
*/
