var ws = new WebSocket('ws://127.0.0.1:6001');

ws.onopen = function(event) {
  console.log('WebSocket connection opened.');
};

ws.onmessage = function(event) {
  console.log('Received message:', event.data);
};

ws.onerror = function(event) {
  console.log('WebSocket error:', event);
};

ws.onclose = function(event) {
  console.log('WebSocket connection closed.');
};

