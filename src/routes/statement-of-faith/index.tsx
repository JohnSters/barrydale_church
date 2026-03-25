import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero" style={{
        background: 'linear-gradient(rgba(44, 62, 80, 0.6), rgba(44, 62, 80, 0.7))',
        backgroundImage: 'linear-gradient(rgba(44, 62, 80, 0.6), rgba(44, 62, 80, 0.7)), url(/images/bible.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '3rem'
      }}>
        <div class="container" style={{ textAlign: 'center' }}>
          <h1>Our Statement of Faith</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>
            The foundation of our beliefs and practices as followers of Christ
          </p>
        </div>
      </section>

      <div class="container" style={{ marginBottom: '4rem' }}>
        <div class="content-section" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem', textAlign: 'center' }}>
            Our church holds to the historic Christian faith as revealed in the Bible. While we have a detailed 
            constitution available for download, here are the core beliefs that guide our faith and practice:
          </p>
          
          <div class="beliefs-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div class="belief-card" style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--primary)',
                marginTop: '0',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: '0.5rem'
                }}></span><br />
                God
              </h3>
              <p style={{ margin: '0', lineHeight: '1.7' }}>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p>
            </div>
            
            <div class="belief-card" style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--primary)',
                marginTop: '0',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: '0.5rem'
                }}></span><br />
                Jesus Christ
              </h3>
              <p style={{ margin: '0', lineHeight: '1.7' }}>We believe in Jesus Christ, God's only Son, who was born of a virgin, lived a sinless life, died on the cross for our sins, rose from the dead, and will come again to establish His eternal kingdom.</p>
            </div>
            
            <div class="belief-card" style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--primary)',
                marginTop: '0',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: '0.5rem'
                }}></span><br />
                Holy Spirit
              </h3>
              <p style={{ margin: '0', lineHeight: '1.7' }}>We believe in the Holy Spirit who convicts of sin, regenerates believers, and empowers for godly living.</p>
            </div>
            
            <div class="belief-card" style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--primary)',
                marginTop: '0',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: '0.5rem'
                }}></span><br />
                Bible
              </h3>
              <p style={{ margin: '0', lineHeight: '1.7' }}>We believe the Bible is the inspired and authoritative Word of God, without error in its original manuscripts.</p>
            </div>
            
            <div class="belief-card" style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--primary)',
                marginTop: '0',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: '0.5rem'
                }}></span><br />
                Salvation
              </h3>
              <p style={{ margin: '0', lineHeight: '1.7' }}>We believe salvation is by grace alone through faith in Jesus Christ, not by works.</p>
            </div>
            
            <div class="belief-card" style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--primary)',
                marginTop: '0',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '4px',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: '0.5rem'
                }}></span><br />
                Church
              </h3>
              <p style={{ margin: '0', lineHeight: '1.7' }}>We believe in the universal Church, the body of Christ, of which all believers are members.</p>
            </div>
          </div>
          
          <div class="download-section" style={{
            backgroundColor: 'var(--light)',
            padding: '2.5rem',
            borderRadius: '8px',
            textAlign: 'center',
            marginTop: '2rem'
          }}>
            <h3 style={{
              color: 'var(--primary)',
              marginTop: '0',
              marginBottom: '1rem',
              fontSize: '1.8rem'
            }}>Full Constitution and Bylaws</h3>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              For a complete statement of our beliefs and church governance, please download our constitution:
            </p>
            <a 
              href="/docs/bic-constitution.doc" 
              class="btn" 
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                backgroundColor: 'var(--secondary)',
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver$={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(-2px)';
                target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseOut$={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = 'none';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Full Constitution
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Statement of Faith | Barrydale Christian Fellowship",
  meta: [
    {
      name: "description",
      content: "Learn about our core beliefs and statement of faith at Barrydale Christian Fellowship.",
    },
  ],
};
