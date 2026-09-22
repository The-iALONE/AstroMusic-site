import Header from "@/app/_components/Header";

const releases = [
  {
    version: "0.0.0",
    channel: "Unstable",
    date: "",
    platform: "Android",
    size: "0.0 MB",
    current: true,
    isDownloadable: true,
  },
  {
    version: "2.4.0",
    channel: "Stable",
    date: "Sep 18, 2026",
    platform: "Android",
    size: "86.4 MB",
    isDownloadable: false,
  },
  {
    version: "2.3.2",
    channel: "Stable",
    date: "Aug 29, 2026",
    platform: "Android",
    size: "84.9 MB",
    isDownloadable: false,
  },
  {
    version: "2.3.0",
    channel: "Stable",
    date: "Jul 12, 2026",
    platform: "Android",
    size: "84.1 MB",
    isDownloadable: false,
  },
  {
    version: "2.2.1",
    channel: "Legacy",
    date: "Jun 04, 2026",
    platform: "Android",
    size: "81.7 MB",
    isDownloadable: false,
  },
];

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen overflow-hidden pb-16">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-26 sm:px-6 sm:pt-28">
        <section className="mb-6 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/45">
            AstroMusic releases
          </p>
          <h1 className="max-w-5xl whitespace-normal text-5xl leading-none text-white sm:whitespace-nowrap sm:text-7xl">
            Music in the heart of the void.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            Download the latest AstroMusic Android experience and keep every
            track, playlist, and discovery close at hand.
          </p>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/15 bg-black/35 shadow-2xl shadow-black/25 backdrop-blur-xl">
          <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <h2 className="text-2xl text-white">All versions</h2>
              <p className="mt-1 text-sm text-white/45">
                Choose a release for your setup.
              </p>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-sm text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Latest release
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-[0.18em] text-white/35">
                  <th className="px-5 py-4 font-normal sm:px-7">Version</th>
                  <th className="px-5 py-4 font-normal">Released</th>
                  <th className="px-5 py-4 font-normal">Platform</th>
                  <th className="px-5 py-4 font-normal">Size</th>
                  <th className="px-5 py-4 font-normal">Status</th>
                  <th className="px-5 py-4 font-normal sm:px-7" />
                </tr>
              </thead>
              <tbody>
                {releases.map((release) => (
                  <tr
                    key={release.version}
                    className="border-b border-white/8 text-white/75 transition-colors last:border-0 hover:bg-white/5"
                  >
                    <td className="px-5 py-5 sm:px-7">
                      <div className="flex items-center gap-3">
                        <span className="text-lg text-white">v{release.version}</span>
                        {release.current && (
                          <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/60">
                            Current
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-5 text-white/50">{release.date}</td>
                    <td className="px-5 py-5">{release.platform}</td>
                    <td className="px-5 py-5 text-white/50">{release.size}</td>
                    <td className="px-5 py-5">
                      <span
                        className={
                          release.channel === "Legacy"
                            ? "text-white/40" 
                            : release.channel === "Unstable" ? "text-red-300" : "text-emerald-200"
                        }
                      >
                        {release.channel}
                      </span>
                    </td>
                    <td className="px-5 py-5 sm:px-7">
                      <a
                        href="#download"
                        className={ release.isDownloadable ? "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20" : "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20 pointer-events-none opacity-20 cursor-none"}
                        
                        // remove pointer-events-none opacity-20 cursor-none in production
                      >
                        <DownloadIcon />
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-5 text-sm text-white/35">
          AstroMusic for Android. All releases are signed and
          verified.
        </p>
      </main>
    </div>
  );
}
