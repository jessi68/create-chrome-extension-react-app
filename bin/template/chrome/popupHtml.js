const popup = require("./popup");

const popupHtml = (projectName) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${projectName}</title>
    <meta charset="utf-8" />
  </head>

  <body>
    <div id="popup"></div>
    <script src="popup.js"></script>
  </body>
</html>

`;

module.exports = popupHtml;