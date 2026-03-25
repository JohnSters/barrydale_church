import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const timelineEvents = [
  {
    year: "19XX",
    title: "The Beginning",
    description: "A small group of believers began meeting in homes for Bible study and prayer.",
  },
  {
    year: "19XX",
    title: "First Church Building",
    description: "Our first church building was constructed on [Location].",
  },
  {
    year: "20XX",
    title: "Expanding Our Reach",
    description: "We launched our first community outreach programs and saw significant growth in our congregation.",
  },
  {
    year: "Present",
    title: "Continuing the Legacy",
    description: "Today, we continue to serve our community and share the love of Christ with future generations.",
  },
];

export default component$(() => {
  return (
    <>
      <section
        class="hero ch-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.8)), url(/images/Cup.png)",
        }}
      >
        <div class="container ch-hero-inner">
          <h1>Our Church History</h1>
          <p>A Journey of Faith, Community, and God's Faithfulness</p>
        </div>
      </section>

      <div class="ch-page">

        {/* Heritage card */}
        <div class="ch-card">
          <h2 class="ch-section-title">
            <span class="ch-title-bar"></span>
            Our Rich Heritage
          </h2>

          <p>
            The Barrydale Christian Fellowship has a rich history of serving our community and spreading the Gospel.
            From our humble beginnings to the present day, God has been faithful in guiding our congregation.
          </p>

          <div class="ch-highlight">
            <h3>Our Founding</h3>
            <p>
              Established in 19XX, our church was founded by a small group of believers committed to biblical
              teaching and community outreach. What began as a home Bible study has grown into a vibrant community of faith.
            </p>
          </div>

          <div class="ch-mission-grid">
            <div class="ch-mission-item">
              <h3><span class="ch-dot"></span>Our Mission</h3>
              <p>To make disciples of Jesus Christ who love God, love people, and serve the world with the transforming power of the Gospel.</p>
            </div>
            <div class="ch-mission-item">
              <h3><span class="ch-dot"></span>Our Vision</h3>
              <p>To be a Christ-centered community that transforms lives through authentic worship, biblical teaching, and compassionate service.</p>
            </div>
          </div>

          <p>
            Over the years, our church has been blessed to see countless lives transformed by the power of the Gospel.
            We've grown from a small gathering to a thriving congregation, but our commitment to biblical truth and
            community impact remains unchanged.
          </p>

          <div class="ch-download">
            <h3>Explore Our Full History</h3>
            <p>
              For a detailed account of our church's journey, including key milestones and God's faithfulness through
              the years, download our complete church history document.
            </p>
            <a
              href="/downloads/Barrydale-Christian-Fellowship-History.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="btn ch-download-btn"
            >
              Download Full History (PDF)
            </a>
          </div>
        </div>

        {/* Timeline card */}
        <div class="ch-card">
          <h2 class="ch-section-title">
            <span class="ch-title-bar"></span>
            Our Timeline
          </h2>

          <ol class="ch-timeline">
            {timelineEvents.map((event, index) => (
              <li key={index} class="ch-timeline-item">
                <span class="ch-timeline-year">{event.year}</span>
                <h3 class="ch-timeline-title">{event.title}</h3>
                <p class="ch-timeline-desc">{event.description}</p>
              </li>
            ))}
          </ol>

          <p class="ch-verse">
            "The steadfast love of the LORD never ceases; his mercies never come to an end;
            they are new every morning; great is your faithfulness." — Lamentations 3:22-23
          </p>
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
