/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Github, Dribble, Product } from '../components/Icons';

const About = () => {

  interface MediumArticle {
    title: string;
    link: string;
    pubDate: string;
    description: string;
  }
  const [articles, setArticles] = useState<MediumArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nerdy.ass.in.business');
      const data = await response.json();

      const fetchedArticles = data.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: formatDescription(item.description), // Adding description from the feed data
      }));

      setArticles(fetchedArticles);
    };

    if (typeof window !== "undefined") {
      fetchArticles();
    }
  }, []);

  const formatDescription = (description: string): string => {
    // Remove HTML tags using regex and trim the result
    const plainText = description.replace(/<[^>]+>/g, '').trim();
    // Limit to 150 characters and add "..." if the text is too long
    return plainText.length > 150 ? `${plainText.slice(0, 150)}...` : plainText;
  };

  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/Naitikmp"
                >
                  Engineering{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/Naitikmp"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  The impact of first impressions is undeniable, and a well-designed
                  website serves as the foundation for capturing attention and building
                  credibility. With my background in AI, ML, and full-stack web development
                  , I create websites that go beyond visual appeal, incorporating intelligent
                  functionality and intuitive navigation to offer a seamless user experience.
                  I bring a strong understanding of advanced machine learning and AI techniques
                  , along with a deep proficiency in modern web development practices, enabling
                  me to solve complex technical challenges while delivering a polished,
                  user-centric website. By combining technical expertise with cutting-edge design,
                  I ensure every facet of your website is crafted to perfection.
                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open Products Page">
                  Product{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Projects
                </Link>
                <p>
                  With the skills and experience to handle core product
                  management responsibilities, I’m equipped to lead
                  a product's journey from concept to successful launch.
                  My expertise in research, product design, and coordination
                  allows me to effectively manage the entire product lifecycle
                  , balancing technical demands with strategic priorities.
                  As a highly analytical thinker, I ensure the product vision
                  is maintained across all stages, from initial ideation to
                  execution. My ability to bridge technical and business perspectives
                  empowers me to deliver impactful products, making me well-prepared
                  to excel in a product management role.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  // href="https://dribbble.com/codewonders"
                >
                  AI{' '}
                  <small>
                    <Dribble />
                  </small>
                </a>
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/codewonders"
                  className="float-right"
                >
                  View Dribbble
                </a> */}
                <p>
                  I view AI as a transformative force with the power to elevate human
                  potential and streamline complex tasks, ultimately enhancing both
                  individual and organizational capabilities. Far from merely automating
                  processes, AI has the capacity to unlock new insights, drive innovation,
                  and foster creativity. My approach to AI is rooted in the belief that
                  responsible and ethical use of these technologies can shape a future
                  where intelligent systems work in harmony with human ingenuity, pushing
                  boundaries in ways that benefit society as a whole.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Reads.</h4>
            <ul className="timeline">
            {articles.map((article, index) => (
          <li key={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="cardHover"
              aria-label={`Open ${article.title}`}
              href={article.link}
            >
              {article.title} <small>Medium</small>
            </a>
            <a className="float-right" tabIndex={-1}>
              <span>{new window.Date(article.pubDate).toLocaleDateString()}</span>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
              {/* <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
                >
                  Data Structure And Algorithm. <small>Udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  Many developers who are &quot;self taught&quot;, feel that one
                  of the main disadvantages they face compared to college
                  educated graduates in computer science is the fact that they
                  don&apos;t have knowledge about algorithms, data structures
                  and the notorious Big-O Notation
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="https://www.edx.org/course/adaptive-leadership-in-development"
                >
                  Adaptive Leadership. <small>edX</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  This introductory course helps you identify and make progress
                  on a leadership challenge in your own life, team, or
                  community. You’ll apply the tools and techniques of Adaptive
                  Leadership, a practical framework developed at Harvard Kennedy
                  School of Government for leading change, particularly during
                  times of uncertainty or when there are no easy answers.{' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Learning to Learn [Efficient Learning] "
                  href="https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/"
                >
                  Learning to Learn [Efficient Learning] <small>udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020</b>
                </a>
                <p>
                  Improve memory & productivity using the skills of the world's
                  top performers and learning strategies proven by research.
                </p>
              </li>
              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles and recent reads"
                  id="cardHover"
                >
                  Learning Something Great 😉
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Currently</b>
                </a>
                <p>We continue learning everyday. </p>
              </li> */}
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Playlist.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Naitik Spotify Playlist"
                  href="https://open.spotify.com/user/1wu2lgi1l2n2kjobdnsb3j2ww?si=7cabb946dcc84b41"
                >
                  Naitik's. <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                  aria-label="CoGeek Lofii Playlist"
                  href="https://open.spotify.com/playlist/0BAcnggXL7o9rvW5cBDfnq?si=3e138a1f7a144e7a"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  This is an intensive, energizing songs list that helps me
                  through the day and inspires generate breakthrough ideas.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                >
                  Chill Lofi Study Beats <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  The perfect study beats, twenty four seven. with over 178
                  SONGS
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/3Mn8ar9FVClOuAjvEQgYyO?si=95a37256d9fa46ee"
                >
                  Not Romantic Drive <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/3Mn8ar9FVClOuAjvEQgYyO?si=95a37256d9fa46ee"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Easy listening for pleasant drive</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/6Sp8NOd7lOEw5nA3xgUdc4?si=927878809a0e41bb"
                >
                  Rappchik  <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=jRd8iiIER260sRzE6ZV44g"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>One of the finest rap in In. Cover: Aitch</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                >
                  Mood Booster 🎅🏽 <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Get happy with today's dose of feel-good songs!</p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        {/* <PageWrapper aria-label="You are now in lens section">
          <article>
            <h4>My Photochromic Lens.</h4>
            <ul className="timeline">
              <li>
                <Link href="/lens">
                  Adenekan's Collection. <small>©Adenekan</small>
                </Link>
                <Link href="/lens" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  This is an intensive, curation of the photochromic lenses that
                  standout and the ones that i personally love, NOTE this is
                  just by preference actually.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper> */}
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
