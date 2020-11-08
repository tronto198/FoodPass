// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
const ver = '6.2.0';
importScripts(`/__/firebase/${ver}/firebase-app.js`);
importScripts(`/__/firebase/${ver}/firebase-messaging.js`);
importScripts('/__/firebase/init.js');

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
