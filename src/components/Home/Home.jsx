import './home.css'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import logo from '../../images/logo.png';
import phone from '../../images/phone.svg'
import blue from '../../images/blue.png';
import purple from '../../images/purple.png';
import sun from '../../images/sun.png';
import ellipse1 from '../../images/ellipse1.png';
import ellipse2 from '../../images/ellipse2.png';
import { Link } from 'react-router-dom'

export default function Home() {

    const history = useHistory();

    useEffect(() => {
        if(!sessionStorage.getItem('accessToken')){
           history.push('/login');
        }
   
     }, [history])

     const handleRedirect = () => {
         history.push('/login');
     }

    return (
        <div className="home-container">
            <div className="home-navbar">
                <div className="home-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav>
                    <li><Link to="/">Tokensale</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/">Company</Link></li>
                    <li><Link to="/">Resources</Link></li>
                    <li><Link to="/">Login</Link></li>
                    <button onClick={handleRedirect}>Log Out</button>
                    <img src={phone} alt="phone" />
                </nav>       
            </div>
            <section className="home-content">
                <aside className="left">
                    <div className="main">
                        <h1>Connecting the world with</h1>
                        <div className="description">
                            <p>Rigba is a global communication platform</p>
                            <p>for connecting consumers with businesses</p>
                            <p>in real time.</p>
                        </div>
                    </div>
                    <div className="btns">
                        <button>Get a demo</button>
                        <button>Free Trial</button>
                    </div>
                    <div className="bottom">
                        <div className="h1s">
                            <h1>Power your Entire</h1> 
                            <h1>Call Business</h1>
                        </div>
                        <div className="ps">
                            <p>Rigma empowers businesses to take</p>
                            <p>control over the calls, access new</p>
                            <p>markets and connect with customers.</p>
                        </div>
                    </div>
                </aside>
                <aside className="right">
                    <div className="main">
                        <img src={sun} alt="sun" height="180px"/>
                        <img src={blue} alt="blue" height="350px"/>
                        <img src={purple} alt="purple" height="170px"/>   
                    </div>
                    <div className="bottom">
                        <div className="one">
                            <img src={ellipse1} alt="ellipse1" height="80px" />
                            <h1>Global Access</h1>
                            <p>Tap into new markets &</p>
                            <p>connect with consumers in</p>
                            <p>80+ countries.</p>
                        </div>
                        <div className="two">
                            <img src={ellipse2} alt="ellipse2" height="80px" />
                            <h1>Real Time Routing</h1>
                            <p>Tap into new markets &</p>
                            <p>connect with consumers in</p>
                            <p>80+ countries.</p>
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    )
}
