const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.onCreateOrg = functions.firestore
  .document("/orgs/{orgId}")
  .onCreate(async (snapshot, context) => {
    const orgId = context.params.orgId;
    console.log(context.params)
    console.log(snapshot.data())
    const projectName = snapshot.data().projectName
    const creatorId = snapshot.data().creatorId
    const orgName = snapshot.data().name
    const projectsCollection = admin.firestore().collection('org-projects').doc(orgId).collection('projects')
    const userRef = admin.firestore().collection('users').doc(creatorId)
    try {
      await projectsCollection.add({
        name: projectName
      })
      await userRef.update({
        orgs: admin.firestore.FieldValue.arrayUnion({
          name: orgName,
          id: orgId,
          role: 'admin'
        })
      })
    } catch (error) {
      console.log('Error: ', error);
    }
    return
  })

// exports.onUpdateMessage = functions.firestore
// 	.document("/messages/{messageId}/chat-rooms/{chatRoomId}")
// 	.onUpdate(async (snapshot, context) => {
// 		const receiverId = context.params.messageId;
// 		const senderId = snapshot.before.data()['messages'][0]['ownerId'];
// 		if (receiverId !== senderId) {
// 			const userRef = admin
// 				.firestore()
// 				.collection('users')
// 				.doc(receiverId);
// 			try {
// 				await userRef.update({
// 					newMessagesCount: admin.firestore.FieldValue.increment(1)
// 				})
// 			} catch (error) {
// 				console.log('Error: ', error);
// 			}
// 		} else return;
// 	})