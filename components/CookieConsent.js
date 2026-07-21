"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      // localStorage not available (private mode etc) — show the banner anyway.
      setVisible(true);
    }
  }, []);

  function choose(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <p>
        By clicking &ldquo;Accept&rdquo;, you agree to the storing of cookies on your device to
        enhance site navigation, analyze site usage, and assist in our marketing efforts. View our{" "}
        <Link href="/legal">Privacy Policy</Link> for more information.
      </p>
      <div className="cookie-consent-buttons">
        <button type="button" className="cookie-deny" onClick={() => choose("denied")}>
          Deny
        </button>
        <button type="button" className="cookie-accept" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
