import React  , {useState} from "react" 
import {
    Link 
} from "react-router-dom"


import './css/nav.css'
import './css/style.css'
import './css/EasyFramer.css'
const PayStackNav = () => {
    let fullWidthClass = [
        "full-frame " , 
        "bg-white "  , 
        "fixed-to-top " , 
        "pad-top-10 " , 
        "pad-bottom-10 " ,  
        "border-bottom-grey "
    ] 

    let mobileNavClass  = [] 
    let desktopNavClass = [] 
    let mobileClass = "mobile-navigations  "
    let [isOpen , setIsOpen] = useState(false)
    let [mClass , setMClass] = useState(" d-nothing out-of-view")
    let [toggler , setToggler] = useState("mobile-toggler relative change-toggle pad-top-15")
    const openNav = () => {
        setIsOpen(!isOpen)
        setMClass(mClass.includes("d-nothing") ? "" : " d-nothing out-of-view")
        setToggler(toggler.includes("change-toggle") ? 
            "mobile-toggler relative pad-top-15" 
            : "mobile-toggler relative change-toggle pad-top-15")
    }
    return (
        <div className={fullWidthClass.join("")}>
            <header className="container ">
                <section className="frame justify-content-between">
                    <div 
                        className=" md-nav-2 pad-top-15 nav-flex"
                    >
                        <Link to="/" className="">
                        <span className='dark-text font-1-5'><b className='bold-700'>paystack</b></span>
                        </Link>
                        <span className='d-sm-hide'>
                        <Link to="/Why Paystack" className=''>Why Paystack</Link>
                        <Link to="/Customers" className=''>Customers</Link>
                        <Link to="/Pricing"  className=''>Pricing</Link>
                        <Link to="/Learn" className='' >Learn</Link>
                        </span>
                    </div> 
                    <nav 
                        className="d-sm-hide md-nav-2 pad-top-15"
                    >
                        <Link to="/Developers">Developers</Link>
                        <Link to="/Support">Support</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Create Your Account" className="md-btn-register no-border no-outline radius-5 bg-green">Create Your Account</Link>
                        <Link to="/career">
                            <span className='n-flag bg-green'></span>
                            <span className='n-flag bg-white'></span>
                            <span className='n-flag bg-green'></span>
                        </Link>
                    </nav> 
                    
                    <div className="d-md-hide search-and-toggle pad-top-15 bd-dark">
                        <a
                            className='button'
                            onClick={openNav}
                            href='#'
                        >
                            <span></span>   
                            <span></span>  
                        </a> 
                    </div> 
                    {isOpen ?
                        <section
                            className={mobileClass + mClass}
                        >
                            <nav 
                                className="md-nav-2 pad-top-15"
                            >
                                <ul>
                                    <li>
                                        <Link to="/Why Paystack" className=''>Why Paystack</Link>
                                    </li>
                                    <li>
                                        <Link to="/Customers" className=''>Customers</Link>
                                    </li>
                                    <li>
                                        <Link to="/Pricing"  className=''>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/Learn" className='' >Learn</Link>
                                    </li>
                                    <li>
                                        <Link to="/Developers">Developers</Link>
                                    </li>
                                    <li>
                                        <Link to="/Support">Support</Link>
                                    </li>
                                    <li>
                                        <Link to="/Create Your Account" className="md-btn-register no-border no-outline radius-5 bg-green">Create Your Account</Link>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                        : null 
                    }
                </section>
            </header>
        </div>
    )
}

export default PayStackNav