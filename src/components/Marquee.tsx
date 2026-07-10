export function Marquee() {
  const words = ["Hair", "Nails", "MakeUp", "Brows", "Lashes", "Care"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...words, ...words].map((word, index) => <span key={`${word}-${index}`}>{word}<i>✦</i></span>)}
      </div>
    </div>
  );
}
