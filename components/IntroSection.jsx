import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import { introBlocks } from "@/data/content";

export default function IntroSection() {
  return (
    <div className="text-image pad-h pv-80">
      {introBlocks.map((block, i) => (
        <div key={i}>
          {block.imageFirst ? (
            <>
              <Reveal className="image-wrap">
                <ImageWithLoader
                  src={block.image}
                  alt=""
                  fill
                  imgClassName="full-bleed-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Reveal>
              <Reveal>
                <h3>{block.heading}</h3>
                {block.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </Reveal>
            </>
          ) : (
            <>
              <Reveal>
                <h3>{block.heading}</h3>
                {block.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </Reveal>
              <Reveal className="image-wrap">
                <ImageWithLoader
                  src={block.image}
                  alt=""
                  fill
                  imgClassName="full-bleed-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Reveal>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
