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

export const getFlashcardsForCategory = (category) => {
  return useCollectionData(
    query(
      collection(db, "constant_flashcards").withConverter(convertor),
      where("category", "==", category)
    )
  );
};
