// Dependencies
var path = require("path");
console.log(__dirname);
// Export routes
module.exports = function(app) {
  // Home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  // Survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/survey.html"));
  });
};
