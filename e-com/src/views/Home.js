import React from 'react'
import logoHome from '../img/logo.png'
import computerTech from '../img/computerTech.webp'
import ai from '../img/ai.webp'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container-fluid">
            <h1 className=" display-2 text-center pb-5 mb-5">AmazingTech <img src={logoHome} alt=""/></h1>
            
            <div className="row text-center">
                <div className="col-lg-5">
                    <img className="mb-3" src={computerTech} alt="compuer technology is mote than our name"/>
                    <img src={ai} alt="Artificial intelligens begins with us"/>
                </div>
                <div className="col-lg-7 text-start">
                    <h4>Where thechnology makes a difference</h4>
                    <p className="ms-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos odit ullam necessitatibus, illo, neque quasi perspiciatis corporis ducimus at exercitationem architecto repellat maiores laudantium natus ipsam ea voluptatibus laborum fugit temporibus eius qui. Ipsam, ad quos cupiditate repellat, ex iure harum veritatis, illo nostrum ut sapiente perferendis similique asperiores!
                    </p>
                    <p className="ms-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, consectetur nulla? Quia ipsa sit veniam dolorem aut possimus nihil soluta quae vitae expedita maxime ad suscipit corporis, enim consectetur. Officia soluta culpa repellendus nostrum, voluptatum neque, mollitia eum reprehenderit omnis, labore ducimus porro sit optio.
                    </p>
                    <h5 className="mt-4">Upgrade your future</h5>
                    <p className="ms-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore vero quam assumenda error delectus autem architecto excepturi, dolorem reprehenderit!
                    </p>
                    <p className="ms-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, consectetur nulla? Quia ipsa sit veniam dolorem aut possimus nihil soluta quae vitae expedita maxime ad suscipit corporis, enim consectetur. Officia soluta culpa repellendus nostrum, voluptatum neque, mollitia eum reprehenderit omnis, labore ducimus porro sit optio.
                    </p>
                    <div className="mt-4">
                        <h5>See our products</h5>
                        <Link className="btn btn-hover btn-info" to="/products">Products</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
