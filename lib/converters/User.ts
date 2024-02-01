// Convertor are responsible for how we push and pull data in our database
// so in this case for subscription wee push data to firestore

import { db } from "@/firebase";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  query,
  where,
} from "firebase/firestore";

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}

const userConvertor: FirestoreDataConverter<User> = {
  // when we push data to the firestore well'l push it in the form of a subscription
  toFirestore: (user: User): DocumentData => {
    return {
      email: user.email,
      name: user.name,
      image: user.image,
    };
  },
  // the that we expect to pull out from db
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      email: data.email,
      name: data.name,
      image: data.image,
    };
  },
};

export const getUserByEmailRef = (email: string) =>
  query(collection(db, "users"), where("email", "==", email)).withConverter(
    userConvertor
  );
