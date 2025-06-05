import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero" style={{
        background: 'linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.8))',
        backgroundImage: 'url(/images/cross-on-hill.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '3rem'
      }}>
        <div class="container">
          <h1>Welcome to Our Church Family</h1>
          <p>For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.</p>
          <div class="hero-buttons" style={{ marginTop: '1.5rem' }}>
            <a href="/contact" class="btn">Worship With Us This Sunday</a>
            <a href="/contact" class="btn btn-outline">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section class="section">
        <div class="container">
          <h2 class="section-title">You're Welcome Here</h2>
          <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem;">
            Whether you're just beginning to explore faith or have been walking with Jesus for years, there's a place for you here. 
            We're a family of believers in Barrydale who gather to worship our Savior, study God's Word, and encourage one another in love.
          </p>
        </div>
      </section>

      {/* Core Beliefs */}
      <section class="section" style="background-color: var(--light);">
        <div class="container">
          <h2 class="section-title">Our Core Beliefs</h2>
          <div class="cards">
            <div class="card">
              <div class="card-content">
                <h3>Jesus Christ is Lord</h3>
                <p>We believe that Jesus Christ is the Son of God, fully God and fully man, who came to earth to save sinners.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h3>Salvation by Grace</h3>
                <p>We believe that salvation is a free gift of God's grace, received through faith in Jesus Christ alone.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h3>Bible as God's Word</h3>
                <p>We believe the Bible is the inspired and authoritative Word of God, our guide for faith and practice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section class="section">
        <div class="container">
          <h2 class="section-title">Come and See</h2>
          <div class="cards">
            <div class="card">
              <div class="card-content">
                <h3>Sunday Service</h3>
                <p><strong>Time:</strong> 10:00 AM - 11:00 AM</p>
                <p><strong>Location:</strong> Main Sanctuary</p>
                <p>Join us for worship, prayer, and biblical teaching.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h3>Bible Study</h3>
                <p><strong>Time:</strong> Wednesday, 9:30 AM (Church Hall)</p>
                <p>Midweek Bible study and fellowship.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h3>Youth Service</h3>
                <p><strong>Status:</strong> Coming Soon</p>
                <p><strong>Details:</strong> Planned for the future</p>
                <p>Check back for updates on our youth program.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div class="container">
          <h2 style={{ color: 'white' }}>Need Prayer or Have Questions?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            We're here for you. Whether you need prayer, have questions about faith, or just want to chat, we'd love to walk alongside you.
          </p>
          <a href="/contact" class="btn" style={{ background: 'white', color: 'var(--primary)' }}>Let's Talk</a>
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
  title: "Barrydale Christian Fellowship - Home",
  meta: [
    {
      name: "description",
      content: "Barrydale Christian Fellowship - A Christ-centered community in Barrydale, committed to sharing the Gospel and making disciples of Jesus Christ.",
    },
  ],
};
