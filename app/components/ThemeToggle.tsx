"use client";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => {
    ready: Promise<void>;
  };
};

export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const documentWithTransitions = document as ViewTransitionDocument;

    const applyTheme = () => {
      root.classList.add("theme-changing");
      root.dataset.theme = nextTheme;
      localStorage.setItem("samuel-theme", nextTheme);
      window.setTimeout(() => root.classList.remove("theme-changing"), 520);
    };

    if (!documentWithTransitions.startViewTransition || prefersReducedMotion) {
      applyTheme();
      return;
    }

    documentWithTransitions.startViewTransition(applyTheme);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <svg
        className="theme-icon theme-icon--sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2.1M12 19.9V22M4.93 4.93l1.49 1.49M17.58 17.58l1.49 1.49M2 12h2.1M19.9 12H22M4.93 19.07l1.49-1.49M17.58 6.42l1.49-1.49" />
      </svg>
      <svg
        className="theme-icon theme-icon--moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M20.4 15.2A8.3 8.3 0 0 1 8.8 3.6 8.4 8.4 0 1 0 20.4 15.2Z" />
      </svg>
    </button>
  );
}
