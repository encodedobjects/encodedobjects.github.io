import React from "react";
import Link from "gatsby-link";

const About = () => (
  <div className="container">
    <section className="section">
      <div className="content is-medium">
        <h1>Information & Interactivity</h1>
        <p>
          Encoded Objects is a collaboration between artists{" "}
          <a href="https://jonathanrockfordportfolio.weebly.com/">
            Jonathan Rockford
          </a>{" "}
          and <a href="https://www.mikewesthad.com/">Michael Hadley</a> that
          explores our connection to the environment through the lens of
          technology. Our investigations start with artifacts or recordings from
          the environment that then lead to abstractions where the invisible and
          the visible often swap roles. We combine our varied experiences by
          merging the physical and digital realms of artmaking into unique forms
          - from inflatable sculptures to projection mapped video installations.
        </p>
        <h1>Artist Bios</h1>
        <p>
          Mike Hadley is an artist, software developer, and educator based out
          of Chicago, IL. Mike works and teaches at the intersection of art,
          technology and science. With training in both Art and Computational
          Neuroscience, he supports his art practice with a mixture of critical
          & technological skills. Mike is interested in revealing hidden systems
          and probing their implications - whether it is the process of genetic
          engineering caffeine into food or excavating the heated arguments
          between Wikipedia editors.
        </p>
        <p>
          Jonathan Rockford lives and works in South Florida. With a background
          in sculpture, ceramics, fine-woodworking, and video art, Jonathan is
          also intensely interested in the confluence of the physical and
          digital in our daily lives. When he is not teaching Art and Art
          History, he can be found listening to audiobooks & podcasts while
          working in the studio, cultivating his butterfly garden, or lounging
          with feline friends.
        </p>
      </div>
    </section>
  </div>
);

export default About;
