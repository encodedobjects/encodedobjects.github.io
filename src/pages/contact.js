import React from "react";

const About = () => (
  <div className="container">
    <section className="section">
      <div className="content is-medium">
        <h1>Get in Touch</h1>
        <p>
          Interesting in one of our pieces? Or, maybe you just want to say
          hello? Drop us a line.
        </p>

        <form
          action="https://formspree.io/encodedobjects@gmail.com"
          method="POST"
          className="contact-form"
        >
          <div className="field">
            <label htmlFor="contact-name" className="label">
              Your Name
            </label>
            <div className="control">
              <input
                id="contact-name"
                className="input"
                name="name"
                type="text"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contact-email" className="label">
              Your Email
            </label>
            <div className="control">
              <input
                id="contact-email"
                className="input"
                name="email"
                type="email"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contact-message" className="label">
              Your Message
            </label>
            <div className="control">
              <textarea
                className="textarea"
                name="message"
                rows="4"
                id="contact-message"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input type="submit" className="button" value="Send →" />
            </div>
          </div>

          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input type="hidden" name="_subject" value="Portfolio Contact" />
          {/* <input
                type="hidden"
                name="_next"
                value="//encodedobjects.io/contact.html?contact=1"
              /> */}
        </form>
      </div>
    </section>
  </div>
);

export default About;
