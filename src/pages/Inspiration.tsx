import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Zap } from "lucide-react";

export default function Inspiration() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    setTimeout(() => {
      setResult(
        "## Analyse de la vidéo virale\n\n" +
        "**Pourquoi ça marche :**\n" +
        "- Hook émotionnel dans les 2 premières secondes\n" +
        "- Format \"avant/après\" qui maintient la curiosité\n" +
        "- Musique tendance parfaitement synchronisée\n\n" +
        "**Plan d'action pour vous :**\n" +
        "1. Adaptez le hook à votre niche\n" +
        "2. Gardez le même format narratif\n" +
        "3. Publiez entre 18h-20h (votre audience)\n" +
        "4. Répondez aux commentaires dans les 30 premières minutes"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Inspiration IA</h1>
        <p className="text-muted-foreground mt-1">
          Collez l'URL d'une vidéo TikTok virale et recevez un plan d'action personnalisé.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="url">URL de la vidéo TikTok</Label>
          <Input id="url" placeholder="https://www.tiktok.com/@user/video/..." value={url} onChange={(e) => setUrl(e.target.value)} required />
        </div>
        <Button type="submit" disabled={loading || !url}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Analyse en cours...
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              Analyser cette vidéo
            </>
          )}
        </Button>
      </form>

      {result && (
        <div className="glass-card p-6 prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, "<br>").replace(/##\s(.*)/g, "<h2>$1</h2>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
        </div>
      )}
    </div>
  );
}
