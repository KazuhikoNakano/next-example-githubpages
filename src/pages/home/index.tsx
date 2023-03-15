import Button from '@/components/Button/Button'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home(): JSX.Element {
  const router = useRouter()
  const clickHandler = (_event: React.MouseEvent<HTMLButtonElement>): void => {
    router.push('/blog').catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Next.js + Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Next.js + Tailwind CSS + Prettier</h1>
        <p>Your project is now set up with Next.js, Tailwind CSS, and Prettier!</p>
        <Button
          className={'mt-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'}
          handleClick={clickHandler}
          label={'Blog'}
        />
      </main>
    </div>
  )
}
