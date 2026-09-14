import GXB from "@/src/components/ui/GXB";

export default function Home() {
  return (
    <main className="flex flex-1">
      <h1 className="sr-only">Home</h1>
      <GXB text="Welcome — the starting point of your new Astro project." />
    </main>
  );
}
