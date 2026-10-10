import { useMemo } from "react";

const adUnits = [
  {
    id: "adsterra-300x250",
    label: "Advertisement",
    width: 300,
    height: 250,
    key: "50f3ce41fb1b0c6f898ddcef1feebb99",
  },
  {
    id: "adsterra-320x50",
    label: "Advertisement",
    width: 320,
    height: 50,
    key: "5d5fb76df401a4bc92b03620e7477327",
  },
  {
    id: "adsterra-728x90",
    label: "Advertisement",
    width: 728,
    height: 90,
    key: "ec344d4baeac46f57d71bfa86782ae5d",
  },
];

function AdUnit({ unit }) {
  const srcDoc = useMemo(
    () => `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:transparent;">
<script>
  atOptions = {
    'key': '${unit.key}',
    'format': 'iframe',
    'height': ${unit.height},
    'width': ${unit.width},
    'params': {}
  };
</script>
<script src="https://bicea.org/22/${unit.key}"></script>
</body>
</html>`,
    [unit],
  );

  return (
    <iframe
      title={unit.label}
      srcDoc={srcDoc}
      width={unit.width}
      height={unit.height}
      loading="lazy"
      scrolling="no"
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      referrerPolicy="strict-origin-when-cross-origin"
      style={{
        display: "block",
        border: 0,
        maxWidth: "100%",
        margin: "0 auto",
        background: "transparent",
      }}
    />
  );
}

export default function AdsterraAds() {
  return (
    <section
      aria-label="Sponsored advertisements"
      className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-8"
    >
      {adUnits.map((unit) => (
        <div
          key={unit.id}
          className={`w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-2 ${unit.width === 728 ? "hidden md:block" : ""}`}
        >
          <p className="mb-2 text-center text-xs tracking-wide text-white/45">
            Advertisement
          </p>
          <AdUnit unit={unit} />
        </div>
      ))}
    </section>
  );
}
