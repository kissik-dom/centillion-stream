import { ArrowRight, Film, Monitor, Play, Radio, Tv, Zap } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Tv, title: "1000+ Channels", desc: "AI-curated live TV channels" },
  { icon: Film, title: "Movies & Shows", desc: "On-demand AI content library" },
  { icon: Play, title: "Live Streams", desc: "Real-time AI-generated content" },
  { icon: Radio, title: "Music Videos", desc: "24/7 music video channels" },
  { icon: Monitor, title: "Multi-Screen", desc: "Watch multiple streams at once" },
  { icon: Zap, title: "Smart Recs", desc: "AI learns what you love" },
];

export function LandingPage() {
  return (
    <>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
            <div className="relative mb-8">
              <div className="absolute inset-0 blur-3xl opacity-30 rounded-full scale-150" style={{ backgroundColor: "#FF4D6A" }} />
              <div className="relative size-20 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF4D6A, #E0354D)", boxShadow: "0 0 20px #FF4D6A4D" }}>
                <Tv className="size-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #FF4D6A, #FF6B82, #E91E8C)" }}>Centillion Stream</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-10">1000+ AI-curated channels, movies, shows, and live streams. The future of entertainment.</p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="px-8" style={{ backgroundColor: "#FF4D6A", color: "white" }}>
                <Link to="/signup">Get Started <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[rgba(255,255,255,0.15)] hover:bg-[#1A1A24]">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="px-4 pb-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-xl bg-[#12121A] border border-[rgba(255,255,255,0.06)] hover:border-[#FF4D6A]/30 transition-colors">
                  <f.icon className="size-8 mb-3" style={{ color: "#FF4D6A" }} />
                  <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <footer className="border-t border-[rgba(255,255,255,0.06)] py-6 text-center text-muted-foreground text-sm">Centillion OS · Part of the Centillion Ecosystem</footer>
        </div>
    </>
  );
}
