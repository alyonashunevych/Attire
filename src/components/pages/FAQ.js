import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { db } from '../firebase.js'

const FAQPage = () => {
    window.scrollTo(0, 0);
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {

        // Fetch FAQ data from Firebase Firestore
        const fetchData = async () => {
            const faqsCollection = db.collection('FAQ');
            const snapshot = await faqsCollection.get();

            const faqData = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                faqData.push(data);
            });

            setFaqs(faqData);
        };

        fetchData();
    }, []);

    return (
        
        <>
        <Helmet>
            <meta name="description" content="Ласкаво просимо в Attire, де мода поєднується з комфортом, а стиль переплітається з доступністю. У нашому онлайн-магазині ми підбираємо різноманітну колекцію одягу та аксесуарів для жінок, чоловіків і дітей, а також чудовий вибір предметів домашнього декору." />
            <title>Attire - FAQ</title>
        </Helmet>
        <div className='content'>
            <div className="delmain">
                <h1 className='title_MA40_Faq'>Frequently Asked Questions (FAQ)</h1>
                <ul>
                    {faqs.map((faq) => (
                        <div className='faq-question'>
                        <div className='acc_butt2'>
                        <li key={faq.id}>
                            <NavLink to={`/faq/${faq.id}/`} className={'login_text'}>{faq.que}</NavLink>
                            <div className='arrow_login' />
                        </li>
                        </div>
                    </div>
                    ))}
                </ul>
                <div className='faq-question'>
                        <p className="thanks">Thank you for shopping with us!</p>
                    </div>
            </div>
        </div>
        </>
    );
};
export default FAQPage;
