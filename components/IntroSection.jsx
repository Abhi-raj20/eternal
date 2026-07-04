import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import { introBlocks } from "@/data/content";

export default function IntroSection() {
  return (
    <div className="pad-h pv-80" id="after-hero">
      {introBlocks.map((block, i) => (
        <div className="intro-block" key={i}>
          {block.imageFirst ? (
            <>
              <Reveal className="image-wrap">
                <ImageWithLoader
                  src={block.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </Reveal>
              <Reveal className="text" delay={150}>
                <p className="lead">{block.heading}</p>
                {block.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </Reveal>
            </>
          ) : (
            <>
              <Reveal className="text">
                <p className="lead">{block.heading}</p>
                {block.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </Reveal>
              <Reveal className="image-wrap" delay={150}>
                <ImageWithLoader
                  src={block.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </Reveal>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
