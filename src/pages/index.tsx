import { Button, Image, TextField } from '@elements'
import { Copy, Elipse, LinkIcon, Strip } from '@icons'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { api } from '../utils/api'

const Home: NextPage = () => {
  const [res, setRes] = useState('')
  const [toastId, setToastId] = useState('')
  const [status, setStatus] = useState('')

  const {
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const mutation = api.addLink.add.useMutation()

  const handleClick = async () => {
    if (
      Boolean(errors.longUrl || errors.shortUrl) ||
      !Boolean(watch('longUrl')) ||
      !Boolean(watch('shortUrl')) ||
      watch('shortUrl') == '404'
    ) {
      toast.error('Harap masukan input yang benar!')
    } else {
      const longUrl = watch('longUrl') as string
      const shortUrl = watch('shortUrl') as string
      mutation.mutate({
        longUrl: longUrl,
        shortUrl: shortUrl,
      })
    }
  }

  useEffect(() => {
    if (mutation.status == 'loading') {
      const toastId = toast.loading('Loading')
      setStatus('loading')
      setToastId(toastId)
    }
    if (mutation.status == 'success') {
      toast.success('Berhasil generate link.', { id: toastId })
      setStatus('success')
      setRes(mutation.variables?.shortUrl as string)
    }
    if (mutation.status == 'error') {
      toast.error(mutation.error.message, { id: toastId })
      setStatus('error')
    }
  }, [mutation.status])

  return (
    <>
      <Head>
        <title>PERAK.Link 2023</title>
        <meta name="description" content="URL Shortener by PERAK 2023" />
        <meta name="color-scheme" content="light dark" />
        <meta name="color-scheme" content="light only" />
        <meta name="color-scheme" content="dark only" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-onSurface p-5 md:p-20">
        <div className="relative min-h-fit w-full max-w-[1440px] rounded-xl border-t-[4px] border-r-[3px] border-b-[8px] border-l-[5px] border-black bg-[#383D75]">
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
          <div className="flex flex-col items-center justify-center p-2 md:p-10 lg:flex-row lg:items-start lg:space-x-20">
            <div className="relative w-fit pt-16 md:pt-20 lg:flex-none xl:ml-10">
              <p className="font-outline-1 absolute left-0 top-0 -rotate-3 font-retro text-[60px] text-red-light drop-shadow-lg md:text-[80px]">
                Shorter
              </p>
              <p className="font-outline-1 absolute left-1 top-0 -rotate-3 font-retro text-[60px] text-[#F4EFD3] drop-shadow-lg md:text-[80px]">
                Shorter
              </p>
              <div className="flex items-center justify-center space-x-3 ">
                <p className="font-outline-1 -mb-5  -rotate-3 space-x-2 font-retro text-[45px] text-[#E9DEA6] shadow-black drop-shadow-lg">
                  Your
                </p>
                <p className="font-outline-1 -mb-5  rotate-3 space-x-2 font-retro text-[45px] text-[#00E5AC] shadow-black drop-shadow-lg">
                  Link
                </p>
              </div>
              <p className="font-outline-1 font-poppinsBold text-[28px] font-extrabold text-[#F4EFD3] shadow-black drop-shadow-lg">
                could <span className="text-[#FFB1BE]">never be</span> this{' '}
                <span className="text-[#FFB1BE]">easy</span>
              </p>
            </div>
            <div className="mt-14 w-full rounded-xl border-2 border-black bg-[#F16213] bg-opacity-90 px-0.5 py-0.5 md:px-1.5 md:py-1 lg:mt-0">
              <div className="rounded-xl border-2 border-black bg-[#FCBB1F] bg-opacity-70 p-2 md:p-5">
                <div className="relative flex flex-col items-center justify-center rounded-xl border-2 border-black bg-[#F4EFD3] px-2 pt-12 pb-5 md:px-10">
                  <div className="absolute -top-16 rounded-full bg-white">
                    <Image
                      imageUrl="/logo.svg"
                      alt="Logo"
                      className="h-[100px] w-[100px]"
                      fit="fill"
                    />
                  </div>
                  <Controller
                    name="longUrl"
                    control={control}
                    rules={{
                      required: 'Anda harus memasukkan URL untuk diperpendek.',
                      pattern: {
                        value:
                          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                        message: 'Link harus berupa URL valid.',
                      },
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <div onBlur={onBlur} className=" w-full max-w-md">
                          <TextField
                            error={Boolean(error)}
                            message={error?.message}
                            value={value}
                            onChange={onChange}
                            label="Masukkan URL"
                            className=""
                          />
                        </div>
                      )
                    }}
                  />
                  <Controller
                    name="shortUrl"
                    control={control}
                    rules={{
                      required: 'Anda harus memasukkan URL pendek.',
                      pattern: {
                        value: /^[a-zA-Z0-9_-]*$/,
                        message:
                          'Link pendek hanya bisa terdiri dari huruf dan angka.',
                      },
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => {
                      return (
                        <div onBlur={onBlur} className="mt-2 w-full max-w-md">
                          <TextField
                            error={Boolean(error)}
                            message={error?.message}
                            value={value}
                            onChange={onChange}
                            label="perak.link/"
                          />
                        </div>
                      )
                    }}
                  />
                  {res == watch('shortUrl') && res != '' ? (
                    <div className="mt-2 flex w-full flex-col items-center justify-center">
                      <p className="font-poppinsBold text-title-small font-extrabold text-primary">
                        Congrats! Here's your link!
                      </p>
                      <div className="flex w-full max-w-md space-x-5">
                        <input
                          type="text"
                          className="flex h-10 w-full items-center rounded-xl bg-[#888BAC] px-5 font-poppinsBold text-title-small text-[#383D75]"
                          value={
                            res
                              ? `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${res}`
                              : ''
                          }
                        />
                        <button
                          className="flex items-center justify-center rounded-xl bg-[#383D75] px-3 text-white"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${res}`
                            )
                            toast.success('Link telah di-copy ke clipboard.')
                          }}
                          disabled={!res}
                        >
                          <span>
                            <Copy />
                          </span>
                          Copy
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      className="mt-2 flex w-full max-w-md items-center justify-center"
                      size="small"
                      variant={1}
                      onClick={handleClick}
                      leftIcon={<LinkIcon />}
                      disabled={status == 'loading'}
                    >
                      Generate PERAK.Link
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-96 hidden lg:block">
            <Strip className="201" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
