import Header from "@/app/_components/Header";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main
        id="about"
        className="flex min-h-screen items-center justify-center px-6 pb-24 pt-24 sm:pb-36 sm:pt-36"
      >
        <p className="max-w-2xl text-center text-xl leading-relaxed text-white/85 sm:text-2xl">
          Welcome to AstroMusic, your gateway to the cosmos of music. Listen
          to vast collection of tracks, albums, and playlists that will take
          you on a journey through sound and space.
        </p>
      </main>
    </div>
  );
}
