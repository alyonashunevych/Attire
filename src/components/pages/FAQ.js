import React from 'react';
import { Helmet } from 'react-helmet';
import { db } from '../firebase.js'


/* const FAQPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Helmet>
                <meta name="description" content="Ласкаво просимо в Attire, де мода поєднується з комфортом, а стиль переплітається з доступністю. У нашому онлайн-магазині ми підбираємо різноманітну колекцію одягу та аксесуарів для жінок, чоловіків і дітей, а також чудовий вибір предметів домашнього декору." />
                <title>Attire - FAQ</title>
            </Helmet>

            <div className='content'>
                <div className="delmain">
                    <h1 className='title_MA40_Faq'>Frequently Asked Questions (FAQ)</h1>
                    <div className='faq-question'>
                        <div className='acc_butt2'>
                            <p className='login_text'>1. What is Attire Online Store?</p>
                            <div className='arrow_login' />
                        </div>
                    </div>
                    <div className='faq-question'>
                        <div className='acc_butt2'>
                            <p className='login_text'>2. What can I find at the Online fashion store?</p>
                            <div className='arrow_login' />
                        </div>
                    </div>
                    <div className='faq-question'>
                        <div className='acc_butt2'>
                            <p className='login_text'>3. What is Stylish clothing for men and women?</p>
                            <div className='arrow_login' />
                        </div>
                    </div>
                    <div className='faq-question'>
                        <div className='acc_butt2'>
                            <p className='login_text'>4. What can I find in the new collections and fresh trends?</p>
                            <div className='arrow_login' />
                        </div>
                    </div>
                    <div className='faq-question'>
                        <div className='acc_butt2'>
                            <p className='login_text'>5. How can I stay updated on the latest arrivals and promotions?</p>
                            <div className='arrow_login' />
                        </div>
                    </div>
                    <div className='faq-question'>
                        <div className='acc_butt2'>
                            <p className='login_text'>6. What are Fashionable products for home?</p>
                            <div className='arrow_login' />
                        </div>
                    </div>
                    <div className='faq-question'>
                        <div className='acc_butt2'>
                            <p className='login_text'>7. What is the commitment to High-quality products?</p>
                            <div className='arrow_login' />
                        </div>
                    </div>
                    <div className='faq-question'>
                        <p className="thanks">Thank you for shopping with us!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQPage;
 */

const FAQPage = () => {
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
                        <li key={faq.id}>
                            <Link to={`/faq/${faq.id}`}>{faq.que}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
};

const FAQItem = ({ match }) => {
    const faqId = parseInt(match.params.id, 10);
    const [faq, setFaq] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const faqsCollection = firebase.firestore().collection('yourCollectionName'); // Replace 'yourCollectionName' with your Firestore collection name
            const doc = await faqsCollection.doc(faqId.toString()).get();

            if (doc.exists) {
                setFaq(doc.data());
            }
        };

        fetchData();
    }, [faqId]);

    if (!faq) {
        return <div>FAQ not found</div>;
    }

    return (
        <div>
            <h2>{faq.que}</h2>
            <p>{faq.answ}</p>
        </div>
    );
};