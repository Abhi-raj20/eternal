// import Image from "next/image";
// import Link from "next/link";
// import  { Testimonial } from "@/data/testimonials";

// function Stars() {
//   return (
//     <div className="flex gap-1 text-[#C9A227]" aria-label="5 out of 5 stars">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2.5l2.94 6.36 6.97.73-5.16 4.77 1.4 6.9L12 17.9l-6.15 3.36 1.4-6.9-5.16-4.77 6.97-.73L12 2.5z" />
//         </svg>
//       ))}
//     </div>
//   );
// }

// export default function TestimonialCard( {  testimonial }) {
//   const { name, role, quote, image, projectHref } = testimonial;

//   return (
//     <article className="grid grid-cols-1 sm:grid-cols-2 gap-0 bg-white border border-[#141E24]/10 overflow-hidden">
//       {/* Copy side */}
//       <div className="flex flex-col justify-between p-8 lg:p-10">
//         <div>
//           <Stars />
//           <p className="mt-6 font-serif text-[#141E24] text-[1.05rem] leading-relaxed">
//             &ldquo;{quote}&rdquo;
//           </p>
//         </div>
//         <div className="mt-8">
//           <h3 className="font-serif text-lg text-[#141E24]">{name}</h3>
//           <p className="mt-1 text-xs tracking-[0.14em] uppercase text-[#C9A227] font-semibold">
//             {role}
//           </p>
//         </div>
//       </div>

//       {/* Photo side */}
//       <Link
//         href={projectHref}
//         className="group relative block min-h-[220px] sm:min-h-full overflow-hidden"
//       >
//         <Image
//           src={image}
//           alt={`${name} project photo`}
//           fill
//           sizes="(max-width: 640px) 100vw, 320px"
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-[#141E24]/35 transition-opacity duration-300 group-hover:opacity-0" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="border border-white/80 px-5 py-2 text-xs tracking-[0.14em] uppercase text-white bg-transparent transition-all duration-300 group-hover:bg-white/90 group-hover:text-[#141E24] group-hover:border-transparent">
//             View Project
//           </span>
//         </div>
//       </Link>
//     </article>
//   );
// }

"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Stars from "@/components/Stars";

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, role, quote } = testimonial;
  const { ref, isVisible } = useScrollReveal();

  const delayMs = (index % 4) * 90;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
      className={`testimonial-card ${isVisible ? "is-visible" : ""}`}
    >
      <Stars />
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <h5 className="testimonial-card__name">{name}</h5>
      <p className="testimonial-card__role">{role}</p>
    </div>
  );
}