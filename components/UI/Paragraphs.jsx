export default function Paragraphs({ paragraphs, mb }) {
  return (
    <div className={mb}>
      {paragraphs.map((text, i) => (
        <p
          className="body mb-4.5 leading-relaxed md:mb-5 md:leading-loose"
          dangerouslySetInnerHTML={{ __html: text }}
          key={`text-${i}`}
        />
      ))}
    </div>
  );
}
