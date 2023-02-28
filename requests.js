export const requestListener = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url == "/home") {
    res.end("It Works");
  } else {
    res.end("Incorrect");
  }
};
