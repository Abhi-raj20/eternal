export default function Stars() {
  return (
    <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24">
          <path d="M12 2.5l2.94 6.36 6.97.73-5.16 4.77 1.4 6.9L12 17.9l-6.15 3.36 1.4-6.9-5.16-4.77 6.97-.73L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}