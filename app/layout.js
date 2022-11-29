import './globals.css'
import FirstComponent from '../components/FirstComponent'
import SecondGrid from '../components/SecondGrid'
import ThirdComponent from '../components/ThirdComponent'
import Fourth from '../components/Fourth'


export default function RootLayout({ children }) {
    return (
        <html>
            <head>
            <title>Tailwind Features</title>
            </head>
            <body className='min-h-screen bg-black'>            
            {children}
            <FirstComponent />
            <SecondGrid />
            <ThirdComponent />
            <Fourth />
            </body>
        </html>
    )
}