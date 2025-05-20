import Link from "next/link";

export default function NavBar() {
  const links = [
    {label: 'Home', href:'/'},
    {label: 'Horta', href:'/horta'},
    {label: 'Search', href:'/search'},
    {label: 'Sign In', href:'/signIn'}
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-3 h-14 items-center bg-[#9EFADA]'>
        <Link href="/"></Link>
        <ul className='flex space-x-7'>
            {links.map(link => <Link key={link.href} 
            className='text-black bg-gray-300 hover:bg-gray-500 px-3 py-1'
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>    
  );
}