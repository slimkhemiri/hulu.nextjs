import Image from "next/image"
function Header() {
    return (
        <header className=''>
            <h1>header is here</h1>
            <Image 
            className="object-contain"
            src="https://links.papareact.com/ua6" width={200} height={100} />
        </header>
    )
}

export default Header
