// import TestimonialCard from "@/components/TestimonialCard";
// import { testimonials } from "@/data/testimonials";

// export default function ReviewsPage() {
//   return (
//     <main className="bg-[#FAFAF9]">
//       {/* Intro */}
//       <section className="max-w-3xl mx-auto text-center px-6 pt-20 pb-14">
//         <p className="text-xs tracking-[0.2em] uppercase text-[#141E24] font-semibold mb-4">
//           <span className="font-bold">Client</span> Testimonials
//         </p>
//         <p className="text-[#141E24]/70 leading-relaxed">
//           At the heart of our operation lies an obsession with doing things right
//           from the start. Please see below, a selection of reviews of what our
//           clients and professional partners say about working with us.
//         </p>
//       </section>

//       {/* Masonry testimonial grid */}
//       <section className="max-w-6xl mx-auto px-6 pb-24">
//         <div className="columns-1 sm:columns-2 gap-6">
//           {testimonials.map((t, i) => (
//             <TestimonialCard key={t.name} testimonial={t} index={i} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

import TestimonialCard from "@/components/TestimonialCard";
import TestimonialAutoScroll from "@/components/TestimonialAutoScroll";
import { testimonials } from "@/data/testimonials";
import Header from "@/components/Header";

export default function ReviewsPage() {
  return (
    <>
    <Header theme="black" />
      <div className="reviewpage">
      <main>
        <section className="intro">
          <p className="intro__label">Client Testimonials</p>
          <p className="intro__text">
            At the heart of our operation lies an obsession with doing things right
            from the start. Please see below, a selection of reviews of what our
            clients and professional partners say about working with us.
          </p>
        </section>

        <TestimonialAutoScroll />

        <section className="testimonial-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </section>
      </main>
    </div>
    </>
  
  );
}