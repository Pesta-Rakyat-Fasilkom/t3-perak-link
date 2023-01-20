import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

import { api } from '../utils/api'

import '../styles/globals.css'
import { Spinelipse, Toasterror, Toastsuccess } from '@icons'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: '',
          style: {
            background: '#363636',
            color: '#fff',
          },
          loading: {
            style: {
              fontFamily: 'Poppins',
              background: '#2F7A84',
              border: '2px solid #6DB8C2',
              color: '#F3E2CE',
            },
            icon: <Spinelipse />,
          },
          success: {
            style: {
              fontFamily: 'PoppinsBold',
              background: '#A3AA10',
              border: '2px solid #C7CC70',
              color: '#F4EFD3',
            },
            icon: <Toastsuccess />,
          },
          error: {
            style: {
              fontFamily: 'PoppinsBold',
              background: '#A33233',
              border: '2px solid #CA5355',
              color: '#F4EFD3',
            },
            icon: <Toasterror />,
          },
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
