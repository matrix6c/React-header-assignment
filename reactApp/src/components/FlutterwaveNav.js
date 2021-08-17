// import React, {useState} from 'react'
// import reactDom, {Fragment} from 'react'
// import{Link,
//     BrowserRouter , 
//     Switch , 
//     Route   
// } from 'react-router-dom'
// import './css/style.css'
// import './css/nav.css'
// import './css/EasyFramer.css'

// const FlutterwaveNav = () =>{
//     let fullWidthClass = [
//         'full-frame',
//         'fixed-to-top',
//         'pad-top-10',
//         'pad-bottom-10',
//     ]

//     let mobileNavClass = []
//     let desktopNavClass = []
//     let mobileClass = 'mobile-navigations  '
//     let [isOpen, setIsOpen] = useState(false)
//     let [mClass, setMClass] = useState('d-nothimg out-of-view')
//     let [toggler, setToggler] = useState('mobile-toggler relative change-toggle pad-top-15')
//     const openNav = () => {
//         setIsOpen(!isOpen)
//         setMClass(mClass.includes('d-nothing') ? "" : 'd-nothing out-of-view')
//         setToggler(toggler.includes('change-toggle') ? 
//         'mobile-toggler relative pad-top-15' :
//         'mobile-toggler relative change-toggle pad-top-15')
//     }

//     return(
//         <div className={fullWidthClass.join('')}>
//             <header className='framer'>
//                 <section className='frame justify-content-between '>
//                         <BrowserRouter>
//                             <Switch>
//                                 <div className=''>
//                                     <Route path = '/'>
//                                         <span className='dark-text font-1-5'>Flutter<b className='bold-700'>wave</b></span>
//                                     </Route>
//                                 </div>
//                                 <nav className=" md-nav pad-top-15">
//                                     <Route path= '/about'>
//                                         <span className='dark-text font-1-5'>Flutter<b className='bold-700'>wave</b></span>
//                                     </Route>
//                                 </nav>
//                             </Switch>
//                         </BrowserRouter>
//                 </section>
//             </header>
//         </div>
//     )
// }


// export default FlutterwaveNav

















import React  , {useState} from "react" 
import {
    Link 
} from "react-router-dom"


import './css/nav.css'
import './css/style.css'
import './css/EasyFramer.css'
const FlutterwaveNav = () => {
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
                    <div className=" ">
                        <Link to="/" className="brand-name">
                        <span className='dark-text font-1-5'>Flutter<b className='bold-700'>wave</b></span>
                        </Link>
                    </div>
                    <nav 
                        className="d-sm-hide md-nav-2 pad-top-15"
                    >
                        <Link to="/about" tabIndex="-1">Our Solutions</Link>
                        <Link to="/blog">Developers</Link>
                        <Link to="/career">Resources</Link>
                        <Link to="/career">Pricing</Link>
                        <Link to="/career">Sign In</Link>
                        <Link to="/sign-up" className="md-btn-register no-border no-outline radius-5">CREATE ACCOUNT</Link>
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
                                        <Link to="/about" tabIndex="-1" className='nav-space'>Our Solutions</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" className='nav-space'>Developers</Link>
                                    </li>
                                    <li>
                                        <Link to="/career" className='nav-space'>Resources</Link>
                                    </li>
                                    <li>
                                        <Link to="/career" className='nav-space'>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/career" className='nav-space'>Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to="/sign-up" className="md-btn-register  no-border no-outline radius-5">CREATE ACCOUNT</Link>
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

export default FlutterwaveNav