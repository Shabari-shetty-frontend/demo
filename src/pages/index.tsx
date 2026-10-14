import {useEffect, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  useEffect(() => {
    window.location.replace('/docs/intro');
  }, []);

  return (
    <Layout
      title="Documentation"
      description="Onam Cloud documentation for deployment models, security, and platform guidance.">
      <main className="container margin-vert--lg">
        <p>
          Opening Onam Cloud Documentation.{' '}
          <Link to="/docs/intro">Continue to Documentation</Link>
        </p>
      </main>
    </Layout>
  );
}
