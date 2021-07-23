const path = require("path");

const view = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/index.html`));
};

module.exports = {
  getView: view
};