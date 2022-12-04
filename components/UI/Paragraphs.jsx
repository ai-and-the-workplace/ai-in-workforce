export default function Paragraphs({ paragraphs, mb }) {
  return (
    <div className={mb}>
      {paragraphs.map((text, i) => (
        <p
          className="body mb-4.5 leading-loose md:mb-5"
          dangerouslySetInnerHTML={{ __html: text }}
          key={`text-${i}`}
        />
      ))}
    </div>
  );
}
