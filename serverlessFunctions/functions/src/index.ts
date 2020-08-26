import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /messages/:documentId/original
//export const addMessage = functions.https.onRequest(async (req, res) => {
 // Grab the text parameter.
  //const original = req.query.text;
//   Push the new message into Cloud Firestore using the Firebase Admin SDK.
  //const writeResult = await admin.firestore().collection('messages').add({original: original});
   //Send back a message that we've succesfully written the message
  //res.json({result: `Message with ID: ${writeResult.id} added.`});
//});

exports.addedNeededFieldsToAlbum = functions.firestore.document('/albums/{documentId}')
    .onCreate((snap, context) => {
      // Grab the current value of what was written to Cloud Firestore.
      //const data = snap.data();

      const addedData = {
        status: 'Não escolhido',
        link: context.params.documentId
      }
      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log('Salvando documento', context.params.documentId);
      
      
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to Cloud Firestore.
      // Setting an 'uppercase' field in Cloud Firestore document returns a Promise.
      return snap.ref.set(addedData, {merge: true});
    });