import React from 'react';
import {NavLink} from 'react-router-dom';


function Footer (){
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
            <footer>
                <div className='footer'>
                    <div className='row'>
                        <ul>
                            <li><NavLink to={'/'} className='link'>Contact Us</NavLink></li>
                            <li><NavLink to={'/'}className='link'>Our services</NavLink></li>
                            <li><NavLink to={'/'}className='link'>Privacy Policy</NavLink></li>
                            <li><NavLink to={'/'}className='link'>About us</NavLink></li>
                            <li><NavLink to={'/'}className='link'>career</NavLink></li>
                        </ul>
                        <div class="font-row">
<NavLink to={'/'}><i class="fa fa-facebook"></i></NavLink>
<NavLink to={'/'}><i class="fa fa-instagram"></i></NavLink>
<NavLink to={'/'}><i class="fa fa-youtube"></i></NavLink>
<NavLink to={'/'}><i class="fa fa-twitter"></i></NavLink>
</div>
                    </div>
           
                    <div className='row'>
                        I Copyright © 2023 
                         - All rights reserved || Designed By: DEV
                        </div>
                </div>
            </footer>
            
        </>
    )
}






export default Footer;