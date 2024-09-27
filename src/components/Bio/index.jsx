import React from 'react';
import './style.css';
import couplePic from '../../assets/images/headshot.jpeg';

function Bio() {
  return (
    <article>
      <div className="headshot-wrapper">
        <img src={couplePic} alt="Daron" />
      </div>
      <section>
        <h2>Daron Schmit</h2>
        <p>
          Daron is a Senior Software Engineer <strong>(NG Human)</strong>.
        </p>
        <p>
          Oftentimes, Daron is found hunched over his hobby desk, assembling and
          painting minis. For social enrichment, Daron can be found at a nearby
          game store, playing skirmish wargames or at a nearby pickleball court
          trying to convince himself he's still an athlete.
        </p>
        <p>
          Otherwise Daron watches TV with his wife, sharpens his cooking skills,
          and hangs out with his dog and daughter.
        </p>
        <p>
          Want to know more?{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.owlbot.ai/chatbot/e75fa97e-d785-4f34-be1c-2b73406cb404">
            Ask Owlbot
          </a>
        </p>
      </section>
    </article>
  );
}

export default Bio;
