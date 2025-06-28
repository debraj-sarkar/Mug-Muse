import logo from "../src/assets/logo.svg"
export default function Footer() {
    return (
        // main container
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-start">
            {/* opening hours */}
            <div className="py-4">
                <p className="font-primary text-darkBrown font-bold text-3xl md:text-xl">Opening Hours</p>
                <p className="text-sm">Mon-Fri: 08:00 AM - 08:00 PM</p>
                <p className="text-sm">Sat-Sun: 09:00 AM - 05:00 PM</p>
            </div>

            {/* contact us */}
            <div className="py-4">
                <p className="font-primary text-darkBrown font-bold text-3xl md:text-xl">Contact Us</p>
                <p className="text-sm">123 Sip Street, United Brewland <br />
                    CO 12345, Caféville<br />
                    (555) 123-4567<br />
                    info@mugmuse.com</p>
            </div>

            {/* logo */}
            <div className=" h-full flex items-center py-4">
                <img src={logo} className="h-10" />
                <p className="font-primary font-bold text-3xl ml-3 md:text-sm">Mug Muse</p>
            </div>
        </div>
    )
}