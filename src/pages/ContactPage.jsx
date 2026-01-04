import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import AnimatedSection from '../component/AnimatedSection';
import './ContactPage.css';

const ContactPage = () => {
  const [status, setStatus] = useState('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setTimeout(() => { setStatus('idle'); reset(); }, 3000);
  };

  return (
    <div className="contact-page-wrapper">
      <AnimatedSection>
        <div className="main-card">
          <div className="info-panel">
            <h1>Let's build the future.</h1>
            <p className="subtext">Reach out to the dehydrated food experts.</p>

            <div className="contact-pill"><Mail size={20} color="#00d4ff" /> <span>kartikpaliwal991@gmail.com</span></div>
            <div className="contact-pill"><Phone size={20} color="#00d4ff" /> <span>(+91) 7436041801</span></div>
            <div className="contact-pill"><MapPin size={20} color="#00d4ff" /> <span>Gujarat, India</span></div>
          </div>

          <div className="form-panel">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-container">
                <label>Name</label>
                <input {...register('name', { required: true })} className="modern-input" placeholder="Your Name" />
              </div>
              <div className="input-container">
                <label>Email</label>
                <input {...register('email', { required: true })} className="modern-input" placeholder="Email" />
              </div>
              <div className="input-container">
                <label>Message</label>
                <textarea {...register('message', { required: true })} className="modern-input" rows="3" placeholder="How can we help?" />
              </div>

              <button type="submit" className="shiny-button" disabled={status === 'sending'}>
                {status === 'idle' && <>Send Message <ArrowRight size={18} /></>}
                {status === 'sending' && "Sending..."}
                {status === 'success' && "Sent Successfully! ✓"}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;