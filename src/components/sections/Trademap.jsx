// components/TradeMap.jsx
"use client";

import React, { useRef, useEffect, useState } from 'react';

const TradeMap = () => {
  const svgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  const W = 1000,
    H = 480;
  const hubX = W * 0.48,
    hubY = H * 0.45;

  // قائمة الدول
  const supplierData = [
    { name: "الصين", flag: "🇨🇳", fx: 0.92, fy: 0.32, color: "#FF9933" },
    { name: "الهند", flag: "🇮🇳", fx: 0.82, fy: 0.48, color: "#FF9933" },
    { name: "اليابان", flag: "🇯🇵", fx: 0.97, fy: 0.28, color: "#FF9933" },
    
    { name: "إندونيسيا", flag: "🇮🇩", fx: 0.92, fy: 0.65, color: "#CE1126" },
    { name: "أستراليا", flag: "🇦🇺", fx: 0.90, fy: 0.88, color: "#00008B" },
  
  
    { name: "تركيا", flag: "🇹🇷", fx: 0.55, fy: 0.25, color: "#E30A17" },
    { name: "ألمانيا", flag: "🇩🇪", fx: 0.42, fy: 0.15, color: "#DD0000" },
    { name: "فرنسا", flag: "🇫🇷", fx: 0.44, fy: 0.22, color: "#002395" },
    { name: "إسبانيا", flag: "🇪🇸", fx: 0.38, fy: 0.30, color: "#C60B1E" },
   
    { name: "الولايات المتحدة", flag: "🇺🇸", fx: 0.12, fy: 0.20, color: "#3C3B6E" },
    { name: "البرازيل", flag: "🇧🇷", fx: 0.18, fy: 0.58, color: "#009739" },
    { name: "الأرجنتين", flag: "🇦🇷", fx: 0.10, fy: 0.75, color: "#75AADB" },
    { name: "تشيلي", flag: "🇨🇱", fx: 0.08, fy: 0.68, color: "#0033A0" },
    { name: "كولومبيا", flag: "🇨🇴", fx: 0.15, fy: 0.38, color: "#FCD116" },
    { name: "بيرو", flag: "🇵🇪", fx: 0.12, fy: 0.50, color: "#D91023" },
    { name: "جنوب أفريقيا", flag: "🇿🇦", fx: 0.48, fy: 0.82, color: "#DE3831" },
  
  ];

  return (
    <div className="w-full overflow-x-auto bg-gradient-to-r from-amber-50 to-white p-4 ">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-5xl mx-auto"
        style={{ minWidth: 380 }}
      >
        <defs>
          <radialGradient id="hubGrad" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* شبكة خلفية خفيفة جداً */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
        </pattern>
        <rect width={W} height={H} fill="url(#grid)" />

        {/* دوائر خافتة حول المركز */}
        <circle cx={hubX} cy={hubY} r="180" fill="none" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx={hubX} cy={hubY} r="280" fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.10" />

        {supplierData.map((s, i) => {
          const sx = s.fx * W,
            sy = s.fy * H;
          const cpx = (sx + hubX) / 2,
            cpy = Math.min(sy, hubY) - H * 0.25;
          const d = `M ${sx},${sy} Q ${cpx},${cpy} ${hubX},${hubY}`;
          return (
            <g key={s.name}>
              {/* الخط الأساسي */}
              <path d={d} fill="none" stroke={s.color} strokeWidth="1.5" strokeOpacity="0.3" />
              {/* الخط المتحرك */}
              <path
                d={d}
                fill="none"
                stroke={s.color}
                strokeWidth="2"
                strokeDasharray="8 14"
                strokeOpacity="0.7"
              >
                {isVisible && (
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="22"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                )}
              </path>
              {/* النقطة المتحركة */}
              {isVisible && (
                <circle r="4" fill={s.color} fillOpacity="0.9">
                  <animateMotion dur={`${2.5 + i * 0.15}s`} repeatCount="indefinite" path={d} />
                </circle>
              )}
              {/* نقطة الدولة */}
              <circle cx={sx} cy={sy} r="7" fill={s.color} fillOpacity="0.9" />
              <circle cx={sx} cy={sy} r="14" fill={s.color} fillOpacity="0.2">
                {isVisible && (
                  <animate
                    attributeName="r"
                    values="14;22;14"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                )}
              </circle>
              {/* اسم الدولة والعلم - اللون الآن رمادي غامق */}
              <text
                x={sx}
                y={sy - 18}
                textAnchor="middle"
                fontSize="14"
                fill="#1e293b"
                fontFamily="sans-serif"
              >
                {s.flag}
              </text>
              <text
                x={sx}
                y={sy - 34}
                textAnchor="middle"
                fontSize="11"
                fill="#0f172a"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                {s.name}
              </text>
            </g>
          );
        })}

        {/* نقطة المركز – القدس */}
        <circle cx={hubX} cy={hubY} r="45" fill="none" stroke="#d97706" strokeWidth="2" strokeOpacity="0.4">
          {isVisible && (
            <animate attributeName="r" values="45;60;45" dur="3.5s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx={hubX} cy={hubY} r="30" fill="none" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.6">
          {isVisible && (
            <animate attributeName="r" values="30;42;30" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          )}
        </circle>
        <circle cx={hubX} cy={hubY} r="22" fill="url(#hubGrad)" filter="url(#glow)" />
        <text x={hubX} y={hubY + 5} textAnchor="middle" fontSize="14" fill="white" fontFamily="sans-serif" fontWeight="bold">
          القدس
        </text>
        <text x={hubX} y={hubY + 38} textAnchor="middle" fontSize="10" fill="#475569" fontFamily="sans-serif">
          Jerusalem
        </text>

        <text
          x={hubX}
          y={hubY + 58}
          textAnchor="middle"
          fontSize="9"
          fill="#d97706"
          fontFamily="sans-serif"
          fontWeight="600"
          opacity="0.9"
          letterSpacing="2"
        >
          MIDDLE EAST HUB
        </text>
      </svg>
    </div>
  );
};

export default TradeMap;