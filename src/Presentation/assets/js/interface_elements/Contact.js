import React from 'react';

const Contact = function() {
    return(
        <div className="Landing__Contact Text__Landing">
            <h1>По вопросам сотрудничества</h1>
            <p>
                Если вы ищете разработчика или просто хотите задать вопрос, 
                я всегда буду рад вас выслушать. Обращайтесь!
            </p>
            <address>
                <p>
                    <a className="Link Link__Text Link__Text__Active Text__Link Text__Link__Bold" 
                    href="mailto:tech.shumichenko@mail.ru">tech.shumichenko@mail.ru</a><br /><br />
                    <a className="Link Link__Text Link__Text__Active Text__Link Text__Link__Bold" 
                    href="tel:+79785825560">8 (978) 582-55-60</a>
                </p>
            </address>
        </div>
    );
};

export default Contact;