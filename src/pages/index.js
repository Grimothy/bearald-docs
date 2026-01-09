import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SearchBar from '@theme/SearchBar';
import styles from './index.module.css';

const categories = [
  {
    title: 'Microsoft & Cloud',
    description: 'Azure, Microsoft 365, Power Platform guides and best practices.',
    icon: '☁️',
    link: '/docs/microsoft',
    color: 'blue'
  },
  {
    title: 'Web Tools & Guides',
    description: 'Development tools, frameworks, and modern web technologies.',
    icon: '🛠️',
    link: '/docs/web-tools',
    color: 'purple'
  },
  {
    title: 'Security & Compliance',
    description: 'Security protocols, compliance standards, and best practices.',
    icon: '🔒',
    link: '/docs/security',
    color: 'red'
  },
  {
    title: 'Infrastructure & DevOps',
    description: 'CI/CD, containers, orchestration, and infrastructure as code.',
    icon: '⚙️',
    link: '/docs/devops',
    color: 'green'
  },
  {
    title: 'Research & Learning',
    description: 'Technical research, learning resources, and knowledge base.',
    icon: '📚',
    link: '/docs/research',
    color: 'orange'
  },
  {
    title: 'Quick Tips',
    description: 'Handy snippets, shortcuts, and productivity hacks.',
    icon: '⚡',
    link: '/docs/tips',
    color: 'cyan'
  }
];



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <img src="/img/Bearald-Squared.png" alt="BearaldDocs" className={styles.heroImage} />
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ContentGrid() {
  return (
    <section className={styles.contentGrid}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Explore Documentation
        </Heading>
        <div className={styles.grid}>
          {categories.map((category, idx) => (
            <Link
              key={idx}
              to={category.link}
              className={clsx(styles.card, styles[`card${category.color}`])}>
              <div className={styles.cardIcon}>{category.icon}</div>
              <h3 className={styles.cardTitle}>{category.title}</h3>
              <p className={styles.cardDescription}>{category.description}</p>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Comprehensive documentation for Microsoft, Cloud, Security, DevOps, and more.">
      <HomepageHeader />
      <main>
        <ContentGrid />
      </main>
    </Layout>
  );
}
