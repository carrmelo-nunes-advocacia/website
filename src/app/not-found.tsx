import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Página não encontrada</h1>
      <p className="mt-4">
        <Link href="/">Voltar ao início</Link>
      </p>
    </main>
  );
}
