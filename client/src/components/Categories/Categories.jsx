import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/5480682/pexels-photo-5480682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    {" "}
                    <img
                        src="https://images.pexels.com/photos/6825904/pexels-photo-6825904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://images.pexels.com/photos/6851461/pexels-photo-6851461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            {" "}
                            <img
                                src="https://images.unsplash.com/photo-1558882268-15aa056d885f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/4464820/pexels-photo-4464820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;
