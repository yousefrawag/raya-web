"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// شريط تحميل رفيع أعلى الصفحة (زي YouTube / GitHub) بيظهر وقت التنقل بين الصفحات.
//
// ليه بدل loading.jsx؟ شاشة التحميل الكاملة كانت بتظهر كمان في أول فتح للموقع
// وبعدين تتبدل بالمحتوى → جوجل كان بيحسبها اهتزاز للصفحة كلها (CLS = 1.0).
// الشريط ده بيشتغل بس لما المستخدم يدوس على لينك، ومكانه fixed فوق → مش بيحرك أي حاجة.
export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0); // 0 = مخفي
  const [visible, setVisible] = useState(false);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current.forEach(clearInterval);
    timers.current = [];
  };

  const start = () => {
    clearTimers();
    setVisible(true);
    setProgress(8);
    // بيزيد تدريجياً ويبطّأ كل ما يقرب من 90% لحد ما الصفحة تفتح
    const id = setInterval(() => {
      setProgress((p) => (p < 90 ? p + (90 - p) * 0.1 : p));
    }, 200);
    // أمان: لو حاجة حصلت ومفيش تنقل، نخفيه بعد 15 ثانية
    const safety = setTimeout(done, 15000);
    timers.current.push(id, safety);
  };

  const done = () => {
    clearTimers();
    setProgress(100);
    timers.current.push(
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250)
    );
  };

  // الصفحة الجديدة اتفتحت (الرابط اتغير) → نكمّل الشريط ونخفيه
  useEffect(() => {
    done();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  // نسمع لأي ضغطة على لينك داخلي
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // فتح في تاب جديد
      const a = e.target.closest?.("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return; // لينك خارجي (واتساب، سوشيال...)
      const same =
        url.pathname === window.location.pathname && url.search === window.location.search;
      if (same) return; // نفس الصفحة أو #hash
      start();
    };

    // زرار رجوع/تقدم في المتصفح
    const onPop = () => start();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-[10000] h-[3px] pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
    >
      <div
        className="h-full bg-gradient-to-l from-amber-400 to-orange-600 shadow-[0_0_8px_rgba(245,158,11,0.7)]"
        style={{
          width: `${progress}%`,
          marginInlineStart: 0,
          transition: progress === 0 ? "none" : "width 200ms ease",
        }}
      />
    </div>
  );
}
