// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { navLinks } from "@/data/content";

// function LogoSvg() {
//   return (
//     <svg viewBox="0 0 120 19" xmlns="http://www.w3.org/2000/svg" aria-label="Knowles">
//       <path
//         d="M111.7,9.4c-0.3-0.2-0.4-0.5-0.4-0.9c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.6-0.4
//         c0.3-0.1,0.5-0.2,0.8-0.2c0.2,0,0.5,0,0.7-0.1c0.6,0,1.2,0.1,1.8,0.4c0.5,0.3,0.9,0.8,1,1.4h3.1
//         c-0.1-0.7-0.3-1.3-0.6-1.9c-0.3-0.5-0.8-1-1.3-1.3c-0.5-0.3-1.1-0.6-1.7-0.7c-0.7-0.1-1.3-0.2-2-0.2
//         c-0.6,0-1.3,0.1-1.9,0.2c-0.6,0.1-1.3,0.3-1.8,0.6c-0.5,0.3-1,0.7-1.4,1.2c-0.4,0.5-0.6,1.2-0.5,1.8
//         c0,0.6,0.1,1.2,0.4,1.7c0.2,0.4,0.6,0.8,1,1.1c0.4,0.3,0.9,0.5,1.4,0.7c0.5,0.2,1.1,0.3,1.6,0.4
//         c0.5,0.1,1.1,0.2,1.6,0.3c0.5,0.1,0.9,0.2,1.4,0.4c0.4,0.1,0.7,0.3,1,0.6c0.3,0.2,0.4,0.6,0.4,0.9
//         c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.7,0.2-1,0.2c-0.3,0-0.6,0.1-1,0.1
//         c-0.7,0-1.4-0.2-2.1-0.5c-0.6-0.4-1-1.1-1-1.8h-3c0,0.7,0.2,1.4,0.5,2.1c0.3,0.6,0.7,1.1,1.3,1.5
//         c0.6,0.4,1.2,0.7,1.9,0.9c0.8,0.2,1.6,0.3,2.4,0.3c0.7,0,1.4-0.1,2.1-0.2c0.7-0.1,1.3-0.4,1.9-0.8
//         c0.6-0.3,1.1-0.8,1.4-1.4c0.4-0.6,0.6-1.3,0.5-2c0-0.6-0.1-1.2-0.4-1.7c-0.2-0.4-0.6-0.8-1-1.1
//         c-0.4-0.3-0.9-0.5-1.4-0.7c-0.5-0.2-1.1-0.3-1.6-0.4c-0.6-0.1-1.1-0.2-1.6-0.3c-0.5-0.1-0.9-0.2-1.4-0.4
//         C112.3,9.8,111.9,9.6,111.7,9.4 M106.5,12.6c0.1-1,0.1-2-0.2-2.9c-0.2-0.9-0.6-1.8-1.2-2.5
//         c-0.6-0.7-1.3-1.3-2.1-1.8c-0.9-0.5-1.9-0.7-2.9-0.7c-0.9,0-1.9,0.2-2.7,0.6c-0.8,0.4-1.5,0.9-2,1.6
//         c-0.6,0.7-1,1.4-1.3,2.3c-0.3,0.9-0.5,1.8-0.5,2.7c0,1,0.1,1.9,0.4,2.9c0.3,0.8,0.7,1.6,1.3,2.2
//         c0.6,0.6,1.3,1.1,2.1,1.5c0.9,0.4,1.8,0.5,2.8,0.5c0.7,0,1.4-0.1,2.1-0.3c0.6-0.2,1.3-0.5,1.8-0.9
//         c0.5-0.4,1-0.9,1.4-1.4c0.4-0.6,0.7-1.3,0.8-2h-2.8c-0.2,0.7-0.6,1.3-1.2,1.7c-0.6,0.4-1.4,0.6-2.1,0.6
//         c-0.6,0-1.1-0.1-1.6-0.3c-0.4-0.2-0.8-0.5-1.1-0.9c-0.3-0.4-0.5-0.8-0.7-1.3c-0.1-0.5-0.2-1-0.2-1.5L106.5,12.6z
//         M103.5,10.7h-6.9c0-0.5,0.1-1,0.3-1.4c0.2-0.4,0.4-0.8,0.7-1.1c0.3-0.3,0.7-0.6,1.1-0.8
//         c0.4-0.2,0.9-0.3,1.4-0.3c0.5,0,0.9,0.1,1.4,0.3c0.4,0.2,0.7,0.5,1,0.8c0.3,0.3,0.5,0.7,0.7,1.1
//         C103.4,9.8,103.5,10.2,103.5,10.7 M89.1,18.6h3V0h-3V18.6z M83.4,18.6l4.2-13.5h-3l-2.7,10.1h-0.1
//         L79.4,5.1h-3l-2.5,10.1h-0.1L71.2,5.1h-3.2l4.2,13.5h3.1l2.5-10h0.1l2.5,10L83.4,18.6z M67.4,14.7
//         c0.3-0.9,0.5-1.9,0.5-2.9c0-1-0.1-1.9-0.5-2.8c-0.3-0.8-0.7-1.6-1.3-2.2c-0.6-0.6-1.3-1.1-2.1-1.5
//         C63,4.9,62,4.8,61.1,4.8c-1,0-2,0.2-2.9,0.5c-0.8,0.3-1.5,0.8-2.1,1.5c-0.6,0.6-1,1.4-1.3,2.2
//         c-0.3,0.9-0.5,1.9-0.5,2.8c0,1,0.1,1.9,0.5,2.9c0.3,0.8,0.7,1.6,1.3,2.2c0.6,0.6,1.3,1.1,2.1,1.5
//         c0.9,0.4,1.9,0.6,2.9,0.5c1,0,2-0.2,2.9-0.5c0.8-0.3,1.5-0.8,2.1-1.5C66.7,16.3,67.1,15.5,67.4,14.7
//         M64.9,11.9c0,0.6-0.1,1.2-0.2,1.7c-0.1,0.5-0.4,1.1-0.7,1.5c-0.3,0.5-0.7,0.8-1.2,1.1
//         c-0.5,0.3-1.1,0.4-1.7,0.4c-0.6,0-1.2-0.1-1.7-0.4c-0.5-0.3-0.9-0.6-1.2-1.1c-0.3-0.5-0.6-1-0.7-1.5
//         c-0.1-0.6-0.2-1.1-0.2-1.7c0-0.6,0.1-1.2,0.2-1.7c0.1-0.5,0.4-1.1,0.7-1.5c0.3-0.4,0.7-0.8,1.2-1.1
//         c0.5-0.3,1.1-0.4,1.7-0.4c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,0.9,0.6,1.2,1.1c0.3,0.5,0.6,1,0.7,1.5
//         C64.8,10.7,64.9,11.3,64.9,11.9 M49.6,18.6h3V9.4c0.1-1.3-0.4-2.5-1.3-3.4c-1-0.8-2.2-1.2-3.5-1.1
//         c-0.9,0-1.7,0.2-2.4,0.6c-0.7,0.4-1.3,1-1.8,1.8l-0.1-0.1v-2h-2.8v13.5h3v-7.9c0-0.5,0.1-0.9,0.2-1.4
//         c0.1-0.4,0.4-0.8,0.7-1.1c0.3-0.3,0.6-0.6,1-0.8c0.4-0.2,0.9-0.3,1.4-0.3c0.7-0.1,1.4,0.2,2,0.7
//         c0.5,0.7,0.7,1.5,0.7,2.3L49.6,18.6z M39.6,18.6L31.7,7.4L39.1,0h-4l-8.3,8.5V0h-3.3v18.6h3.3v-6.3
//         l2.7-2.6l6.1,8.9H39.6z M14.5,18.4h4V9.3h-3v6.1h-11v3L14.5,18.4z M3,3.2h11v-3H0v9.1h3V3.2z"
//       />
//     </svg>
//   );
// }

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const lastScroll = useRef(0);

//   useEffect(() => {
//     function onScroll() {
//       const y = window.scrollY;

//       // Original: header hide hoga scroll-down pe (100px ke baad),
//       // show hoga scroll-up pe ya top pe.
//       if (y === 0) {
//         setHidden(false);
//       } else if (y > lastScroll.current && y > 100) {
//         setHidden(true);
//       } else if (y < lastScroll.current && y > 100) {
//         setHidden(false);
//       }
//       lastScroll.current = y;

//       // Original: ".header-trigger" (hero) ki height cross hote hi
//       // header solid background le leta hai.
//       setScrolled(y > window.innerHeight);
//     }

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   const headerClass = [
//     "site-header",
//     "pad-h",
//     scrolled ? "scrolled" : "",
//     hidden ? "header-hidden" : "",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <>
//       <header className={headerClass}>
//         <nav className="nav-list left desktop-only">
//           {navLinks.left.map((item) => (
//             <div className="nav-item" key={item.label}>
//               <Link href={item.href}>{item.label}</Link>
//               {item.children && (
//                 <ul className="sub-menu">
//                   {item.children.map((child) => (
//                     <li key={child.label}>
//                       <Link href={child.href}>{child.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </nav>

//         <Link className="site-branding" href="/">
//           <LogoSvg />
//         </Link>

//         <nav className="nav-list right desktop-only">
//           {navLinks.right.map((item) => (
//             <Link key={item.label} href={item.href}>
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <button
//           className="hamburger"
//           aria-label="Open menu"
//           onClick={() => setMenuOpen(true)}
//         >
//           <span />
//           <span />
//         </button>
//       </header>

//       <div className={`menu-overlay ${menuOpen ? "visible" : ""}`}>
//         <div className="inner-wrap">
//           <div className="top">
//             <Link className="site-branding" href="/" onClick={() => setMenuOpen(false)}>
//               <LogoSvg />
//             </Link>
//             <button
//               className="menu-close"
//               aria-label="Close menu"
//               onClick={() => setMenuOpen(false)}
//             >
//               ✕
//             </button>
//           </div>

//           <div className="middle">
//             <ul>
//               {[...navLinks.left, ...navLinks.right].map((item) => (
//                 <li key={item.label}>
//                   <Link href={item.href} onClick={() => setMenuOpen(false)}>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bottom">
//             <div>© Knowles 2026. All Rights Reserved</div>
//             <Link href="/legal" onClick={() => setMenuOpen(false)}>
//               Legal
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { navLinks } from "@/data/content";

// function LogoSvg() {
//   return (
//     <svg viewBox="0 0 120 19" xmlns="http://www.w3.org/2000/svg" aria-label="Knowles">
//       <path
//         d="M111.7,9.4c-0.3-0.2-0.4-0.5-0.4-0.9c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.6-0.4
//         c0.3-0.1,0.5-0.2,0.8-0.2c0.2,0,0.5,0,0.7-0.1c0.6,0,1.2,0.1,1.8,0.4c0.5,0.3,0.9,0.8,1,1.4h3.1
//         c-0.1-0.7-0.3-1.3-0.6-1.9c-0.3-0.5-0.8-1-1.3-1.3c-0.5-0.3-1.1-0.6-1.7-0.7c-0.7-0.1-1.3-0.2-2-0.2
//         c-0.6,0-1.3,0.1-1.9,0.2c-0.6,0.1-1.3,0.3-1.8,0.6c-0.5,0.3-1,0.7-1.4,1.2c-0.4,0.5-0.6,1.2-0.5,1.8
//         c0,0.6,0.1,1.2,0.4,1.7c0.2,0.4,0.6,0.8,1,1.1c0.4,0.3,0.9,0.5,1.4,0.7c0.5,0.2,1.1,0.3,1.6,0.4
//         c0.5,0.1,1.1,0.2,1.6,0.3c0.5,0.1,0.9,0.2,1.4,0.4c0.4,0.1,0.7,0.3,1,0.6c0.3,0.2,0.4,0.6,0.4,0.9
//         c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.7,0.2-1,0.2c-0.3,0-0.6,0.1-1,0.1
//         c-0.7,0-1.4-0.2-2.1-0.5c-0.6-0.4-1-1.1-1-1.8h-3c0,0.7,0.2,1.4,0.5,2.1c0.3,0.6,0.7,1.1,1.3,1.5
//         c0.6,0.4,1.2,0.7,1.9,0.9c0.8,0.2,1.6,0.3,2.4,0.3c0.7,0,1.4-0.1,2.1-0.2c0.7-0.1,1.3-0.4,1.9-0.8
//         c0.6-0.3,1.1-0.8,1.4-1.4c0.4-0.6,0.6-1.3,0.5-2c0-0.6-0.1-1.2-0.4-1.7c-0.2-0.4-0.6-0.8-1-1.1
//         c-0.4-0.3-0.9-0.5-1.4-0.7c-0.5-0.2-1.1-0.3-1.6-0.4c-0.6-0.1-1.1-0.2-1.6-0.3c-0.5-0.1-0.9-0.2-1.4-0.4
//         C112.3,9.8,111.9,9.6,111.7,9.4 M106.5,12.6c0.1-1,0.1-2-0.2-2.9c-0.2-0.9-0.6-1.8-1.2-2.5
//         c-0.6-0.7-1.3-1.3-2.1-1.8c-0.9-0.5-1.9-0.7-2.9-0.7c-0.9,0-1.9,0.2-2.7,0.6c-0.8,0.4-1.5,0.9-2,1.6
//         c-0.6,0.7-1,1.4-1.3,2.3c-0.3,0.9-0.5,1.8-0.5,2.7c0,1,0.1,1.9,0.4,2.9c0.3,0.8,0.7,1.6,1.3,2.2
//         c0.6,0.6,1.3,1.1,2.1,1.5c0.9,0.4,1.8,0.5,2.8,0.5c0.7,0,1.4-0.1,2.1-0.3c0.6-0.2,1.3-0.5,1.8-0.9
//         c0.5-0.4,1-0.9,1.4-1.4c0.4-0.6,0.7-1.3,0.8-2h-2.8c-0.2,0.7-0.6,1.3-1.2,1.7c-0.6,0.4-1.4,0.6-2.1,0.6
//         c-0.6,0-1.1-0.1-1.6-0.3c-0.4-0.2-0.8-0.5-1.1-0.9c-0.3-0.4-0.5-0.8-0.7-1.3c-0.1-0.5-0.2-1-0.2-1.5L106.5,12.6z
//         M103.5,10.7h-6.9c0-0.5,0.1-1,0.3-1.4c0.2-0.4,0.4-0.8,0.7-1.1c0.3-0.3,0.7-0.6,1.1-0.8
//         c0.4-0.2,0.9-0.3,1.4-0.3c0.5,0,0.9,0.1,1.4,0.3c0.4,0.2,0.7,0.5,1,0.8c0.3,0.3,0.5,0.7,0.7,1.1
//         C103.4,9.8,103.5,10.2,103.5,10.7 M89.1,18.6h3V0h-3V18.6z M83.4,18.6l4.2-13.5h-3l-2.7,10.1h-0.1
//         L79.4,5.1h-3l-2.5,10.1h-0.1L71.2,5.1h-3.2l4.2,13.5h3.1l2.5-10h0.1l2.5,10L83.4,18.6z M67.4,14.7
//         c0.3-0.9,0.5-1.9,0.5-2.9c0-1-0.1-1.9-0.5-2.8c-0.3-0.8-0.7-1.6-1.3-2.2c-0.6-0.6-1.3-1.1-2.1-1.5
//         C63,4.9,62,4.8,61.1,4.8c-1,0-2,0.2-2.9,0.5c-0.8,0.3-1.5,0.8-2.1,1.5c-0.6,0.6-1,1.4-1.3,2.2
//         c-0.3,0.9-0.5,1.9-0.5,2.8c0,1,0.1,1.9,0.5,2.9c0.3,0.8,0.7,1.6,1.3,2.2c0.6,0.6,1.3,1.1,2.1,1.5
//         c0.9,0.4,1.9,0.6,2.9,0.5c1,0,2-0.2,2.9-0.5c0.8-0.3,1.5-0.8,2.1-1.5C66.7,16.3,67.1,15.5,67.4,14.7
//         M64.9,11.9c0,0.6-0.1,1.2-0.2,1.7c-0.1,0.5-0.4,1.1-0.7,1.5c-0.3,0.5-0.7,0.8-1.2,1.1
//         c-0.5,0.3-1.1,0.4-1.7,0.4c-0.6,0-1.2-0.1-1.7-0.4c-0.5-0.3-0.9-0.6-1.2-1.1c-0.3-0.5-0.6-1-0.7-1.5
//         c-0.1-0.6-0.2-1.1-0.2-1.7c0-0.6,0.1-1.2,0.2-1.7c0.1-0.5,0.4-1.1,0.7-1.5c0.3-0.4,0.7-0.8,1.2-1.1
//         c0.5-0.3,1.1-0.4,1.7-0.4c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,0.9,0.6,1.2,1.1c0.3,0.5,0.6,1,0.7,1.5
//         C64.8,10.7,64.9,11.3,64.9,11.9 M49.6,18.6h3V9.4c0.1-1.3-0.4-2.5-1.3-3.4c-1-0.8-2.2-1.2-3.5-1.1
//         c-0.9,0-1.7,0.2-2.4,0.6c-0.7,0.4-1.3,1-1.8,1.8l-0.1-0.1v-2h-2.8v13.5h3v-7.9c0-0.5,0.1-0.9,0.2-1.4
//         c0.1-0.4,0.4-0.8,0.7-1.1c0.3-0.3,0.6-0.6,1-0.8c0.4-0.2,0.9-0.3,1.4-0.3c0.7-0.1,1.4,0.2,2,0.7
//         c0.5,0.7,0.7,1.5,0.7,2.3L49.6,18.6z M39.6,18.6L31.7,7.4L39.1,0h-4l-8.3,8.5V0h-3.3v18.6h3.3v-6.3
//         l2.7-2.6l6.1,8.9H39.6z M14.5,18.4h4V9.3h-3v6.1h-11v3L14.5,18.4z M3,3.2h11v-3H0v9.1h3V3.2z"
//       />
//     </svg>
//   );
// }

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const lastScroll = useRef(0);
//   const closeTimer = useRef(null);

//   useEffect(() => {
//     function onScroll() {
//       const y = window.scrollY;

//       if (y === 0) {
//         setHidden(false);
//       } else if (y > lastScroll.current && y > 100) {
//         setHidden(true);
//       } else if (y < lastScroll.current && y > 100) {
//         setHidden(false);
//       }
//       lastScroll.current = y;

//       setScrolled(y > window.innerHeight);
//     }

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   // Submenu ko turant band nahi karte - thoda delay dete hain taaki
//   // mouse ka link se submenu tak ka gap cross karna aasan rahe.
//   const openSubmenu = (label) => {
//     clearTimeout(closeTimer.current);
//     setActiveSubmenu(label);
//   };

//   const scheduleCloseSubmenu = () => {
//     closeTimer.current = setTimeout(() => setActiveSubmenu(null), 250);
//   };

//   useEffect(() => {
//     return () => clearTimeout(closeTimer.current);
//   }, []);

//   const headerClass = [
//     "site-header",
//     "pad-h",
//     scrolled ? "scrolled" : "",
//     hidden ? "header-hidden" : "",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <>
//       <header className={headerClass}>
//         <nav className="nav-list left desktop-only">
//           {navLinks.left.map((item) => (
//             <div
//               className="nav-item"
//               key={item.label}
//               onMouseEnter={() => item.children && openSubmenu(item.label)}
//               onMouseLeave={() => item.children && scheduleCloseSubmenu()}
//             >
//               <Link href={item.href}>{item.label}</Link>
//               {item.children && (
//                 <ul
//                   className={`sub-menu ${
//                     activeSubmenu === item.label ? "visible" : ""
//                   }`}
//                 >
//                   {item.children.map((child) => (
//                     <li key={child.label}>
//                       <Link href={child.href}>{child.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </nav>

//         <Link className="site-branding" href="/">
//           <LogoSvg />
//         </Link>

//         <nav className="nav-list right desktop-only">
//           {navLinks.right.map((item) => (
//             <Link key={item.label} href={item.href}>
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <button
//           className="hamburger"
//           aria-label="Open menu"
//           onClick={() => setMenuOpen(true)}
//         >
//           <span />
//           <span />
//         </button>
//       </header>

//       <div className={`menu-overlay ${menuOpen ? "visible" : ""}`}>
//         <div className="inner-wrap">
//           <div className="top">
//             <Link className="site-branding" href="/" onClick={() => setMenuOpen(false)}>
//               <LogoSvg />
//             </Link>
//             <button
//               className="menu-close"
//               aria-label="Close menu"
//               onClick={() => setMenuOpen(false)}
//             >
//               ✕
//             </button>
//           </div>

//           <div className="middle">
//             <ul>
//               {[...navLinks.left, ...navLinks.right].map((item) => (
//                 <li key={item.label}>
//                   <Link href={item.href} onClick={() => setMenuOpen(false)}>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bottom">
//             <div>© Knowles 2026. All Rights Reserved</div>
//             <Link href="/legal" onClick={() => setMenuOpen(false)}>
//               Legal
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { navLinks } from "@/data/content";

// function LogoImage({ className = "" }) {
//   return (
//     <img
//       src="/images/Logo_white.png"
//       alt="Eternal"
//       // width={120}
//       // height={80}
//       className={className}
//       priority
//     />
//   );
// }

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const lastScroll = useRef(0);
//   const closeTimer = useRef(null);

//   useEffect(() => {
//     function onScroll() {
//       const y = window.scrollY;

//       if (y === 0) {
//         setHidden(false);
//       } else if (y > lastScroll.current && y > 100) {
//         setHidden(true);
//       } else if (y < lastScroll.current && y > 100) {
//         setHidden(false);
//       }
//       lastScroll.current = y;

//       setScrolled(y > window.innerHeight);
//     }

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   // Submenu ko turant band nahi karte - thoda delay dete hain taaki
//   // mouse ka link se submenu tak ka gap cross karna aasan rahe.
//   const openSubmenu = (label) => {
//     clearTimeout(closeTimer.current);
//     setActiveSubmenu(label);
//   };

//   const scheduleCloseSubmenu = () => {
//     closeTimer.current = setTimeout(() => setActiveSubmenu(null), 250);
//   };

//   useEffect(() => {
//     return () => clearTimeout(closeTimer.current);
//   }, []);

//   const headerClass = [
//     "site-header",
//     "pad-h",
//     scrolled ? "scrolled" : "",
//     hidden ? "header-hidden" : "",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <>
//       <header className={headerClass}>
//         <nav className="nav-list left desktop-only">
//           {navLinks.left.map((item) => (
//             <div
//               className="nav-item"
//               key={item.label}
//               onMouseEnter={() => item.children && openSubmenu(item.label)}
//               onMouseLeave={() => item.children && scheduleCloseSubmenu()}
//             >
//               <Link href={item.href}>{item.label}</Link>
//               {item.children && (
//                 <ul
//                   className={`sub-menu ${
//                     activeSubmenu === item.label ? "visible" : ""
//                   }`}
//                 >
//                   {item.children.map((child) => (
//                     <li key={child.label}>
//                       <Link href={child.href}>{child.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </nav>

//         <Link className="site-branding" href="/">
//           <LogoImage />
//         </Link>

//         <nav className="nav-list right desktop-only">
//           {navLinks.right.map((item) => (
//             <Link key={item.label} href={item.href}>
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <button
//           className="hamburger"
//           aria-label="Open menu"
//           onClick={() => setMenuOpen(true)}
//         >
//           <span />
//           <span />
//         </button>
//       </header>

//       <div className={`menu-overlay ${menuOpen ? "visible" : ""}`}>
//         <div className="inner-wrap">
//           <div className="top">
//             <Link className="site-branding" href="/" onClick={() => setMenuOpen(false)}>
//               <LogoImage />
//             </Link>
//             <button
//               className="menu-close"
//               aria-label="Close menu"
//               onClick={() => setMenuOpen(false)}
//             >
//               ✕
//             </button>
//           </div>

//           <div className="middle">
//             <ul>
//               {[...navLinks.left, ...navLinks.right].map((item) => (
//                 <li key={item.label}>
//                   <Link href={item.href} onClick={() => setMenuOpen(false)}>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bottom">
//             <div>© Eternal 2026. All Rights Reserved</div>
//             <Link href="/legal" onClick={() => setMenuOpen(false)}>
//               Legal
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/content";

function LogoImage({ theme = "white", className = "" }) {
  const src = theme === "black" ? "/images/Logo_black.png" : "/images/Logo_white.png";

  return (
    <img
      src={src}
      alt="Eternal"
      className={className}
    />
  );
}

export default function Header({ theme = "white" }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const lastScroll = useRef(0);
  const closeTimer = useRef(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;

      if (y === 0) {
        setHidden(false);
      } else if (y > lastScroll.current && y > 100) {
        setHidden(true);
      } else if (y < lastScroll.current && y > 100) {
        setHidden(false);
      }
      lastScroll.current = y;

      setScrolled(y > window.innerHeight);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const openSubmenu = (label) => {
    clearTimeout(closeTimer.current);
    setActiveSubmenu(label);
  };

  const scheduleCloseSubmenu = () => {
    closeTimer.current = setTimeout(() => setActiveSubmenu(null), 250);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  const headerClass = [
    "site-header",
    "pad-h",
    theme === "black" ? "theme-black" : "theme-white",
    scrolled ? "scrolled" : "",
    hidden ? "header-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <nav className="nav-list left desktop-only">
          {navLinks.left.map((item) => (
            <div
              className="nav-item"
              key={item.label}
              onMouseEnter={() => item.children && openSubmenu(item.label)}
              onMouseLeave={() => item.children && scheduleCloseSubmenu()}
            >
              <Link href={item.href}>{item.label}</Link>
              {item.children && (
                <ul
                  className={`sub-menu ${
                    activeSubmenu === item.label ? "visible" : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link href={child.href}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <Link className="site-branding" href="/">
          <LogoImage theme={theme} />
        </Link>

        <nav className="nav-list right desktop-only">
          {navLinks.right.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`menu-overlay ${menuOpen ? "visible" : ""}`}>
        <div className="inner-wrap">
          <div className="top">
            <Link className="site-branding" href="/" onClick={() => setMenuOpen(false)}>
              <LogoImage theme={theme} />
            </Link>
            <button
              className="menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="middle">
            <ul>
              {[...navLinks.left, ...navLinks.right].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom">
            <div>© Eternal 2026. All Rights Reserved</div>
            <Link href="/legal" onClick={() => setMenuOpen(false)}>
              Legal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}