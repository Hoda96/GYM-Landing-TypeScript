import logo from "@/assets/Logo.png";


export default function Footer() {
  return (
    <footer className="bg-primary-100 py-20 ">
        <div className="md:flex justify-between items-center gap-8 w-5/6 mx-auto">
            {/* Logo */}
            <div className="md:basis-1/2 md:mt-0 mt-16">
                <img src={logo} alt={logo}/>
                <p className="my-4">Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.</p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            {/* Col #1 */}
            <ul className="md:basis-1/4 md:mt-0 mt-16">
                <h5 className="text-md font-bold">Links</h5>
                <li className="my-4">Massa orci senectus</li>
                <li className="my-4">Massa orci senectus</li>
                <li className="my-4">Massa orci senectus</li>
            </ul>
            {/* Col #2 */}
            <ul className="md:basis-1/4 md:mt-0 mt-16">
                <h5 className="text-md font-bold">Contact Us</h5>
                <li className="my-4">Tempus metus mattis risus volutpat egestas.</li>
                <li className="my-4"><a href="tel:333425-6825">(333)425-6825</a></li>
              
            </ul>
        </div>
    </footer>
  )
}