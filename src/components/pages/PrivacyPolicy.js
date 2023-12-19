import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Helmet>
                <title>Attire - Privacy Policy</title>
            </Helmet>

            <div className='content'>
                <div className="delmain">
                    <h1 className='title_MA40'>Privacy Policy</h1>
                    <div className='faq-question'>
                        <p className='ques'>Personal Information</p>
                        <p className='answ'>When you visit our website, we may collect certain personally identifiable information, such as your name, email address, and contact details. We collect this information when you voluntarily provide it to us, such as when you subscribe to our newsletter or create an account.</p>
                    </div>
                    <div className='faq-question'>
                        <p className='ques'>Usage Data</p>
                        <p className='answ'>We may also collect information on how the website is accessed and used. This usage data may include your computer's Internet Protocol address, browser type, browser version, the pages you visit, the time and date of your visit, and other statistics.</p>
                    </div>
                    <div className='faq-question'>
                        <p className='ques'>Data Security</p>
                        <p className='answ'>The security of your data is important to us, but please be aware that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                    </div>
                    <div className='faq-question'>
                        <p className='ques'>Cookies</p>
                        <p className='answ'>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                    </div>
                    <div className='faq-question'>
                        <p className='ques'>Third-Party Links</p>
                        <p className='answ'>Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                    </div>
                    <div className='faq-question'>
                        <p className='ques'>Changes to This Privacy Policy</p>
                        <p className='answ'>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    </div>
                    <div className='faq-question'>
                        <p className='ques'>Contact Us</p>
                        <p className='answ'>If you have any questions about this Privacy Policy, please contact us at attire@gmail.com.</p>
                    </div>
                    <div className='faq-question'>
                        <p className="thanks">Thank you for shopping with us!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
