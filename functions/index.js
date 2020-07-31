const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.onCreateOrg = functions.firestore
  .document("/orgs/{orgId}")
  .onCreate(async (snapshot, context) => {
    const orgId = context.params.orgId;
    const projectName = snapshot.data().projectName
    const creatorId = snapshot.data().creatorId
    const orgName = snapshot.data().name
    const projectsCollection = admin.firestore().collection('orgs-projects').doc(orgId).collection('projects')
    const userRef = admin.firestore().collection('users').doc(creatorId)
    try {
      await projectsCollection.add({
        name: projectName
      })
      await userRef.update({
        currentOrg: orgId,
        orgs: admin.firestore.FieldValue.arrayUnion({
          orgName: orgName,
          orgId: orgId,
          role: 'admin'
        })
      })
    } catch (error) {
      console.log('Error: ', error);
    }
    return
  })

exports.onUpdateToOrgInvitation = functions.firestore
  .document("/invitations-to-orgs/{userEmail}/invitations/{invitationId}")
  .onUpdate(async (snapshot, context) => {
    const userEmail = context.params.userEmail;
    const userId = snapshot.before.data().userId
    const userName = snapshot.before.data().inviteeName
    const role = snapshot.before.data().role
    const orgId = snapshot.before.data().orgId
    const orgName = snapshot.before.data().orgName

    const orgRef = admin.firestore().collection('orgs').doc(orgId)
    const orgTeamRef = admin.firestore().collection('orgs-teams').doc(orgId).collection('team').doc(userId)
    const userRef = admin.firestore().collection('users').doc(userId)
    
    try {
      await orgRef.update({
        numberOfMembers: admin.firestore.FieldValue.increment(1)
      })
      await orgTeamRef.set({
        name: userName,
        role: role,
        id: userId,
        status: 'online',
        email: userEmail,
        position: '',
      })
      await userRef.update({
        currentOrg: orgId,
        orgs: admin.firestore.FieldValue.arrayUnion({
          orgName: orgName,
          orgId: orgId,
          role: role
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