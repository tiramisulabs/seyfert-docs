import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";

import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="text-2xl text-white"
            to="https://github.com/tiramisulabs/biscuit"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"Seyfert JS"}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main style={{ maxWidth: "1200px", margin: "36px auto" }}>
        <h2>Why Seyfert over others?</h2>

        <p>
          At Seyfert, we appreciate the concept of Discord, but we have
          concerns about its API and the current libraries. Therefore, we rely
          on our technical expertise and experience to make informed decisions
          in software development. Our philosophy is centered on the pursuit of
          excellence in the use of Typescript. We believe that the more types
          and specifications used in the code, the higher the quality and
          reliability of the final product.
        </p>
        <p>
          Our commitment to implementing TypeScript rigorously is reflected in
          our emphasis on creating robust and scalable applications that
          optimally adapt to user requirements. We believe that incorporating
          TypeScript into software development improves code readability and
          maintainability, while significantly reducing the likelihood of errors
          and bugs, resulting in a more positive end-user experience. Due to
          this belief, we have created innovative concepts that fully utilize
          Seyfert unique `magic typing` feature. In summary, our commitment to
          utilizing Typescript is essential for achieving top-notch programming
          standards and delivering exceptional technological solutions.
        </p>

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
