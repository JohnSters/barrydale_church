import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero" style={{
        background: 'linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.8))',
        backgroundImage: 'url(/images/worship.jpg)',
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
          <h1>Our Church History</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>
            A Journey of Faith, Community, and God's Faithfulness
          </p>
        </div>
      </section>

      <div class="container" style={{ marginBottom: '4rem' }}>
        <div class="content-section" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '2.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              color: 'var(--primary)',
              marginTop: '0',
              marginBottom: '1.5rem',
              fontSize: '2rem',
              textAlign: 'center',
              position: 'relative',
              paddingBottom: '1rem'
            }}>
              <span style={{
                display: 'block',
                width: '60px',
                height: '4px',
                backgroundColor: 'var(--secondary)',
                margin: '0 auto 1rem',
                borderRadius: '2px'
              }}></span>
              Our Rich Heritage
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              lineHeight: '1.8'
            }}>
              <p style={{ fontSize: '1.1rem', margin: '0 0 1.5rem' }}>
                The Barrydale Christian Fellowship has a rich history of serving our community and spreading the Gospel. 
                From our humble beginnings to the present day, God has been faithful in guiding our congregation.
              </p>
              
              <div style={{
                backgroundColor: 'var(--light)',
                padding: '1.5rem',
                borderRadius: '8px',
                margin: '1.5rem 0',
                borderLeft: '4px solid var(--secondary)'
              }}>
                <h3 style={{
                  color: 'var(--primary)',
                  marginTop: '0',
                  marginBottom: '1rem',
                  fontSize: '1.3rem'
                }}>
                  Our Founding
                </h3>
                <p style={{ margin: '0' }}>
                  Established in [YEAR], our church was founded by a small group of believers committed to biblical teaching 
                  and community outreach. What began as a home Bible study has grown into a vibrant community of faith.
                </p>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                margin: '2rem 0'
              }}>
                <div>
                  <h3 style={{
                    color: 'var(--primary)',
                    marginTop: '0',
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--secondary)',
                      borderRadius: '50%'
                    }}></span>
                    Our Mission
                  </h3>
                  <p style={{ margin: '0' }}>
                    To make disciples of Jesus Christ who love God, love people, and serve the world with the transforming 
                    power of the Gospel.
                  </p>
                </div>
                
                <div>
                  <h3 style={{
                    color: 'var(--primary)',
                    marginTop: '0',
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--secondary)',
                      borderRadius: '50%'
                    }}></span>
                    Our Vision
                  </h3>
                  <p style={{ margin: '0' }}>
                    To be a Christ-centered community that transforms lives through authentic worship, biblical teaching, 
                    and compassionate service.
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
                Over the years, our church has been blessed to see countless lives transformed by the power of the Gospel. 
                We've grown from a small gathering to a thriving congregation, but our commitment to biblical truth and 
                community impact remains unchanged.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--light)',
              padding: '2rem',
              borderRadius: '8px',
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{
                color: 'var(--primary)',
                marginTop: '0',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                Explore Our Full History
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                For a detailed account of our church's journey, including key milestones and God's faithfulness through the years, 
                download our complete church history document.
              </p>
              <a
                href="/downloads/Barrydale-Christian-Fellowship-History.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                  transition: 'all 0.3s ease',
                  margin: '0 auto',
                  transform: 'translateY(0)',
                  boxShadow: 'none'
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
                Download Full History (PDF)
              </a>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '2.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              color: 'var(--primary)',
              marginTop: '0',
              marginBottom: '1.5rem',
              fontSize: '2rem',
              textAlign: 'center',
              position: 'relative',
              paddingBottom: '1rem'
            }}>
              <span style={{
                display: 'block',
                width: '60px',
                height: '4px',
                backgroundColor: 'var(--secondary)',
                margin: '0 auto 1rem',
                borderRadius: '2px'
              }}></span>
              Our Timeline
            </h2>
            
            <div style={{
              position: 'relative',
              paddingLeft: '2rem',
              margin: '2rem 0',
              borderLeft: '2px solid var(--secondary)'
            }}>
              {[
                { 
                  year: '19XX', 
                  title: 'The Beginning', 
                  description: 'A small group of believers began meeting in homes for Bible study and prayer.' 
                },
                { 
                  year: '19XX', 
                  title: 'First Church Building', 
                  description: 'Our first church building was constructed on [Location].' 
                },
                { 
                  year: '20XX', 
                  title: 'Expanding Our Reach', 
                  description: 'We launched our first community outreach programs and saw significant growth in our congregation.' 
                },
                { 
                  year: 'Present', 
                  title: 'Continuing the Legacy', 
                  description: 'Today, we continue to serve our community and share the love of Christ with future generations.' 
                }
              ].map((event, index) => (
                <div key={index} class="timeline-item" style={{
                  position: 'relative',
                  paddingBottom: '2rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '0',
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{
                    color: 'var(--primary)',
                    margin: '0 0 0.5rem',
                    fontSize: '1.3rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      color: 'var(--secondary)',
                      fontWeight: 'bold',
                      marginRight: '0.5rem'
                    }}>
                      {event.year}
                    </span>
                    {event.title}
                  </h3>
                  <p style={{ margin: '0 0 0 4rem' }}>{event.description}</p>
                </div>
              ))}
            </div>
            
            <p style={{
              textAlign: 'center',
              fontStyle: 'italic',
              color: 'var(--text-light)',
              margin: '2rem 0 0'
            }}>
              "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." - Lamentations 3:22-23
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Church History | Barrydale Christian Fellowship",
  meta: [
    {
      name: "description",
      content: "Explore the rich history of Barrydale Christian Fellowship, our journey of faith, and God's faithfulness through the years.",
    },
  ],
};
