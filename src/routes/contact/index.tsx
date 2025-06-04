import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero" style={{
        background: 'linear-gradient(rgba(44, 62, 80, 0.6), rgba(44, 62, 80, 0.7))',
        backgroundImage: 'url(/images/prayer.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div class="container">
          <h1>Let's Connect</h1>
          <p>We're here to listen, pray, and walk alongside you. Whether you have questions about faith, need prayer, or just want to chat, we'd love to hear from you.</p>
          <div class="hero-buttons" style={{ marginTop: '1.5rem' }}>
            <a href="/" class="btn">Back Home</a>
            <a href="#contact-form" class="btn btn-outline">Share Your Heart</a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section class="section">
        <div class="container">
          <h2 class="section-title">Church Info</h2>
          <div class="cards">
            {/* Contact Information */}
            <div class="card">
              <div class="card-content">
                <h2>Our Church Family</h2>
                <div class="contact-info">
                  <div class="contact-item">
                    <h3>Address</h3>
                    <p>123 Church Street<br />Barrydale, 6750<br />South Africa</p>
                  </div>
                  <div class="contact-item">
                    <h3>Phone</h3>
                    <p>+27 28 572 1234</p>
                  </div>
                  <div class="contact-item">
                    <h3>Email</h3>
                    <p>info@barrydalechurch.org.za</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div class="card">
              <div class="card-content">
                <h2>Gather With Us</h2>
                <div class="service-times">
                  <div class="service-item">
                    <h3>Sunday Morning Service</h3>
                    <p>10:00 AM - 11:30 AM</p>
                  </div>
                  <div class="service-item">
                    <h3>Wednesday Bible Study</h3>
                    <p>7:00 PM - 8:30 PM</p>
                  </div>
                  <div class="service-item">
                    <h3>Friday Youth Group</h3>
                    <p>6:30 PM - 8:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section class="section" style={{ backgroundColor: 'var(--light)' }}>
        <div class="container">
          <h2 class="section-title">Find Us</h2>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.123456789012!2d20.7235833!3d-33.9098889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc123456789abc%3A0x1234567890abcdef!2sBarrydale%20Christian%20Fellowship!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullscreen={true}
              loading="lazy"
              title="Barrydale Christian Fellowship Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" class="section">
        <div class="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 class="section-title">We'd Love to Hear From You</h2>
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" class="btn" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div class="container">
          <p>© {new Date().getFullYear()} Barrydale Christian Fellowship. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact Us - Barrydale Christian Fellowship",
  meta: [
    {
      name: "description",
      content: "Get in touch with Barrydale Christian Fellowship. Find our location, service times, and contact information.",
    },
  ],
};
