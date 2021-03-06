const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const axios = require("axios");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/nodes", async (req, res) => {
  const nodes = await prisma.node.findMany({});
  console.log(nodes);
  res.json(nodes);
});

app.post("/add", async (req, res) => {
  const { url, country, port } = req.body || {};
  if (url && port) {
    const { info, ip } = await getNodeInfo({ url, port });
    if (info.status === "OK") {
      try {
        const node = await prisma.node.create({
          data: {
            country: country,
            height: info.height,
            port: parseInt(port),
            url: url,
            ip: ip,
          },
        });
        console.log("Created node", node.url);
      } catch (error) {
        if (error.code === "P2002") {
          console.log("Node already exists");
          res.json({ status: "ERROR", message: "Node already exists" });
        }
        console.log(error);
      }
    } else {
      res.json({ status: "ERROR", message: "Node unreachable" });
    }
  }
  return;
});

const getNodeInfo = async (node) => {
  try {
    const url = `http://${node.url}:${node.port}/json_rpc`;
    const response = await axios.post(url, {
      timeout: 1000,
      jsonrpc: "2.0",
      id: "0",
      method: "get_info",
      contentType: "application/json",
    });
    if (response.data.result) {
      return {
        info: response.data.result,
        ip: response.request.socket.remoteAddress,
      };
    }
  } catch (error) {
    return error;
  }
};

const updadeNodes = async () => {
  const nodes = await prisma.node.findMany({});
  nodes.forEach(async (node) => {
    const { info } = await getNodeInfo({ url: node.url, port: node.port });
    if (info.status === "OK") {
      await prisma.node.update({
        where: { id: node.id },
        data: {
          height: info.height,
          lastSeen: new Date(),
        },
      });
    }
  });
  console.log("Updated nodes");
};

setInterval(updadeNodes, 10000);

//Whenever someone connects this gets executed
io.on("connection", function (socket) {
  console.log("A user connected");

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

http.listen(4000, function () {
  console.log("listening on *:4000");
});
