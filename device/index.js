const awsIot = require('aws-iot-device-sdk');

const { deviceClientConfig } = require('../config');
const { DEVICE_EVENTS, TOPIC } = require('../constants');

const device = awsIot.device(deviceClientConfig);

device.on(DEVICE_EVENTS.CONNECT, () => {
  console.log('[Device] Connected. Sending "connected" status.');
  device.publish(TOPIC, JSON.stringify({ status: 'connected' }));

  // Simulate abrupt exit after 5 seconds
  setTimeout(() => {
    console.log('[Device] Simulating crash (no .end call)');
    process.exit(1); // Abrupt kill
  }, 5000);
});
