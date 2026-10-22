export function Orbe() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: "min(94vw, 760px)",
        aspectRatio: "1",
        background: `
          radial-gradient(circle at 50% 50%, rgba(211,58,52,0.16) 0%, transparent 62%),
          radial-gradient(circle at 44% 36%, rgba(214,178,104,0.08) 0%, transparent 46%),
          radial-gradient(circle at 50% 50%, rgba(12,11,11,0.55) 30%, transparent 70%)
        `,
        maskImage:
          "radial-gradient(circle at 50% 50%, #000 55%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(circle at 50% 50%, #000 55%, transparent 78%)",
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: "inset 0 -1px 80px rgba(214,178,104,0.10)",
        }}
      />
      <div className="absolute inset-[10%] rounded-full border border-brass/8" />
    </div>
  );
}
