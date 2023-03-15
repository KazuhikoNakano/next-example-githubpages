import Head from 'next/head'

export default function Blog(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Blogページ</h1>
      </main>
    </div>
  )
}
