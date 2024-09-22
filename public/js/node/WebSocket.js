
const WebSocket = new Pusher('myKey', {
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssPort: 6001,
    wsPath: '',
    disableStats: true,
    authEndpoint: '',
    auth: {
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
            'X-App-ID': 'Nour'
        }
    },
    enabledTransports: ['ws', 'flash']
});

WebSocket.connection.bind('connected', () => {
    console.log('WebSocket Connected');
    // Alert('WebSocket Server Connected');
});

WebSocket.connection.bind('disconnect', () => {
    Alert('WebSocket Disconnect Please Reload The Page','e');
});

WebSocket.connection.bind('error', () => {
    Alert('WebSocket Disconnect Please Reload The Page','e');
});


WebSocket.connection.bind('close', () => {
    Alert('WebSocket Disconnect Please Reload The Page','e');
});


