import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
)
