import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

// Material UI
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// Theme
import theme from '../theme'

// Alert
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Custom Components
import Header from '../components/Header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default MyApp
