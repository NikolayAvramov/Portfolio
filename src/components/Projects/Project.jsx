import natoursImg from "../../assets/Natours.png";
import classicCarCenterImg from "../../assets/ClassicCarCenter.png";
import easyShopImg from "../../assets/easyshop.png";
import burgerPlaceImg from "../../assets/burgerplace.png";
import { Link } from "react-router-dom";
import "./Project.scss";
export function Projects() {
    return (
        <div className="projects">
            <h2 className="projects-main-title">Projects</h2>
            <div className="projects-wrapper">
                <div className="card">
                    <img
                        src={natoursImg}
                        alt="Natours img"
                        className="card-img"
                    />
                    <h3 className="card-title">Natour</h3>
                    <p className="card-description">
                        Natours is a website where you can book tours. It was
                        taken during a course on Udemi. It is made with SASS and
                        HTML.
                    </p>
                    <div className="card-buton-wrapper">
                        <Link
                            to={"https://natoursna.netlify.app"}
                            className="card-buton"
                            target="_blank"
                        >
                            See Demo
                        </Link>
                        <Link
                            to={"https://github.com/NikolayAvramov/Natours"}
                            className="card-buton"
                            target="_blank"
                        >
                            See on GitHub
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <img
                        src={classicCarCenterImg}
                        alt="Natours img"
                        className="card-img"
                    />
                    <h3 className="card-title">Classic Car Center</h3>
                    <p className="card-description">
                        Clasic Car Center is a website You can buy classic car
                        or you can sell it.You have contact directly with the
                        seller . If you are registered you can add ads and write
                        messages to other sellers .It is made with ReactJs and
                        CSS and for backend I use Bak4App.
                    </p>
                    <div className="card-buton-wrapper">
                        <Link
                            to={"https://classiccarcenter.netlify.app"}
                            className="card-buton"
                            target="_blank"
                        >
                            See Demo
                        </Link>
                        <Link
                            to={
                                "https://github.com/NikolayAvramov/ClassicCarCenter"
                            }
                            className="card-buton"
                            target="_blank"
                        >
                            See on GitHub
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={easyShopImg}
                        alt="Natours img"
                        className="card-img"
                    />
                    <h3 className="card-title">EasyShop</h3>
                    <p className="card-description">
                        EasyShop is an e-commerce site where you can choose by
                        product category, sort products by price and name,
                        search for products in the search engine and filter. You
                        can add products to the cart and use a discount code. It
                        is made with ReactJs and SASS and for backend I use
                        Bak4App.
                    </p>
                    <div className="card-buton-wrapper">
                        <Link
                            to={"https://easyshopna.netlify.app"}
                            className="card-buton"
                            target="_blank"
                        >
                            See Demo
                        </Link>
                        <Link
                            to={"https://github.com/NikolayAvramov/EasyShop"}
                            className="card-buton"
                            target="_blank"
                        >
                            See on GitHub
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={burgerPlaceImg}
                        alt="Natours img"
                        className="card-img"
                    />
                    <h3 className="card-title">Burger Place</h3>
                    <p className="card-description">
                        Burger Place is a food ordering website. There is a menu
                        to choose from. It's not fully functional yet.It is made
                        with ReactJs and SASS and for backend I use Bak4App.
                    </p>
                    <div className="card-buton-wrapper">
                        <Link
                            to={"https://burgerplacena.netlify.app"}
                            className="card-buton"
                            target="_blank"
                        >
                            See Demo
                        </Link>
                        <Link
                            to={"https://github.com/NikolayAvramov/BurgerPlace"}
                            className="card-buton"
                            target="_blank"
                        >
                            See on GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
