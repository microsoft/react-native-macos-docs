import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Truly Native',
    Svg: require('@site/static/img/react-logo.svg').default,
    description: (
      <>Built on top of Appkit, Apple's macOS Platform SDK</>
    ),
  },
  {
    title: 'Cross Platform',
    Svg: require('@site/static/img/react-logo.svg').default,
    description: (
      <>Use your favorite React Native libraries</>
    ),
  },
  {
    title: 'Supported by Microsoft',
    Svg: require('@site/static/img/react-logo.svg').default,
    description: (
      <>Used at scale by some of the largest apps out there</>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
