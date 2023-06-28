import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const convertor = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      ...data,
    };
  },
};
/*
The code you provided defines a `convertor` object that acts as a data converter for Firestore documents. Let's break it down:

1. The `convertor` object has a single method called `fromFirestore`, which is used to transform the snapshot data retrieved from Firestore.

2. The `fromFirestore` method takes two parameters:
   - `snapshot`: This parameter represents the snapshot of the Firestore document.
   - `options`: This parameter represents the options for the snapshot data.

3. Inside the `fromFirestore` method, the `snapshot.data(options)` call retrieves the data from the snapshot using the provided options.

4. The `fromFirestore` method returns an object that includes the transformed data. It adds a new property called "id" to the returned object,
 which represents the ID of the document. It uses `snapshot.id` to retrieve the document ID.

5. The spread operator (`...data`) is used to include all the properties from the original snapshot data object in the returned object. 
This ensures that all the existing data in the document is preserved.

In summary, the `convertor` object defines a `fromFirestore` method that transforms Firestore document snapshots by adding the document ID as a 
separate property in the returned object. This allows you to easily access the document ID along with the other data when using 
the `useCollectionData` hook or other Firestore functions that utilize the data converter. 
*/

export const getBoardsForUser = (userId) => {
  return useCollectionData(
    query(
      collection(db, "boards").withConverter(convertor),
      where("userId", "==", userId)
    )
  );
};

export const updateBoard = async (id, data) => {
  return await updateDoc(doc(db, "boards", id), data);
};

export const createBoard = async (userId, name) => {
  return await addDoc(collection(db, "boards"), {
    userId: userId,
    name: name,
  });
};

export const deleteBoard = async (id) => {
  return await deleteDoc(doc(db, "boards", id));
};

//Inside the function, it uses the deleteDoc function from Firestore to delete the specified document. The deleteDoc function takes a single argument: the reference to the document to be deleted. 
//In this case, the doc function is used to create a reference to the document using the Firestore database, the collection name ("boards"), and the provided id.
//The function is marked as asynchronous with the async keyword, indicating that it returns a promise that will resolve to the result of deleting the document. 
//The await keyword is used to wait for the completion of the deleteDoc function before returning the result.

export const getFlashcardsForCategory = (category) => {
  return useCollectionData(
    query(
      collection(db, "constant_flashcards").withConverter(convertor),
      where("category", "==", category)
    )
  );
};
// getFlashcardsForCategory function utilizes the useCollectionData hook to fetch flashcards from the Firestore database based on a specific category.
