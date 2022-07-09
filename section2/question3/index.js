var http = require("https");

var trRegex = /<tr><td>(.*?)<\/td><\/tr>/gi;
var tdRegex = /<td>(.*?)<\/td>/gi;
var options = {
  hostname: "codequiz.azurewebsites.net",
  path: "/",
  method: "GET",
  headers: { Cookie: "hasCookie=true" },
};

function transfromdata(response) {
  var result = {};
  var founds = ["name", "nav", "bid", "offer", "change"];
  var rows = response.match(trRegex);
  for (var i = 0; i < rows.length; i++) {
    var key;
    var cols = rows[i].match(tdRegex);
    if (!cols) return null;
    for (var j = 0; j < cols.length; j++) {
      var data = cols[j].replace(/(<([^>]+)>)/gi, "");
      if (j === 0) {
        key = data.trim();
        result[key] = {};
      }
      result[key][founds[j]] = data;
    }
  }
  return result;
}
var req = http.request(options, function (res) {
  var results = "";
  res.on("data", function (chunk) {
    results = results + chunk;
  });
  res.on("end", function () {
    var data = transfromdata(results.replace(/\s/g, ""));
    process.argv.slice(2).map((k) => {
      if (!data[k]) {
        console.log("Not found");
        return;
      }
      console.log(data[k]["nav"]);
    });
  });
});

req.on("error", function (error) {
  console.log(error);
});

req.end();
