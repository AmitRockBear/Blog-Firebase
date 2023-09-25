const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Bears");
});



const addNotification = (notification) => {
        return admin.firestore().collection('notifications').add(notification).then((data) => {
            console.log('notifcation added', data)
        })
    
}


exports.createdProject = functions.firestore.document('projects/{project}').onCreate((snap) => {
    const data = snap.data()
    const notification = {
        context: 'Added a new project',
        user: `${data.authorFirstName} ${data.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
    }

    return addNotification(notification)
})

exports.userCreated = functions.auth.user().onCreate((user) => {
    return admin.firestore().collection('users').doc(user.uid).get().then((info) => {
        const user = info.data()
        const notification = {
            context: 'Joined the team',
            user: `${user.firstName} ${user.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        }
        return addNotification(notification)

    })
    
})