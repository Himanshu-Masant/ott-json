import http from "node:http";
import { requestListener } from "./requests.js";

const port = process.env.PORT || 5000;
const app = http.createServer(requestListener);

app.listen(port, () => {
  console.log(`Active on PORT : ${port}`);
});
