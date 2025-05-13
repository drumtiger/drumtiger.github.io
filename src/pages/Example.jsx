import { db } from '../firebase/firebase'; // 경로에 맞게 수정
import { collection, addDoc } from 'firebase/firestore';

const saveData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Hyun",
      age: 27,
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default function Example() {
  return <button onClick={saveData}>데이터 저장</button>;
}