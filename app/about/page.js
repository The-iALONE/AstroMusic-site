import Header from "@/app/_components/Header";

const features = [
  {
    number: "01",
    title: "Music player",
    text: "Listen to your collection in a focused, seamless player built around the way you enjoy music.",
  },
  {
    number: "02",
    title: "Music manager",
    text: "Organize your tracks, extract their information, and edit metadata so your library stays clean and complete.",
  },
];

const futurePlans = [
  {
    number: "01",
    title: "Core Music Player",
    text: "A simple, focused player for listening to your music with the essentials you need.",
  },
  {
    number: "02",
    title: "Music Library",
    text: "Organize and manage your local music collection in one place.",
  },
  {
    number: "03",
    title: "Import & Metadata",
    text: "Import music from different sources and make it easier to keep your library's information complete and organized.",
  },
  {
    number: "04",
    title: "Playlist Import & Export",
    text: "Import and export playlists across devices while keeping track of the songs they contain.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden pb-16">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-26 sm:px-6 sm:pt-28">
        <section className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/45">
            About AstroMusic
          </p>
          <h1 className="text-5xl leading-none text-white sm:text-7xl">
            Music, made personal.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-2xl">
            An Android music player and library manager built around your own
            music collection.
          </p>
        </section>

        <section className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl shadow-black/25 backdrop-blur-xl sm:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.number} className="bg-black/35 p-6 sm:p-7">
              <span className="text-sm text-white/35">{feature.number}</span>
              <h2 className="mt-4 text-2xl text-white">{feature.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-white/55">
                {feature.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 overflow-hidden rounded-3xl border border-white/15 bg-black/35 shadow-2xl shadow-black/25 backdrop-blur-xl">
          <div className="border-b border-white/10 px-6 py-5 sm:px-7">
            <h2 className="text-3xl text-white">Future plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-[0.18em] text-white/30">
                  <th className="px-6 py-4 font-normal sm:px-7">Plan</th>
                  <th className="px-6 py-4 font-normal">What it could do</th>
                  <th className="px-6 py-4 font-normal sm:px-7">Status</th>
                </tr>
              </thead>
              <tbody>
                {futurePlans.map((plan) => (
                  <tr
                    key={plan.number}
                    className="border-b border-white/8 text-white/65 last:border-0"
                  >
                    <td className="px-6 py-5 sm:px-7">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white/30">{plan.number}</span>
                        <span className="text-lg text-white">{plan.title}</span>
                      </div>
                    </td>
                    <td className="max-w-xl px-6 py-5 leading-relaxed text-white/50">
                      {plan.text}
                    </td>
                    <td className="px-6 py-5 sm:px-7">
                      <span className="rounded-full border border-amber-200/15 bg-amber-200/10 px-3 py-1 text-sm text-amber-100/70">
                        Planned
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
