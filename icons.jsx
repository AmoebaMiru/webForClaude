// Icons - simple SVG icons used throughout the app
const Icon = ({ name, size = 20, stroke = 2, color = "currentColor" }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: color, strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "home": return <svg {...props}><path d="M3 12L12 3l9 9"/><path d="M5 10v10h14V10"/></svg>;
    case "search": return <svg {...props}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>;
    case "dashboard": return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>;
    case "user": return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>;
    case "bell": return <svg {...props}><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9z"/><path d="M10 21a2 2 0 004 0"/></svg>;
    case "gear": return <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 01-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 012.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 012.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>;
    case "camera": return <svg {...props}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>;
    case "plus": return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "chevron-right": return <svg {...props}><path d="M9 6l6 6-6 6"/></svg>;
    case "chevron-down": return <svg {...props}><path d="M6 9l6 6 6-6"/></svg>;
    case "chevron-up": return <svg {...props}><path d="M6 15l6-6 6 6"/></svg>;
    case "chevron-left": return <svg {...props}><path d="M15 6l-6 6 6 6"/></svg>;
    case "edit": return <svg {...props}><path d="M11 4H4v16h16v-7"/><path d="M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4z"/></svg>;
    case "refresh": return <svg {...props}><path d="M3 12a9 9 0 0114-7l3 3"/><path d="M20 4v6h-6"/><path d="M21 12a9 9 0 01-14 7l-3-3"/><path d="M4 20v-6h6"/></svg>;
    case "info": return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 8h.01M12 12v4"/></svg>;
    case "check": return <svg {...props}><path d="M5 12l5 5L20 7"/></svg>;
    case "check-double": return <svg {...props}><path d="M3 12l4 4L15 8"/><path d="M11 12l4 4L23 8"/></svg>;
    case "shield": return <svg {...props}><path d="M12 2L4 5v7c0 5 4 9 8 10 4-1 8-5 8-10V5z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "alert": return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 7v6M12 17h.01"/></svg>;
    case "calendar": return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case "members": return <svg {...props}><circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><circle cx="17" cy="9" r="2.5"/><path d="M22 18c0-2-2-3.5-5-3.5"/></svg>;
    case "stat": return <svg {...props}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>;
    case "heart": return <svg {...props}><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.7 1-1a5.5 5.5 0 000-7.7z"/></svg>;
    case "clipboard": return <svg {...props}><rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 4V2h6v2"/><path d="M9 12h6M9 16h4"/></svg>;
    case "battery": return <svg {...props}><rect x="2" y="8" width="18" height="10" rx="2"/><path d="M22 11v4"/><rect x="4" y="10" width="11" height="6" fill="currentColor" stroke="none" rx="1"/></svg>;
    case "wifi": return <svg {...props}><path d="M5 12a10 10 0 0114 0"/><path d="M8.5 15.5a5 5 0 017 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg>;
    case "device": return <svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>;
    case "sync": return <svg {...props}><path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 4v5h-5"/></svg>;
    case "filter": return <svg {...props}><path d="M3 5h18M6 12h12M10 19h4"/></svg>;
    case "drop": return <svg {...props}><path d="M12 3s7 8 7 13a7 7 0 11-14 0c0-5 7-13 7-13z"/></svg>;
    case "stool": return <svg {...props}><ellipse cx="12" cy="17" rx="7" ry="3"/><path d="M5 17V9a3 3 0 013-3h8a3 3 0 013 3v8"/></svg>;
    case "location": return <svg {...props}><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case "voice": return <svg {...props}><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>;
    case "lock": return <svg {...props}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>;
    case "headset": return <svg {...props}><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M3 18a2 2 0 002 2h1v-6H5a2 2 0 00-2 2v2zM21 18a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2v2z"/></svg>;
    case "switch": return <svg {...props}><path d="M16 3l4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/></svg>;
    case "doc": return <svg {...props}><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6M9 13h6M9 17h4"/></svg>;
    case "elder": return <svg {...props}><circle cx="12" cy="6" r="3"/><path d="M9 9v3l-2 7M15 9v3l2 7M11 12h2"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
