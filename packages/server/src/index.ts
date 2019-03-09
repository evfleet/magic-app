import path from "path";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const clientPath = '../../client/dist';

app.use(express.static(clientPath));

app.get('*', (req, res) => {
  const link = (req.path == '/' ? 'index.html' : req.path);
  const root = path.join(__dirname, clientPath);
  
  res.sendFile(link, { root: root }, (error) => {
    if (error) {
      res.sendFile('/', { root: root });
    }
  });
}); 

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
