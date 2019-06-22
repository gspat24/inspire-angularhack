const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

function triggerPushNotification(token, objBody, objTitle) {

    const body = {
        "to": token,
        "notification": {
            "body": objBody,
            "title": objTitle,
            "content_available": true,
            "priority": "high",
            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEV5Jv////9tAP90Fv+zj/94I/93IP91Gv9yDv/Zx/9rAP9wBf/69//m2v+COf9zE//z7P/PuP+WX/+qf/+vif/Ir//Ww//r4P/dzf/07/+uhv/x6f+/oP+VXP/h0/9+Lv/49P/Svf+KR/+baP+idP/Ntf+5mP+QU/+aZv/Cpv+FP/+mef/Eqf/m2f+fb/+LSf+3lf8WvTsoAAAES0lEQVR4nO3b61riMBAGYJKSthAUUUFRQPGIZ+//6nbXPUBn0hNbm0yf7/0JKJknbTOZCb0eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABARpJamya+R/F9Er2ZzmbTd93VGO3yUn052mjfY/kW9kL90+9iiMmx2vHewQtVH+1GeG19j6dxyZ3KOIl8j6hp+iAb4VnX7sT4URGbjt2JekAjXHVrEuNDGqBSN7HvUTXJTniEsy5NounxAJW6Mr7H1Zx04Ypw2p010aQjV4Qq6cwkjvvOANXD2PfImpJN2LY6k7rRhG2rK6nb8CwvwstuLBjZbVPWbSdSN32eH+HB0PfoGhDf5Aeo1GMHUjc9K4qwA6mbceTcuw7FT2L6WhzhvfQ10aTFASplhKdu44eyCBfCUzftzrl3jGQ/a6ITdt9N6SunolM3fUnjeWbP1iPJk5i803BWmtekJNe/aZFUqWUcL+lrglM3XiT9VQfmW42l2FWfX5B3ievSPZd6J/KEbf4ViuPxI3QSeZG0/7UwRKf09YnM1M3ENJBR+vsdy9KAWGTqxoukiz8R8lTuKfU71v3wIunfmXLNrsBJ5EXS7UbJ3rvvUFl4kXS72TVX9L25vAWDF0kHO0Hw0saLuNSNZy67Raf4g74rruvNi6RvmRD0G31fWuqmVzSCbPE3uaXvr2Tl37xISgv4ml3Fsrreek3Hf0GWA777X0u6E/lqwKsx9pp+RlLXmxdJP1lFjadur3JSNxPRwTsa2o5Kqpyu9/iTjt11KKHKRIdqyHJu1y0mOHWLLujQ3Y9JnrpJ6XrzKoV7qXMsmjJWfUe6knP18e6wjK43L5Ie54ybJ68iDiw6iqS5117xBiRUvEiav/VLXuhnB+FPYl6R1E3P6acPg1/1HSWYgnU8YsWc4A8s5hdJ3R+PWHIwDnwSeZG0uBSaPtHPLwLPv3mRtPgkAj89PAr7MuX3VVlLQrPmBt0rh8VRJC25reJn+hdBH1gsLpK68dQt5K73PjkKz4EOwp1ER4u+wmB5Hhtu6saLpFUuuH0ubU/Ki6RuRT2ctpkkKjBc05FWe/CH0/U2Nt6c9vOxgVY9ssa73j0vqVti2ByVqPqLkfx+eKuix9JjhlTV+qdJ6F/66Hrz3KPUtPJEBNH15r2iUtU3s3zb3P6BxbjgZyE56hzDD+DAYsoOvpb6qLGo8dRt3faCwbvSZeoVBof0/7fe169/G+YVSd1YGbn1G7Hox0tO+UXSnC8grYDWNxhj5y95C9Q9H0PbOa23S3krrFj9n4eSllz75xZsvYdp/T5Z9uiCj2MLts7TdLLHAHdrUmc+qqbGFv7MLuNprxnQ/+71c09lYb2csTaDw3xys+dqbZ/vf26Grweboa+6d2xt6RPyKrJ274dEnOqoypd8K1Pmv7+giVECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBQfgCM6zI2u5jbHwAAAABJRU5ErkJggg=="
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
            'Authorization': 'key=AAAA_yNgY_4:APA91bH9n4MdRP1WhSrsY-JA5xTWMv0bLC2YMshGOaxr70oXQfJDe7cBZPQPACvyx78wgzHv_h5NQ72fhCckDncA0EDXD2oWjO1AeZ63kiq1ebjbkeNEQLb0pYhdCdBGMsadNICadqdD'
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