"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration and set dark mode
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    document.documentElement.classList.add("dark");
  }, []);

  return <div className="antialiased">{children}</div>;
}
