import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgChurch1 from "~/media/images/church1.jpg?jsx";
import ImgChurch2 from "~/media/images/church2.jpg?jsx";

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
                The Barrydale Christian Fellowship has a rich history of serving the English-speaking community of Barrydale. 
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
                  The Beginnings of the Church, from Dream to Reality
                </h3>
                <p style={{ margin: '0 0 1rem' }}>
                  In her speech at the opening of the church on 23rd February 1997, Mrs Anne Smith gave some insight into its beginnings.
                </p>
                <p style={{ fontStyle: 'italic', margin: '0 0 1rem' }}>
                  "I feel honoured today to share with you the history of this Barrydale church. For me it is a dream come true.
                </p>
                <p style={{ margin: '0 0 1rem' }}>
                  When the Methodist Church in Swellendam split up due to political decisions taken at Conference, out of a once strong congregation, only three members remained. These three, Andries Visser, Stephen Smith and I decided not to withdraw our membership.
                </p>
                <p style={{ margin: '0 0 1rem' }}>
                  For many months we were like lost sheep, depending on the radio and television for a Sunday service. Then Ds Maasdorp came to our assistance and organised a monthly service for the English speaking inhabitants of Barrydale. These services were conducted by a Methodist minister from Worcester, assisted by a few local preachers. The attendance was poor and to our disappointment the services came to an end.
                </p>
                <p style={{ margin: '0 0 1rem' }}>
                  One of the preachers who had helped with the English services in the Dutch Reformed Church invited us to join him and his wife at their next Holy Communion service in Riversdale. For the three of us it was the beginning of a monthly journey. For three years we travelled monthly to Riversdale for Communion. We would return home feeling refreshed and stronger in faith, but the longing for a place of worship nearer home became stronger by the day.
                </p>
                <p style={{ margin: '0 0 1rem' }}>
                  From the day our church in Swellendam foundered on the rocks of politics, I had prayed and begged the Lord to meet us in our need. The Lord answered my prayer, but not in the way I had hoped for.
                </p>
                <p style={{ margin: '0 0 1rem' }}>
                  One day, as we returned home from an outing we saw a bakkie parked near our house. A man stepped out and introduced himself as Vollie Strydom.
                </p>
                <p style={{ margin: '0 0 1rem' }}>
                  Many years have gone by but I still remember his exact words. 'I am trying to meet all the English speaking members of different churches. I want to bring them together for Worship.' This was not what I had asked the Lord to provide. I wanted a Methodist Church! Nevertheless it was good news.
                </p>
                <p style={{ margin: '0 0 1rem' }}>
                  The first person to receive this good news from me was Andries Visser. The second was my good friend the Rev Paul Kluge. He ended his letter to me with, 'Praise be to God Who answered our prayers', and in a joking way he wrote in brackets 'Anne, your group sounds like a real fruit salad!'. I learnt a lesson, that all who truly love God can unite in worship."
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
                  maxWidth: '800px',
                  margin: '0 auto',
                  padding: '0 1.5rem'
                }}>
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
                      marginBottom: '2rem',
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
                        <h4 style={{
                          margin: '0',
                          color: 'var(--primary)',
                          fontSize: '1.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{
                            color: 'var(--secondary)',
                            fontWeight: 'bold'
                          }}>
                            {item.year}:
                          </span>
                          {item.title}
                        </h4>
                      </div>
                      <p style={{ margin: '0', lineHeight: '1.6' }}>{item.content}</p>
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
                  <p style={{ margin: '0 0 1.5rem 0', fontStyle: 'italic' }}>
                    "May this church serve the need of all English-speaking citizens of Barrydale who have a need for, and a commitment to, the Lord. Praise the Lord."
                  </p>
                </div>

                {/* Image Gallery */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                  marginTop: '2rem'
                }}>
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                  }}>
                    <ImgChurch1 
                      alt="Barrydale Christian Fellowship"
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '1rem' }}>
                      <p style={{ margin: '0.5rem 0 0', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                        Barrydale Christian Fellowship
                      </p>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                  }}>
                    <ImgChurch2 
                      alt="Barrydale Christian Fellowship"
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '1rem' }}>
                      <p style={{ margin: '0.5rem 0 0', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                        Barrydale Christian Fellowship
                      </p>
                    </div>
                  </div>
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
        </div>
      </div>

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
  title: "Church History | Barrydale Christian Fellowship",
  meta: [
    {
      name: "description",
      content: "Explore the rich history of Barrydale Christian Fellowship, our journey of faith, and God's faithfulness through the years.",
    },
  ],
};
