import { type NextPage } from 'next'
import Head from 'next/head'
import { Button } from '@elements'
import { Arrowuturnleft, Elipse } from '@icons'
import { useRouter } from 'next/router'

const NotFound: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Not Found 404 - PERAK.Link 2023</title>
        <meta name="description" content="Not Found" />
        <meta name="color-scheme" content="light dark" />
        <meta name="color-scheme" content="light only" />
        <meta name="color-scheme" content="dark only" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center bg-onSurface p-5 md:p-20">
        <div className="relative h-full w-full max-w-[1440px] rounded-xl border-t-[4px] border-r-[3px] border-b-[8px] border-l-[5px] border-black bg-[#383D75]">
          <div className="relative flex h-7 w-full items-center justify-center  rounded-xl border-b-4 border-black bg-[#6DB8C2] p-2 md:h-10 lg:h-fit">
            <div className="absolute left-3 flex space-x-3 md:left-8">
              <div className="h-5 w-5 rounded-full border-2 border-black bg-green-light md:h-7 md:w-7"></div>
              <div className="h-5 w-5 rounded-full border-2 border-black bg-orange-light md:h-7 md:w-7"></div>
              <div className="h-5 w-5 rounded-full border-2 border-black bg-red-light md:h-7 md:w-7"></div>
            </div>
            <div className="absolute -top-14 -right-10 hidden lg:block">
              <Elipse />
            </div>
            <div className="absolute -top-16 right-5 hidden lg:block">
              <p className="font-outline-2 select-none font-retro text-display-large text-[#F4EFD3]">
                Perak
              </p>
            </div>
            <div className="absolute -top-4 -right-4 hidden lg:block">
              <p className="font-outline-2 select-none font-retro text-display-large text-[#F4EFD3]">
                Link
              </p>
            </div>
            <div className="hidden w-fit rounded-r-full rounded-l-full bg-white px-14 lg:block">
              <p className="select-none font-retro text-headline-small text-[#2F7A84]">
                Kembali Menjamboet Harmoni
              </p>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center p-2 pb-20">
            <p className="font-retro text-display-medium text-white">
              Not Found
            </p>
            <p className="w-full max-w-md text-center font-poppinsBold text-title-medium font-extrabold text-white">
              Sepertinya link yang kamu gunakan tidak ditemukan atau belum
              terdaftar.
            </p>
            <Button
              className="mt-2 flex w-full max-w-md items-center justify-center"
              size="large"
              variant={1}
              leftIcon={<Arrowuturnleft />}
              onClick={() => router.push('/')}
            >
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
