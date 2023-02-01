import React, { useState, useEffect } from 'react';
import './index.scss';
import icon from '../../../assets/images/iconnew.png';
import icon1 from '../../../assets/images/icon11.png';
import icon2 from '../../../assets/images/icon22.png';
import icon3 from '../../../assets/images/icon33.png';
import how from '../../../assets/images/Howitworks.png';
import img1 from '../../../assets/images/01.png';
import img2 from '../../../assets/images/02.png';
import iconblue from '../../../assets/images/iconb.png';
import iconjob from '../../../assets/images/job.svg';
import Carousel from 'react-grid-carousel'
import testmonial from '../../../assets/images/test.png';
import testmonial1 from '../../../assets/images/test11.png';
import testmonial2 from '../../../assets/images/test22.png';
import playstore from '../../../assets/images/play-store.png';
import Faq from 'react-faq-component';
import faqimg from '../../../assets/images/faqimg.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { TopJobLists } from '../../utils/apiCalls';
import axios from 'axios';

const AboutUs = () => {
    const [topJobLists, setTopJobLists] = useState([]);
    const [alertText, setAlertText] = useState('');
    const [isLoading, setLoading] = useState(true);

    const data = {
        title: "FAQ's",
        rows: [
            {
                title: "What type of jobs are available on Kaam Keeda?",
                content: "One can find jobs for full-time/ part-time, Internships, weekend, & gig work on Kaam Keeda."
            },
            {
                title: "What is the due diligence done on the employer?",
                content: "All companies on Kaam Keeda are verified through their PAN and GST certificates. Only registered companies can advertise jobs on Kaam Keeda."
            },
            {
                title: "What roles are available on Kaam Keeda?                ",
                content: "On Kaam Keeda, job seekers can apply to 70+ different types of roles. Popular roles include BPO jobs/Telecaller, Back Office Jobs, Business Development, Account/Finance, Digital & Online Marketing amongst others."
            },
            {
                title: "What value added services does Kaam Keeda provide?                ",
                content: "Kaam Keeda provides a total of 6 value added services for Job Seekers and Employers.<br/> <span className='test-premium'>(Link to premium features)</span>"
            }]
    }

    // useEffect(() => {
    //     getTopJobLists('');
    // }, []);

    // const getTopJobLists = () => {
    //     TopJobLists((res) => {
    //         const { message, statusCode, data } = res;
    //         setTopJobLists(data);
    //         setAlertText(message);
    //         console.log(data);
    //     });
    // };

    const baseurl = "https://mediabird.in/kaamkeeda/";

    useEffect(() => {
        axios.get(`${baseurl}api/top-job-lists`).then((response) => {
            setTopJobLists(response.data.data.slice(0, 12));
            setLoading(false);
            console.log(response.data.data);
            console.log(response.data.data.slice(0, 12));
        });
    }, []);


    return (
        <div>
            <div className='about' id='about-us'>
                <div className='about__container'>
                    <div className='about__header'>
                        <ScrollAnimation delay={300} animateIn='bounceInRight'
                            animateOut='bounceOutLeft'>
                            <h2>Who we Are ?</h2>
                            <h1>About US</h1>
                        </ScrollAnimation>
                    </div>
                    <div className='about__sections'>
                        <div className='about__section section1'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <div className='about__section__image'>
                                    <img src={icon3} alt='' />
                                </div>
                                <h5>About Us</h5>
                                <p>Kaam Keeda is an online platform that helps micro, small and medium sized organisations
                                    find qualified talent in an easy, hassle free, affordable manner.</p>
                            </ScrollAnimation>
                        </div>
                        <div className='about__section section2'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <div className='about__section__image'>
                                    <img src={icon2} alt='' />
                                </div>
                                <h5>Mission</h5>
                                <p>Our mission is to ensure everyone who desires to find a job has access to the right jobs by
                                    bridging the gap between employers & employees in Micro, Small and Medium enterprises and
                                    making Grey collar jobs accessible to all. </p>
                            </ScrollAnimation>
                        </div>
                        <div className='about__section section3'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <div className='about__section__image'>
                                    <img src={icon1} alt='' />
                                </div>
                                <h5>Vision</h5>
                                <p>Our vision is to provide an user friendly platform designed with a special focus on MSME’s and
                                    grey collar talent.</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how-it-works' id='how-to-apply'>
                <div className='how-it-works__container'>
                    <div className='how-it-works__header'>
                        <h1>How are we different </h1>
                    </div>
                    <div className='how-it-works__content'>
                        {/* <div className='how-it-works__image'>
                            <img src={how} alt='' />
                        </div> */}
                        <div className='how-it-works__sections'>
                            <div className='how-it-works__section1'>
                                <img src={img1} alt='' />
                                <div className='how-it-works__section1__div'>
                                    <ScrollAnimation animateIn='fadeIn'
                                        animateOut='fadeOut' delay={300}>
                                        <h4>Employers:</h4>
                                        <div className='how-it-works__scroll'>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>India’s first job portal designed to help micro, small, medium sized and start up businesses
                                                    to find Talent</p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Advertise all your jobs for free </p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Access our database of thousands of grey collar employees</p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Easily call and chat with potential candidates free of cost</p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>End to end recruitment support provided by Kaam Keeda’s team of seasoned recruiters for
                                                    bulk and niche roles.</p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className='how-it-works__section2'>
                                <img src={img2} alt='' />
                                <div className='how-it-works__section2__div'>
                                    <ScrollAnimation animateIn='fadeIn'
                                        animateOut='fadeOut' delay={300}>
                                        <h4>Job Seekers:</h4>
                                        <div className='how-it-works__scroll'>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'> Sign up in 2 steps</p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Choose from a range of weekend jobs, part-time/ full-time jobs, and gigs according to
                                                    your preference </p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Get a professional resume</p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Call &#38; Chat with employers directly</p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Get your dream Job.</p>
                                            </div>
                                            <div className='how-it-works__points'>
                                                <p className='how-it-works__dot'>&bull;</p>
                                                <p className='how-it-works__point'>Avail Premium services to boost your career like<br />
                                                    Interview preparation<br />
                                                    Professional resume writing<br />
                                                    Career Counselling/ Discovery.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-listing' id='jobs'>
                <div className='job-listing__container'>
                    <div className='job-listing__header'>
                        <h1>Top Job Listing</h1>
                    </div>
                    <div className='job-listing__sections'>
                        {topJobLists?.length ? topJobLists?.length && topJobLists?.map((jobs, index) => {
                            return (
                                <div className='job-listing__section' key={index}>
                                    <ScrollAnimation animateIn='fadeIn'
                                        animateOut='fadeOut' delay={300}>
                                             <img src={iconjob} alt='' />
                                        <h4>{jobs?.company_detail?.name}</h4>
                                    </ScrollAnimation>
                                </div>)
                        }) : (<div className='empty-cart-content'>No Products To Display</div>)

                        }
                        {/* <div className='job-listing__section'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <img src={iconblue} alt='' />
                                <h4>Jobs</h4>
                            </ScrollAnimation>
                        </div>
                        <div className='job-listing__section'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <img src={iconblue} alt='' />
                                <h4>Jobs</h4>
                            </ScrollAnimation>
                        </div>
                        <div className='job-listing__section'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <img src={iconblue} alt='' />
                                <h4>Jobs</h4>
                            </ScrollAnimation>
                        </div>
                        <div className='job-listing__section'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <img src={iconblue} alt='' />
                                <h4>Jobs</h4>
                            </ScrollAnimation>
                        </div>
                        <div className='job-listing__section'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <img src={iconblue} alt='' />
                                <h4>Jobs</h4>
                            </ScrollAnimation>
                        </div>
                        <div className='job-listing__section'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <img src={iconblue} alt='' />
                                <h4>Jobs</h4>
                            </ScrollAnimation>
                        </div>
                        <div className='job-listing__section'>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut' delay={300}>
                                <img src={iconblue} alt='' />
                                <h4>Jobs</h4>
                            </ScrollAnimation>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='testmonials'>
                <div className='testmonials__container'>
                    <div className='testmonials__header'>
                        <h3>Testmonials</h3>
                        <h1>Testmonials</h1>
                    </div>
                </div>
                <div className='testmonials__sections'>
                    <Carousel cols={3} rows={1} gap={10} loop>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Kaam Keeda is a easy to use job portal. Being a student I earn extra money over the weekends through KK’s weekend job service. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial2} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Sankruti Sompura</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Being a fresher out of college, I was able to find a job within minutes through the Kaam Keeda feature of calling employers directly.  </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial1} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Mohammed Salman</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Kaam Keeda’s support team was extremely helpful in providing with a professional resume and mock interview. They also personally assisted me with finding a suitable job.</p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial1} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Satish Mishra</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Found multiple weekend jobs and small gigs through Kaam Keeda. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial2} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Naima Abdulla</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Career counselling at Kaam Keeda is excellent, the team has a lot of experience in various fields. Highly recommended. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial1} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Sankar Bagrecha</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='testmonials__sections-mb'>
                    <Carousel cols={1} rows={1} gap={10} loop>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Kaam Keeda is a easy to use job portal. Being a student I earn extra money over the weekends through KK’s weekend job service. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Sankruti Sompura</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Being a fresher out of college, I was able to find a job within minutes through the Kaam Keeda feature of calling employers directly.  </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Mohammed Salman</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Kaam Keeda’s support team was extremely helpful in providing with a professional resume and mock interview. They also personally assisted me with finding a suitable job.</p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Satish Mishra</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Found multiple weekend jobs and small gigs through Kaam Keeda. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Naima Abdulla</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Career counselling at Kaam Keeda is excellent, the team has a lot of experience in various fields. Highly recommended. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Sankar Bagrecha</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='testmonials__sections-ipad'>
                    <Carousel cols={2} rows={1} gap={10} loop>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Kaam Keeda is a easy to use job portal. Being a student I earn extra money over the weekends through KK’s weekend job service. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Sankruti Sompura</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Being a fresher out of college, I was able to find a job within minutes through the Kaam Keeda feature of calling employers directly.  </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Mohammed Salman</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Kaam Keeda’s support team was extremely helpful in providing with a professional resume and mock interview. They also personally assisted me with finding a suitable job.</p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Satish Mishra</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Found multiple weekend jobs and small gigs through Kaam Keeda. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Naima Abdulla</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>,,</h5>
                            <p>Career counselling at Kaam Keeda is excellent, the team has a lot of experience in various fields. Highly recommended. </p>
                            <h4>,,</h4>
                            <div className='testmonials__section'>
                                <img src={testmonial} alt='' />
                                <div className='testmonials__content'>
                                    <h3>Sankar Bagrecha</h3>
                                    <h6>Andra Pradesh</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className='playstore'>
                <div className='playstore__container'>
                    <div className='playstore__section'>
                        <h1>Download our <span>App</span></h1>
                        <a href='https://play.google.com/store/apps/details?id=com.kaamkeeda&hl=en&gl=in' target='_blank'><img src={playstore} alt='' /></a>
                    </div>
                </div>
            </div>
            <div className='faq'>
                <div className='faq__container'>
                    <div className='faq__section'>
                        <div className='faq__image'>
                            <img src={faqimg} alt='' />
                        </div>
                        <div className='faq__content'>
                            <span>Know your Answer</span>
                            <Faq data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;