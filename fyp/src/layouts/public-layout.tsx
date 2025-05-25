import { Footer } from '@/components/footer'
import Header from '@/components/header'
import AuthHanlder from '@/handlers/auth-handler'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className='w-full'>
      <AuthHanlder/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicLayout