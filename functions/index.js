const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./sa_credentials.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://inspire-angularhack.firebaseio.com'
});

const request = require('request');
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.triggerFCM = functions.firestore.document("reports/{id}").onCreate((snapshot) => {
    const reports = snapshot.data();

    db.collection('tokens').get().then(docs => {
        docs.forEach((doc) => {
            console.log(doc.data().token_id)
            console.log(reports)
            triggerPushNotification(doc.data().token_id, reports.description, reports.title)
        })
        return true;
    }).catch((err) => {
        console.log(err)
        throw new Error("Error")
    });
});

function triggerPushNotification(token, objBody, objTitle) {

    const body = {
        "to": token,
        "notification": {
            "body": objBody,
            "title": objTitle,
            "content_available": true,
            "priority": "high"
        },
        "data": {
            "body": objBody,
            "title": objTitle,
            "content_available": true,
            "priority": "high"
        }
    };
    const options = {
        url: 'https://fcm.googleapis.com/fcm/send',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAAenyRYyg:APA91bHf-g6sBsFos66JimnXDbR4C2cR-LsDn4zkkdww1mCPq38a578WU34TBtIRfYyXU-SOdTY6p-qZ3roX39p4Nhd7CbPHKz9ciTJO7YlOgssQHQsE2eVTGTktQF2DQMLuLK30PhCD'
        },
        body: JSON.stringify(body)
    };

    const callback = (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const info = JSON.parse(body);
            console.log('INFO: ', info)
            return info;
        }
        console.log('response: ', response)
        console.log('notif error: ', error)
        return [];
    };

    request(options, callback);
}