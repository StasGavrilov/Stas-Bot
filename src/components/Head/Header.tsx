import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <div className='relative'>
        <aside className='absolute h-screen w-40 bg-[#2c3e50]'>
            <Logo />

            <div className="w-[150px] h-[1.5px] bg-black my-2 mx-auto shadow-md rounded opacity-50"></div>

            <NavBar />
        </aside>
    </div>
  )
}
