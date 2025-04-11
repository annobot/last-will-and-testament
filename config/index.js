const { TOPIC } = require('../constants');

require('dotenv').config()
const root = {
  keyPath: process.env.KEY_PATH,
  certPath: process.env.CERT_PATH,
  caPath: process.env.CA_PATH,
  clientId: "temperaturesensor", // Thing Name
  host: process.env.AWS_IOT_ENDPOINT, // Replace with your actual IoT endpoint
};
const deviceClientConfig = {
  ...root,
  clientId: "device",
  will: {
    topic: TOPIC,
    payload: JSON.stringify({ status: "disconnected" }),
    qos: 1,
    retain: false,
  },
};
const cloudClientConfig = { ...root, clientId: "cloud" };
module.exports = { deviceClientConfig, cloudClientConfig };
