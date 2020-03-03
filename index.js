self.onconnect = e => {
  const port = e.ports[0];
  port.addEventListener("message", message => {
    console.log("Received message from main thread" + message);
  });
  port.postMessage("Hello from the shared worker");
  console.log(e.ports);
};
