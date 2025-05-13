import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase'; // 경로에 맞게 수정
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import '../css/guestbook.css';

function GuestBook() {
    const [writer, setWriter] = useState('');
    const [pwd, setPwd] = useState('');
    const [content, setContent] = useState('');
    const [guestbook, setGuestbook] = useState([]);

    useEffect(()=>{
        getGuestbook();
    }, []);

    const getGuestbook = async () => {
        try {
            const q = query(
                collection(db, "guestbook"),
                orderBy("createdAt", "desc")
            );

            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setGuestbook(data);
        } catch (err) {
            console.error("데이터 불러오기 실패:", err);
        }
    };

    const saveData = async () => {
        if (writer.trim() === '' || writer === undefined) {
            window.alert("이름을 입력하세요.");
            return;
        } else if (content.trim() === '' || content === undefined) {
            window.alert("내용을 입력하세요.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "guestbook"), {
                writer: writer,
                content: content,
                createdAt: new Date()
            });
            console.log("Document written with ID: ", docRef.id);

            setWriter('');
            setContent('');

            getGuestbook();

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const dateOptions = {
        weekday: 'short',  // 'Mon', 'Tue' 같은 약식 요일
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // 12시간 형식으로 표시
    }
    
    return (
        <div className="guestbook-container">
            <ul className="guestbook-list">
                {guestbook.map(item=> (
                    <li key={item.id}>
                        <span>{item.writer}: {item.content}</span>
                        <span id="write-date">{item.createdAt.toDate().toLocaleString('en-US', dateOptions)}</span>
                    </li>
                ))}
            </ul>
            <div className="guestbook-form">
                <div>
                    <div>
                        <input type="text" id="writer" value={writer} onChange={e => setWriter(e.target.value)}
                            placeholder='이름을 입력해주세요.' maxLength={12}
                        />
                        <input type="password" id="pwd" value={pwd} onChange={e => setPwd(e.target.value)}
                            placeholder='비밀번호를 입력해주세요.' maxLength={12}
                        />
                    </div>
                    <textarea id="content" value={content} onChange={e => setContent(e.target.value)}
                        placeholder='내용을 입력해주세요.' maxLength={300}
                    />
                </div>
                <button onClick={saveData} id="guestbook-enter-btn">Enter</button>
            </div>
        </div>
    )
}

export default GuestBook;