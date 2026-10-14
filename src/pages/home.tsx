import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './home.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Onam Cloud product guides, deployment choices, security guidance, and platform resources.">
      <main className={styles.home}>
        <div className="container">
          <header className={styles.intro}>
            <p className={styles.eyebrow}>ONAM CLOUD / PRODUCT DOCUMENTATION</p>
            <Heading as="h1">Documentation</Heading>
            <p>
              Find product guides and platform information for running workloads
              on Onam Cloud.
            </p>
          </header>

          <section className={styles.section} aria-labelledby="start-heading">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>GET STARTED</p>
              <Heading as="h2" id="start-heading">Plan your cloud environment</Heading>
            </div>
            <div className={styles.topics}>
              <Link className={styles.topic} to="/docs/platform/choose-deployment-model">
                <span>01</span>
                <span className={styles.topicCopy}>
                  <strong>Choose a deployment model</strong>
                  <span>Compare OnPublic, OnPrivate, and OnBYOPC.</span>
                </span>
                <span aria-hidden="true">&#8594;</span>
              </Link>
              <Link className={styles.topic} to="/docs/platform/security-and-sovereignty">
                <span>02</span>
                <span className={styles.topicCopy}>
                  <strong>Understand security and sovereignty</strong>
                  <span>Review the principles behind data and infrastructure control.</span>
                </span>
                <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="solutions-heading">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>SOLUTION GUIDES</p>
              <Heading as="h2" id="solutions-heading">Explore Onam Cloud</Heading>
            </div>
            <div className={styles.solutions}>
              <Link className={styles.solution} to="/docs/solutions/onpublic">
                <span className={styles.solutionLabel}>PUBLIC CLOUD</span>
                <strong>OnPublic</strong>
                <span>Shared sovereign cloud for cloud-native workloads and applications.</span>
                <span className={styles.textLink}>Read the guide <span aria-hidden="true">&#8594;</span></span>
              </Link>
              <Link className={styles.solution} to="/docs/solutions/onprivate">
                <span className={styles.solutionLabel}>DEDICATED PRIVATE CLOUD</span>
                <strong>OnPrivate</strong>
                <span>Dedicated, isolated cloud environments operated for your organization.</span>
                <span className={styles.textLink}>Read the guide <span aria-hidden="true">&#8594;</span></span>
              </Link>
              <Link className={styles.solution} to="/docs/solutions/onbypc">
                <span className={styles.solutionLabel}>YOUR HARDWARE</span>
                <strong>OnBYOPC</strong>
                <span>Onam Cloud platform expertise deployed in your data centre.</span>
                <span className={styles.textLink}>Read the guide <span aria-hidden="true">&#8594;</span></span>
              </Link>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="resources-heading">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>DOCUMENTATION RESOURCES</p>
              <Heading as="h2" id="resources-heading">Browse by topic</Heading>
            </div>
            <div className={styles.resourceGrid}>
              <Link to="/docs/intro"><strong>Onam Cloud overview</strong><span>Platform fundamentals and links to key guides.</span></Link>
              <Link to="/docs/platform/choose-deployment-model"><strong>Deployment planning</strong><span>Find the deployment model that fits your needs.</span></Link>
              <Link to="/docs/platform/security-and-sovereignty"><strong>Security and sovereignty</strong><span>Understand control, data residency, and security principles.</span></Link>
              <Link to="/faq"><strong>Frequently asked questions</strong><span>Answers to common questions about Onam Cloud.</span></Link>
              <a href="https://onamcloud.com/infrastructure"><strong>Infrastructure and regions</strong><span>Explore Onam Cloud infrastructure information.</span></a>
              <a href="https://onamcloud.com/contact"><strong>Contact Onam Cloud</strong><span>Discuss your workload and deployment requirements.</span></a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}