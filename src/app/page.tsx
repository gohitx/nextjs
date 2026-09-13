import Header from "@/src/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home" className="flex-1">
        <h1 className="sr-only">Home</h1>
      </main>
    </>
  );
}
