import React, { useCallback } from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";
import { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

const ThemeListener = ({ children }) => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";
  const html = document.documentElement;

  console.log("colorMode", colorMode);

  const observer = new MutationObserver((mutation) => {
    const className = mutation[0].target.className;
    if (
      (className.includes("dark") && !isDarkTheme) ||
      (!className.includes("dark") && isDarkTheme)
    ) {
      changeElement(isDarkTheme);
    }
  });

  const changeElement = useCallback((isDark) => {
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    changeElement(isDarkTheme);
    return () => {
      observer.disconnect();
      html.classList.remove("dark");
    };
  }, [colorMode]);

  return <>{children}</>;
};

export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();
  return (
    <LayoutProvider>
      <BrowserOnly>
      {/* <ThemeListener> */}
        <PageMetadata title={title} description={description} />

        <SkipToContent />

        <AnnouncementBar />

        <Navbar />

        <div
          id={SkipToContentFallbackId}
          className={clsx(
            ThemeClassNames.wrapper.main,
            styles.mainWrapper,
            wrapperClassName
          )}
        >
          <ErrorBoundary
            fallback={(params) => <ErrorPageContent {...params} />}
          >
            {children}
          </ErrorBoundary>
        </div>

        {!noFooter && <Footer />}
      {/* </ThemeListener> */}
      </BrowserOnly>
    </LayoutProvider>
  );
}
