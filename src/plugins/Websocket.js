import { Error } from "./Alert";
import Echo from "laravel-echo";
// eslint-disable-next-line no-unused-vars
import Pusher from "pusher-js"; // Required for Pusher integration

// Configure Laravel Echo with Pusher
const Websocket = new Echo({
    broadcaster: "pusher",
    key: "N7", // Replace with your Pusher App Key
    cluster: "mt1", // Uncomment and replace with your Pusher Cluster if needed
    forceTLS: false, // Set to true for production (HTTPS)
    wsHost: window.location.hostname, // Backend hostname
    wsPort: 9000, // WebSocket port for HTTP
    wssPort: 9000, // WebSocket port for HTTPS
    disableStats: true, // Disable Pusher stats collection
    enabledTransports: ['ws'], // Restrict to WebSockets only
});

// WebSocket connection hooks
Websocket.connector.pusher.connection.bind("connected", () => {
    console.log("WebSocket Connected");
});

Websocket.connector.pusher.connection.bind("disconnected", () => {
    Error("تم قطع الاتصال برجاء إعادة تحميل الصفحة", 9999999);
});

Websocket.connector.pusher.connection.bind("error", (err) => {
    console.error("WebSocket Error:", err);
    Error("تم قطع الاتصال برجاء إعادة تحميل الصفحة", 9999999);
});

Websocket.connector.pusher.connection.bind("closed", () => {
    Error("تم قطع الاتصال برجاء إعادة تحميل الصفحة", 9999999);
});

export default Websocket;
