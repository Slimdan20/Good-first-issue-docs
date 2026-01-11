import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout>
      <div>
        {/* Hero section */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Find open-source projects and contribute with ease.
          </h1>
          <Link to="/docs/start/intro">
          <button className={styles.ctaButton}>Get Started</button>
          </Link>
        </div>

        {/* Docs section */}
        <div className={styles.docsSection}>
          <h2 className={styles.sectionTitle}>Good First Issue Docs</h2>

          <div className={styles.cardsGrid}>
            {/* Card 1 */}
            <Link to="/docs/start/quickstart" className={styles.card}>
              <div className={styles.iconBox}>
                <i className="bx bx-play" />
              </div>
              <h3 className={styles.cardTitle}>Quickstart Guide</h3>
              <p className={styles.cardText}>
                Install and run the Good First issue CLI.
              </p>
              <p className={styles.cardLink}>
                learn more <i className="bx bx-right-arrow-alt" />
              </p>
            </Link>

            {/* Card 2 */}
            <Link to="/docs/usage" className={styles.card}>
              <div className={styles.iconBoxSmall}>
                <i className="bx bx-terminal" />
              </div>
              <h3 className={styles.cardTitle}>Command reference</h3>
              <p className={styles.cardText}>
                Discover issues with the good-first-issue label.
              </p>
              <p className={styles.cardLink}>
                learn more <i className="bx bx-right-arrow-alt" />
              </p>
            </Link>

            {/* Card 3 */}
            <Link to="/docs/automation" className={styles.card}>
              <div className={styles.iconBox}>
                <i className="bx bx-cog" />
              </div>
              <h3 className={styles.cardTitle}>Automation &amp; Scripting</h3>
              <p className={styles.cardText}>
                Utilize good-first-issue in automation workflows.
              </p>
              <p className={styles.cardLink}>
                learn more <i className="bx bx-right-arrow-alt" />
              </p>
            </Link>

            {/* Card 4 */}
            <Link to="/docs/contributinng" className={styles.card}>
              <div className={styles.iconBox}>
                <i className="bx bx-git-merge" />
              </div>
              <h3 className={styles.cardTitle}>
                Contribute to Good First Issue
              </h3>
              <p className={styles.cardText}>
                Improve good-first-issue with your contributions.
              </p>
              <p className={styles.cardLink}>
                learn more <i className="bx bx-right-arrow-alt" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
