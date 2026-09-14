import GXB from "@/src/components/ui/GXB";
import Header from "@/src/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home" className="flex flex-1">
        <h1 className="sr-only">Home</h1>
        <GXB text="heheheheh" />
      </main>
    </>
  );
}
