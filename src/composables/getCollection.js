import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  // create real time listener (snapshot takes two callbacks as arguments - second one is for errors)
  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // update values of refs
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch the data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents };
};

export default getCollection;
