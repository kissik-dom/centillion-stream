import { Sparkles } from "lucide-react";

export function DashboardPage() {
  const stats = [
    { label: "Active", value: "Online", color: "#00D4AA" },
    { label: "Security", value: "100%", color: "#FF4D6A" },
    { label: "Uptime", value: "99.9%", color: "#C4A1FF" },
    { label: "Status", value: "Live", color: "#FF8C42" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
        <Sparkles className="size-6" style={{ color: "#FF4D6A" }} /> What's On
      </h1>
      <p className="text-muted-foreground text-sm mb-6">1000+ AI-curated channels streaming 24/7</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#12121A] rounded-xl border border-[rgba(255,255,255,0.06)] p-4">
            <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
            <p className="text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#12121A] rounded-xl border border-[rgba(255,255,255,0.06)] p-8 text-center">
        <div className="relative mx-auto mb-4 w-fit">
          <div className="absolute inset-0 blur-2xl opacity-20 rounded-full scale-150" style={{ backgroundColor: "#FF4D6A" }} />
          <div className="relative size-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF4D6A, #E0354D)" }}>
            <Sparkles className="size-8 text-white" />
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">Centillion Stream</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4">1000+ AI-curated channels, movies, shows, and live streams. The future of entertainment.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["1000+ Channels", "Movies & Shows", "Live Streams", "Music Videos", "Multi-Screen", "Smart Recs"].map((tag) => (
            <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-[#1A1A24] text-muted-foreground">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
