import "./contact.scss";
import { contactInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="contact section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>contact</h4>
      </div>

      <div className="contact__container wrapper">
        <div className="contact__left" data-aos="fade-right">
          <h3>Just Say Hello</h3>

          <form action="#">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <input type="text" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Message"
              id="#"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn">Send Message</button>
          </form>
        </div>
        <div className="contact__right" data-aos="zoom-in-left">
          <h3>Contact Info</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            explicabo voluptas! Blanditiis distinctio maxime assumenda quam
            corporis laudantium pariatur nisi veniam minima. Amet itaque dicta
            ducimus reiciendis sit tempora fugit.
          </p>
          <div className="contact__info-container">
            {contactInfo.map(({ name, info, icon }) => (
              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <img src={icon} alt={name} />
                </div>
                <div className="contact__info-text">
                  <h4>{name}</h4>
                  <p>{info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact__copyright">
        @ 2024. For Submission in COMPFEST 2024 by Muhammad Arkun
      </div>
    </section>
  );
};

export default Contact;
