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
        minHeight: '400px',
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
                <p style={{ margin: '0 0 1rem' }}>
                  The Barrydale Christian Fellowship was established in 1978 by a small group of believers who were committed to biblical teaching and community outreach. What began as a home Bible study has grown into a vibrant community of faith.
                </p>
                <p style={{ margin: '0' }}>
                  Our first church building was constructed in 1982 through the dedicated efforts of our founding members and has since been a beacon of hope in the Barrydale community.
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
              
              <div style={{ margin: '3rem 0' }}>
                <h3 style={{
                  color: 'var(--primary)',
                  marginTop: '0',
                  marginBottom: '2rem',
                  fontSize: '1.8rem',
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
                  Our Journey Through Time
                </h3>

                <div style={{
                  position: 'relative',
                  maxWidth: '800px',
                  margin: '0 auto',
                  padding: '0 1.5rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    width: '4px',
                    backgroundColor: 'var(--secondary)',
                    top: '0',
                    bottom: '0',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px'
                  }}></div>
                  
                  {[
                    {
                      year: '1988',
                      title: 'The Vision Begins',
                      content: 'Vollie Strydom arrives in Barrydale and recognizes the need for an English-speaking church in the community.'
                    },
                    {
                      year: '1989',
                      title: 'First Service',
                      content: 'The first service is held on April 9th in the old municipal offices, led by Rev. Charlesworth. A committee is formed with Vollie Strydom as chairman.'
                    },
                    {
                      year: '1989-1997',
                      title: 'Early Years',
                      content: 'Monthly services continue, moving to the library hall after the Farmers\' Association relocates. The congregation grows through the dedication of ministers and lay preachers serving voluntarily.'
                    },
                    {
                      year: '1990s',
                      title: 'Land Donation',
                      content: 'Handjievol Odendaal donates a plot of land for the church building. Fundraising efforts begin through various community initiatives.'
                    },
                    {
                      year: '1997',
                      title: 'Dream Realized',
                      content: 'The church building is completed and officially opened on February 23rd, 1997. The opening ceremony includes recognition of all who contributed to making the dream a reality.'
                    }
                  ].map((item, index) => (
                    <div key={index} class="timeline-item" style={{
                      position: 'relative',
                      marginBottom: '3rem',
                      padding: '0 0 0 3rem'
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: 'calc(50% - 35px)',
                        backgroundColor: 'white',
                        border: '3px solid var(--secondary)',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: 'var(--primary)'
                      }}>
                        {index + 1}
                      </div>
                      <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '0.75rem'
                        }}>
                          <span style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            backgroundColor: 'var(--secondary)',
                            borderRadius: '50%',
                            marginRight: '0.75rem',
                            flexShrink: 0
                          }}></span>
                          <h4 style={{
                            margin: '0',
                            color: 'var(--primary)',
                            fontSize: '1.2rem'
                          }}>
                            {item.year}: {item.title}
                          </h4>
                        </div>
                        <p style={{ margin: '0', lineHeight: '1.6' }}>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  backgroundColor: 'var(--light)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  marginTop: '2rem',
                  borderLeft: '4px solid var(--secondary)'
                }}>
                  <h4 style={{
                    color: 'var(--primary)',
                    marginTop: '0',
                    marginBottom: '1rem',
                    fontSize: '1.3rem'
                  }}>
                    Special Thanks
                  </h4>
                  <p style={{ margin: '0 0 1rem' }}>
                    We are eternally grateful to all who contributed to making Barrydale Christian Fellowship a reality, including:
                  </p>
                  <ul style={{
                    paddingLeft: '1.5rem',
                    margin: '0 0 1rem',
                    columns: '2',
                  }}>
                    <li>Rev. Edward Charlesworth (first minister)</li>
                    <li>Vollie Strydom (founding chairman)</li>
                    <li>Mimpie Luden (founding secretary/treasurer)</li>
                    <li>Mrs Jessie McCarthy (committee member)</li>
                    <li>Mrs Aalwyn Marais (committee member)</li>
                    <li>Mrs Anne Smith (committee member)</li>
                    <li>Shaun Herbert (builder)</li>
                    <li>Handjievol Odendaal (land donor)</li>
                    <li>Barend Jones (building materials)</li>
                    <li>Toni Goetz (fundraising)</li>
                  </ul>
                  <p style={{ margin: '0', fontStyle: 'italic' }}>
                    "May this church serve the need of all English-speaking citizens of Barrydale who have a need for, and a commitment to, the Lord. Praise the Lord."
                  </p>
                </div>
              </div>
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
                Our Complete Historical Record
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                The full history of Barrydale Christian Fellowship, including detailed accounts of our founding, key leaders, 
                significant milestones, and testimonies of God's faithfulness is available in our official church history document.
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
