import { Image } from 'next/dist/client/image-component.js'
import photoAsset from '../assets/photo.jpg'

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-between">
      <div className="h-14" />
      <div className="flex flex-col items-center gap-x-10 gap-y-12 border-b-8 border-green-700 bg-white px-10 py-16 shadow-xl sm:flex-row dark:bg-zinc-800">
        <div className="flex flex-none">
          <Image
            className="rounded-full"
            src={photoAsset}
            alt="Vladislav's photo"
            width="120"
            height="120"
          />
        </div>
        <div className="space-y-2 text-center sm:text-right">
          <div>Vladislav Iakovlev</div>
          <div>Senior Frontend Developer</div>
          <div className="inline-flex justify-end space-x-2">
            <a className="underline" href="https://github.com/vlad-iakovlev">
              GitHub
            </a>
            <span>{'\u2022'}</span>
            <a
              className="underline"
              href="https://www.linkedin.com/in/vlad-iakovlev/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        <a
          className="flex-none text-zinc-700 underline dark:text-zinc-400"
          href="https://expense.vlad-iakovlev.dev/"
        >
          Track Expenses
        </a>
        <a
          className="flex-none text-zinc-700 underline dark:text-zinc-400"
          href="https://wave-simulation.vlad-iakovlev.dev/"
        >
          Simulate Waves
        </a>
      </div>
    </div>
  )
}
