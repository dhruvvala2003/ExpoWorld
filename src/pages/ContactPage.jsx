import React from 'react';
import { useForm } from 'react-hook-form';
import AnimatedSection from '../component/AnimatedSection';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <AnimatedSection>
          <div className="row">
            <div className="col-md-8">
              <h3>Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" {...register('name', { required: true })} />
                  {errors.name && <span className="error">Name is required</span>}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                  {errors.email && <span className="error">A valid email is required</span>}
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" {...register('companyName')} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" {...register('phone')} />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea {...register('message', { required: true })}></textarea>
                  {errors.message && <span className="error">Message is required</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-4">
              <h3>Our Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019539579725!2d-122.4194154846813!3d37.77492957975837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c39d8c8a9%3A0x8f6b3ba2a8a2a5f5!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="contact-details">
                <p><strong>Address:</strong> 123 Food Lane, Flavor Town, USA</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> info@expoworld.com</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
