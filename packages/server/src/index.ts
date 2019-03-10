import path from "path";
import express from "express";
import webpack from "webpack";

const app = express();
const port = process.env.PORT || 3000;

const clientPath = "../../client";
const clientConfig = require(`${clientPath}/webpack.config`);
const compiler = webpack(clientConfig);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: clientConfig.output.publicPath
  })
);
app.use(require("webpack-hot-middleware")(compiler));
app.use(express.static(`${clientPath}/dist`));

app.get("*", (req, res) => {
  const link = req.path == "/" ? "index.html" : req.path;
  const root = path.join(__dirname, `${clientPath}/dist`);

  res.sendFile(link, { root }, error => {
    if (error) {
      res.sendFile("/", { root });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
