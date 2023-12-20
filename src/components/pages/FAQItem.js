

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { db } from '../firebase.js';
import { useParams } from 'react-router-dom';

const FAQItem = () => {
    const { qid } = useParams();
    console.log(qid);
    const [questionData, setQuestionData] = useState(null);

    
    useEffect(() => {
        const questionId = qid;

        const getQuestion = async () => {
            try {
                console.log(questionId);
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
    }, [qid]);

    if (!questionData) {
        // Додайте тут логіку, якщо дані не завантажено
        return <p>Loading...</p>;
    }
    // eslint-disable-next-line
    const { que, answ, id, keywords } = questionData;

    return (
        <>
            <Helmet>
                <meta name="description" content="Ласкаво просимо в Attire, де мода поєднується з комфортом, а стиль переплітається з доступністю." />
                <meta name="keywords" content={keywords}/>
                <title>Attire - Answer {'id'}</title>
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

export default FAQItem;