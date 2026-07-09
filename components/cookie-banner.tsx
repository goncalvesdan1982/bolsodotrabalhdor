"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && showBanner) {
        localStorage.setItem("cookie-consent", "true");
        setShowBanner(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showBanner]);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg p-4 md:p-5"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground text-center md:text-left">
          Utilizamos cookies para melhorar sua experiência, exibir anúncios personalizados e analisar nosso tráfego. 
          Ao continuar, você concorda com a nossa{" "}
          <Link href="/politica-privacidade" className="text-primary hover:underline font-medium">
            Política de Privacidade
          </Link>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}