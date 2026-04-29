// components/ScrollToHash.js
'use client';

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return null;
}