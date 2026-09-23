import Header from "@/app/_components/Header";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <main
        id="about"
        className="flex min-h-0 flex-1 items-center justify-center px-6 pb-24 pt-24 sm:pb-36 sm:pt-36"
      >
        <div className="max-w-2xl text-center text-white">
          <h1 className="text-5xl leading-none sm:text-7xl">
            Your music. Your library. Your way.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-white/70 sm:text-2xl">
            Play, organize, and manage your music in one place.
          </p>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-6xl shrink-0 px-4 pb-4 text-left text-sm text-white/35 sm:px-6">
        Web 0.1.0 Nova
      </footer>
    </div>
  );
}
