import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold">{SITE_NAME}</h1>
      <p className="mt-4 text-lg">{SITE_DESCRIPTION}</p>
    </main>
  );
}
