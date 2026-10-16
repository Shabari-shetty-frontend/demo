import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const solutions = [
  {
    name: 'OnPublic',
    model: 'Sovereign public cloud',
    href: '/docs/solutions/onpublic',
  },
  {
    name: 'OnPrivate',
    model: 'Dedicated private cloud',
    href: '/docs/solutions/onprivate',
  },
  {
    name: 'OnBYOPC',
    model: 'Onam Cloud on customer-owned infrastructure',
    href: '/docs/solutions/onbypc',
  },
];

export default function SolutionCards(): ReactNode {
  return (
    <div className={styles.grid}>
      {solutions.map((solution) => (
        <Link className={styles.card} key={solution.name} to={solution.href}>
          <span className={styles.label}>SOLUTION</span>
          <strong className={styles.name}>{solution.name}</strong>
          <span className={styles.model}>{solution.model}</span>
          <span className={styles.action}>
            Explore {solution.name} <span aria-hidden="true">&#8594;</span>
          </span>
        </Link>
      ))}
    </div>
  );
}