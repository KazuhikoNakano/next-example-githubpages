import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Next.js + Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="rounded bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">
          Next.js + Tailwind CSS + Prettier
        </h1>
        <p>
          Your project is now set up with Next.js, Tailwind CSS, and Prettier!
        </p>
      </main>
    </div>
  );
}
