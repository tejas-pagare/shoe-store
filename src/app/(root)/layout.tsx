import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      <main className=' flex-1 wrapper'>
      {children}

      </main>
      <Footer/>
    </div>
  )
}

export default layout
