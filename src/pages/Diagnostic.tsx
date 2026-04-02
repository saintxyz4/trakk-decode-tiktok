import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Loader2 } from "lucide-react";

export default function Diagnostic() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file && !url) return;
    setLoading(true);
    setTimeout(() => {
      setResult(
        "## Diagnostic de votre vidéo\n\n" +
        "**Score global : 4.2/10**\n\n" +
        "### Problèmes identifiés\n" +
        "1. **Hook faible** — Les 3 premières secondes ne captent pas l'attention\n" +
        "2. **Durée trop longue** — 87% de perte avant la fin\n" +
        "3. **Hashtags non optimisés** — Trop génériques, pas de niches ciblées\n\n" +
        "### Recommandations\n" +
        "- Reformulez votre hook avec une question provocatrice\n" +
        "- Raccourcissez à 15-20 secondes\n" +
        "- Utilisez 3-5 hashtags de niche avec <100k vues"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Diagnostic vidéo</h1>
        <p className="text-muted-foreground mt-1">
          Importez une capture d'écran de vos statistiques ou collez l'URL de votre vidéo TikTok.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="url">URL de la vidéo TikTok</Label>
          <Input id="url" placeholder="https://www.tiktok.com/@user/video/..." value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>Capture d'écran des statistiques</Label>
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
            <Upload className="h-6 w-6 text-muted-foreground mb-2" />
            <span className="text-sm text-muted-foreground">
              {file ? file.name : "Cliquez ou glissez votre capture"}
            </span>
            <input type="file" accept="image/*" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          </label>
        </div>

        <Button type="submit" disabled={loading || (!file && !url)}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Analyse en cours...
            </>
          ) : (
            "Lancer le diagnostic"
          )}
        </Button>
      </form>

      {result && (
        <div className="glass-card p-6 prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, "<br>").replace(/##\s(.*)/g, "<h2>$1</h2>").replace(/###\s(.*)/g, "<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
        </div>
      )}
    </div>
  );
}
