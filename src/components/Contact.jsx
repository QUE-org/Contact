import React from 'react';
import Form from 'react-bootstrap/Form';
import {Helmet} from 'react-helmet'

function Contact() {
  const mail = "que2020@googlegroups.com"
  const contactTypes = [
    "イベントの内容について",
    "イベント参加方法について",
    "その他"
  ]

  return (
    <div className="contact-form">
      <Helmet>
        <title>QUE お問い合わせ</title>
      </Helmet>
      <h2 className="title">Contact</h2>
      <form method="POST" action={"https://formspree.io/" + mail} >
        <p>お問い合わせの種類</p>
        <Form.Control name='お問い合わせの種類' as="select">
          {
            contactTypes.map((t) => (<option key={t} value={t}>{t}</option>))
          }
        </Form.Control>
        <p>お名前</p>
        <input type='text' name='お名前' placeholder="佐藤　太郎" />
        <p>メールアドレス</p>
        <input type="email" name="返信先" placeholder="you@example.com"/>
        
        <p>お問い合わせ内容</p>
        <textarea name='お問い合わせ内容'></textarea>
        <input className='submit' type="submit" value='Send'/>
      </form>
    </div>
  );
}

export default Contact;