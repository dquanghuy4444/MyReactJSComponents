//service_f3lwnli
import { useState } from 'react';
import { send , init } from 'emailjs-com';
init("user_fd0xV7iJJIZznTMf5y4at");
// get message from customer to my mail
function EmailJS() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_f3lwnli',
          'template_ck1l3xc',
          toSend,
          'user_fd0xV7iJJIZznTMf5y4at'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

  return (
    <form onSubmit={onSubmit}>
    <input
        type='text'
        name='from_name'
        placeholder='from name'
        value={toSend.from_name}
        onChange={handleChange}
    ></input>
    <input
        type='text'
        name='to_name'
        placeholder='to name'
        value={toSend.to_name}
        onChange={handleChange}
        ></input>
    <input
        type='text'
        name='message'
        placeholder='Your message'
        value={toSend.message}
        onChange={handleChange}
        ></input>
    <input
        type='text'
        name='reply_to'
        placeholder='Your email'
        value={toSend.reply_to}
        onChange={handleChange}
        ></input>
    <button type='submit'>Submit</button>
    </form>
  );
}

export default EmailJS;

