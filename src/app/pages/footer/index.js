import React from 'react';
import './index.scss';
import logo from '../../../assets/images/logo.png';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory();

    const handleClickScroll = () => {
        history.push('/')
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className='footer' id='contact-us'>
                <div className='footer__container'>
                    <div className='footer__section'>
                        <div className='footer__left'>
                            <img src={logo} alt='' />
                            <p>Kaam Keeda is an online platform that helps micro, small and medium sized organisations find qualified talent in an easy, hassle free, affordable manner.</p>
                            <div className='footer__icons'>
                                <a href='https://www.linkedin.com/company/kaam-keeda/' target='_blank'><i className='fa fa-linkedin' /></a>
                                <a href='https://instagram.com/kaam_keeda?igshid=YmMyMTA2M2Y=' target='_blank'><i className='fa fa-instagram' /></a>
                                <a href='https://www.facebook.com/people/Kaam-Keeda/100081664208643/' target='_blank'><i className='fa fa-facebook' /></a>
                            </div>
                        </div>
                        <div className='footer__center1'>
                            <h2>Menu</h2>
                            <a><h6><HashLink smooth to='#about-us' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                About
                            </HashLink></h6></a>
                            <a><h6><HashLink smooth to='#how-to-apply' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                How to Apply
                            </HashLink></h6></a>
                            <a><h6><HashLink smooth to='#jobs' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Jobs
                            </HashLink></h6></a>
                        </div>
                        <div className='footer__center2'>
                            <h2>Contact Us</h2>
                            <div className='footer__phone'>
                                <i className='fa fa-phone' />
                                <div className='footer__phone__numbers'>
                                <a href='tel:+919148518281'>+91 91485 18281</a>
                                <a href='tel:+918073023279'>+91 80730 23279</a>
                                </div>
                            </div>
                            <div className='footer__email'>
                                <i className='fa fa-envelope' />
                                <a href='mailto:support@kaamkeeda.com'>support@kaamkeeda.com </a>
                            </div>
                        </div>
                        <div className='footer__right'>
                            <h2>Address</h2>
                            <div className='footer__address'>
                                <i className='fa fa-map-marker' />
                                <h6>Address is #36, Venkatappa Road. Off Queens Road. Shivajinagar. Bangalore 560052</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;