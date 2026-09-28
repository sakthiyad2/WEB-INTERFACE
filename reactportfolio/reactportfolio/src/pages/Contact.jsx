function Contact() {
  return (
    <section className="contact-page">

      <div className="page-container">

        <h1>Contact Me</h1>

        <p className="section-description">
          Feel free to connect with me for opportunities, collaborations or
          project discussions.
        </p>

        <div className="contact-content">

          <div className="contact-info">

            <h2>Let's Connect</h2>

            <p>
              Email: sakthiyad2@gmail.com
            </p>

            <p>
              GitHub: github.com/sakthiyad2
            </p>

            <p>
              LinkedIn: linkedin.com/in/sakthiya-d
            </p>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;