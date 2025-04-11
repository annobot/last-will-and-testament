const awsIot = require("aws-iot-device-sdk");

const { cloudClientConfig } = require("../config");
const { DEVICE_EVENTS, TOPIC } = require("../constants");

const cloudClient = awsIot.device(cloudClientConfig);

cloudClient.on(DEVICE_EVENTS.CONNECT, () => {
  console.log("[Cloud] Connected. Subscribing to device/status...");
  cloudClient.subscribe(TOPIC);
});

cloudClient.on(DEVICE_EVENTS.MESSAGE, (topic, payload) => {
  console.log(`[Cloud] Message on ${topic}:`, payload.toString());
});
