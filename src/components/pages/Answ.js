import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { db, storage } from './firebase.js';

const AnswerPage = ({ match }) => {
    const [questionData, setQuestionData] = useState(null);

    useEffect(() => {
        const questionId = match.params.id;

        const getQuestion = async () => {
            try {
                const doc = await db.collection("FAQ").doc(questionId).get();

                if (doc.exists) {
                    const data = doc.data();
                    setQuestionData({ ...data });
                } else {
                    console.log("Document not found");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        getQuestion();
    }, [match.params.id]);

    if (!questionData) {
        // Додайте тут логіку, якщо дані не завантажено
        return <p>Loading...</p>;
    }

    const { que, answ, id, keywords } = questionData;

    return (
        <>
            <Helmet>
                <meta name="description" content="Ласкаво просимо в Attire, де мода поєднується з комфортом, а стиль переплітається з доступністю." />
                <meta name="keywords" content={keywords}/>
                <title>Attire - Answer {id}</title>
            </Helmet>

            <div className='content'>
                <div className="delmain">
                    <h1 className='title_MA40_Faq'>Frequently Asked Questions (FAQ)</h1>
                
                    <div className='faq-question'>
                        <p className='ques'>{que}</p>
                        <p className='answ'>{answ}</p>
                    </div>
                    
                    <div className='faq-question'>
                        <p className="thanks">Thank you for shopping with us!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnswerPage;