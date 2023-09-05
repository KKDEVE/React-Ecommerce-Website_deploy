import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    console.log(data);
    console.log(loading);

    function getURL(base, url) {
        const absoulteUrl = `${base}${url}`
        console.log(absoulteUrl);
        return String(absoulteUrl);
    }

    return (
        <div className="product">
            {loading ? (
                "loading"
            ) : (
                <>
                    <div className="left">
                        <div className="images">
                            <img
                                src={
                                    getURL(process.env.REACT_APP_UPLOAD_URL,
                                        data?.attributes.img.data.attributes.url)
                                }
                                alt=""
                                onClick={(e) => setSelectedImg("img")}
                            />
                            <img
                                src={
                                    getURL(process.env.REACT_APP_UPLOAD_URL,
                                        data?.attributes?.img2?.data?.attributes?.url)
                                }
                                alt=""
                                onClick={(e) => setSelectedImg("img2")}
                            />
                        </div>
                        <div className="mainImg">
                            <img
                                src={
                                    getURL(process.env.REACT_APP_UPLOAD_URL,
                                        data?.attributes[selectedImg]?.data?.attributes?.url)
                                }
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                        <span className="price">${data?.attributes?.price}</span>
                        <p>{data?.attributes?.desc}</p>
                        <div className="quantity">
                            <button
                                onClick={() =>
                                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                                }
                            >
                                -
                            </button>
                            {quantity}
                            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                        </div>
                        <button
                            className="add"
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: data.id,
                                        title: data.attributes.title,
                                        desc: data.attributes.desc,
                                        price: data.attributes.price,
                                        img: data.attributes.img.data.attributes.url,
                                        quantity,
                                    })
                                )
                            }
                        >
                            <AddShoppingCartIcon /> ADD TO CART
                        </button>
                        <div className="links">
                            <div className="item">
                                <FavoriteBorderIcon /> ADD TO WISH LIST
                            </div>
                            <div className="item">
                                <BalanceIcon /> ADD TO COMPARE
                            </div>
                        </div>
                        <div className="info">
                            <span>Vendor: Polo</span>
                            <span>Product Type: T-Shirt</span>
                            <span>Tag: T-Shirt, Women, Top</span>
                        </div>
                        <hr />
                        <div className="info">
                            <span>DESCRIPTION</span>
                            <hr />
                            <span>ADDITIONAL INFORMATION</span>
                            <hr />
                            <span>FAQ</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;


{
    "data": {
        "id": 2,
            "attributes": {
            "title": "women hat",
                "desc": "nice hat",
                    "price": 15,
                        "isNew": true,
                            "createdAt": "2023-07-11T15:14:30.860Z",
                                "updatedAt": "2023-07-12T13:36:54.913Z",
                                    "type": "featured",
                                        "img": {
                "data": {
                    "id": 3,
                        "attributes": {
                        "name": "截屏2023-01-20 22.16.10.png",
                            "alternativeText": null,
                                "caption": null,
                                    "width": 1362,
                                        "height": 1486,
                                            "formats": {
                            "thumbnail": {
                                "name": "thumbnail_截屏2023-01-20 22.16.10.png",
                                    "hash": "thumbnail_2023_01_20_22_16_10_2aa099b198",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 143,
                                                        "height": 156,
                                                            "size": 13.19,
                                                                "url": "/uploads/thumbnail_2023_01_20_22_16_10_2aa099b198.png"
                            },
                            "small": {
                                "name": "small_截屏2023-01-20 22.16.10.png",
                                    "hash": "small_2023_01_20_22_16_10_2aa099b198",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 458,
                                                        "height": 500,
                                                            "size": 76.17,
                                                                "url": "/uploads/small_2023_01_20_22_16_10_2aa099b198.png"
                            },
                            "medium": {
                                "name": "medium_截屏2023-01-20 22.16.10.png",
                                    "hash": "medium_2023_01_20_22_16_10_2aa099b198",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 687,
                                                        "height": 750,
                                                            "size": 173.32,
                                                                "url": "/uploads/medium_2023_01_20_22_16_10_2aa099b198.png"
                            },
                            "large": {
                                "name": "large_截屏2023-01-20 22.16.10.png",
                                    "hash": "large_2023_01_20_22_16_10_2aa099b198",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 917,
                                                        "height": 1000,
                                                            "size": 317.48,
                                                                "url": "/uploads/large_2023_01_20_22_16_10_2aa099b198.png"
                            }
                        },
                        "hash": "2023_01_20_22_16_10_2aa099b198",
                            "ext": ".png",
                                "mime": "image/png",
                                    "size": 126.62,
                                        "url": "/uploads/2023_01_20_22_16_10_2aa099b198.png",
                                            "previewUrl": null,
                                                "provider": "local",
                                                    "provider_metadata": null,
                                                        "createdAt": "2023-07-11T15:10:17.404Z",
                                                            "updatedAt": "2023-07-11T15:10:17.404Z"
                    }
                }
            },
            "img2": {
                "data": {
                    "id": 2,
                        "attributes": {
                        "name": "image 42.png",
                            "alternativeText": null,
                                "caption": null,
                                    "width": 2574,
                                        "height": 1359,
                                            "formats": {
                            "thumbnail": {
                                "name": "thumbnail_image 42.png",
                                    "hash": "thumbnail_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 245,
                                                        "height": 129,
                                                            "size": 35.92,
                                                                "url": "/uploads/thumbnail_image_42_f0a284714c.png"
                            },
                            "small": {
                                "name": "small_image 42.png",
                                    "hash": "small_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 500,
                                                        "height": 264,
                                                            "size": 114.57,
                                                                "url": "/uploads/small_image_42_f0a284714c.png"
                            },
                            "medium": {
                                "name": "medium_image 42.png",
                                    "hash": "medium_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 750,
                                                        "height": 396,
                                                            "size": 225.7,
                                                                "url": "/uploads/medium_image_42_f0a284714c.png"
                            },
                            "large": {
                                "name": "large_image 42.png",
                                    "hash": "large_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 1000,
                                                        "height": 528,
                                                            "size": 390.95,
                                                                "url": "/uploads/large_image_42_f0a284714c.png"
                            }
                        },
                        "hash": "image_42_f0a284714c",
                            "ext": ".png",
                                "mime": "image/png",
                                    "size": 595.46,
                                        "url": "/uploads/image_42_f0a284714c.png",
                                            "previewUrl": null,
                                                "provider": "local",
                                                    "provider_metadata": null,
                                                        "createdAt": "2023-07-11T15:07:56.217Z",
                                                            "updatedAt": "2023-07-11T15:08:05.415Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "women",
                            "desc": "women hat",
                            "createdAt": "2023-07-11T15:09:44.941Z",
                            "updatedAt": "2023-07-11T15:09:44.941Z",
                            "publishedAt": "2023-07-11T15:11:06.454Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "hat",
                            "createdAt": "2023-07-11T15:10:49.943Z",
                            "updatedAt": "2023-07-11T15:10:49.943Z",
                            "publishedAt": "2023-07-11T15:12:44.623Z"
                        }
                    }
                ]
            }
        }
    },
    "meta": { }
}


{
    "id": 1,
        "attributes": {
        "title": "test product ",
            "desc": "test product ",
                "price": 20,
                    "isNew": false,
                        "createdAt": "2023-07-11T15:09:08.515Z",
                            "updatedAt": "2023-07-12T13:36:45.394Z",
                                "type": "trending",
                                    "img": {
            "data": {
                "id": 1,
                    "attributes": {
                    "name": "IMG_1387.PNG",
                        "alternativeText": null,
                            "caption": null,
                                "width": 750,
                                    "height": 1624,
                                        "formats": {
                        "thumbnail": {
                            "name": "thumbnail_IMG_1387.PNG",
                                "hash": "thumbnail_IMG_1387_b3007e4359",
                                    "ext": ".PNG",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 72,
                                                    "height": 156,
                                                        "size": 12.81,
                                                            "url": "/uploads/thumbnail_IMG_1387_b3007e4359.PNG"
                        },
                        "small": {
                            "name": "small_IMG_1387.PNG",
                                "hash": "small_IMG_1387_b3007e4359",
                                    "ext": ".PNG",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 231,
                                                    "height": 500,
                                                        "size": 70.74,
                                                            "url": "/uploads/small_IMG_1387_b3007e4359.PNG"
                        },
                        "medium": {
                            "name": "medium_IMG_1387.PNG",
                                "hash": "medium_IMG_1387_b3007e4359",
                                    "ext": ".PNG",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 346,
                                                    "height": 750,
                                                        "size": 138.55,
                                                            "url": "/uploads/medium_IMG_1387_b3007e4359.PNG"
                        },
                        "large": {
                            "name": "large_IMG_1387.PNG",
                                "hash": "large_IMG_1387_b3007e4359",
                                    "ext": ".PNG",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 462,
                                                    "height": 1000,
                                                        "size": 236.41,
                                                            "url": "/uploads/large_IMG_1387_b3007e4359.PNG"
                        }
                    },
                    "hash": "IMG_1387_b3007e4359",
                        "ext": ".PNG",
                            "mime": "image/png",
                                "size": 114.32,
                                    "url": "/uploads/IMG_1387_b3007e4359.PNG",
                                        "previewUrl": null,
                                            "provider": "local",
                                                "provider_metadata": null,
                                                    "createdAt": "2023-07-11T15:07:55.241Z",
                                                        "updatedAt": "2023-07-11T15:07:55.241Z"
                }
            }
        },
        "img2": {
            "data": {
                "id": 2,
                    "attributes": {
                    "name": "image 42.png",
                        "alternativeText": null,
                            "caption": null,
                                "width": 2574,
                                    "height": 1359,
                                        "formats": {
                        "thumbnail": {
                            "name": "thumbnail_image 42.png",
                                "hash": "thumbnail_image_42_f0a284714c",
                                    "ext": ".png",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 245,
                                                    "height": 129,
                                                        "size": 35.92,
                                                            "url": "/uploads/thumbnail_image_42_f0a284714c.png"
                        },
                        "small": {
                            "name": "small_image 42.png",
                                "hash": "small_image_42_f0a284714c",
                                    "ext": ".png",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 500,
                                                    "height": 264,
                                                        "size": 114.57,
                                                            "url": "/uploads/small_image_42_f0a284714c.png"
                        },
                        "medium": {
                            "name": "medium_image 42.png",
                                "hash": "medium_image_42_f0a284714c",
                                    "ext": ".png",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 750,
                                                    "height": 396,
                                                        "size": 225.7,
                                                            "url": "/uploads/medium_image_42_f0a284714c.png"
                        },
                        "large": {
                            "name": "large_image 42.png",
                                "hash": "large_image_42_f0a284714c",
                                    "ext": ".png",
                                        "mime": "image/png",
                                            "path": null,
                                                "width": 1000,
                                                    "height": 528,
                                                        "size": 390.95,
                                                            "url": "/uploads/large_image_42_f0a284714c.png"
                        }
                    },
                    "hash": "image_42_f0a284714c",
                        "ext": ".png",
                            "mime": "image/png",
                                "size": 595.46,
                                    "url": "/uploads/image_42_f0a284714c.png",
                                        "previewUrl": null,
                                            "provider": "local",
                                                "provider_metadata": null,
                                                    "createdAt": "2023-07-11T15:07:56.217Z",
                                                        "updatedAt": "2023-07-11T15:08:05.415Z"
                }
            }
        },
        "categories": {
            "data": [
                {
                    "id": 1,
                    "attributes": {
                        "title": "women",
                        "desc": "women hat",
                        "createdAt": "2023-07-11T15:09:44.941Z",
                        "updatedAt": "2023-07-11T15:09:44.941Z",
                        "publishedAt": "2023-07-11T15:11:06.454Z"
                    }
                }
            ]
        },
        "sub_categories": {
            "data": [
                {
                    "id": 2,
                    "attributes": {
                        "title": "tshirt",
                        "createdAt": "2023-07-11T15:11:32.302Z",
                        "updatedAt": "2023-07-11T15:11:32.302Z",
                        "publishedAt": "2023-07-11T15:12:44.623Z"
                    }
                }
            ]
        }
    }
}



{
    "data": {
        "id": 1,
            "attributes": {
            "title": "test product ",
                "desc": "test product ",
                    "price": 20,
                        "isNew": false,
                            "createdAt": "2023-07-11T15:09:08.515Z",
                                "updatedAt": "2023-07-12T13:36:45.394Z",
                                    "type": "trending",
                                        "img": {
                "data": {
                    "id": 1,
                        "attributes": {
                        "name": "IMG_1387.PNG",
                            "alternativeText": null,
                                "caption": null,
                                    "width": 750,
                                        "height": 1624,
                                            "formats": {
                            "thumbnail": {
                                "name": "thumbnail_IMG_1387.PNG",
                                    "hash": "thumbnail_IMG_1387_b3007e4359",
                                        "ext": ".PNG",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 72,
                                                        "height": 156,
                                                            "size": 12.81,
                                                                "url": "/uploads/thumbnail_IMG_1387_b3007e4359.PNG"
                            },
                            "small": {
                                "name": "small_IMG_1387.PNG",
                                    "hash": "small_IMG_1387_b3007e4359",
                                        "ext": ".PNG",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 231,
                                                        "height": 500,
                                                            "size": 70.74,
                                                                "url": "/uploads/small_IMG_1387_b3007e4359.PNG"
                            },
                            "medium": {
                                "name": "medium_IMG_1387.PNG",
                                    "hash": "medium_IMG_1387_b3007e4359",
                                        "ext": ".PNG",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 346,
                                                        "height": 750,
                                                            "size": 138.55,
                                                                "url": "/uploads/medium_IMG_1387_b3007e4359.PNG"
                            },
                            "large": {
                                "name": "large_IMG_1387.PNG",
                                    "hash": "large_IMG_1387_b3007e4359",
                                        "ext": ".PNG",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 462,
                                                        "height": 1000,
                                                            "size": 236.41,
                                                                "url": "/uploads/large_IMG_1387_b3007e4359.PNG"
                            }
                        },
                        "hash": "IMG_1387_b3007e4359",
                            "ext": ".PNG",
                                "mime": "image/png",
                                    "size": 114.32,
                                        "url": "/uploads/IMG_1387_b3007e4359.PNG",
                                            "previewUrl": null,
                                                "provider": "local",
                                                    "provider_metadata": null,
                                                        "createdAt": "2023-07-11T15:07:55.241Z",
                                                            "updatedAt": "2023-07-11T15:07:55.241Z"
                    }
                }
            },
            "img2": {
                "data": {
                    "id": 2,
                        "attributes": {
                        "name": "image 42.png",
                            "alternativeText": null,
                                "caption": null,
                                    "width": 2574,
                                        "height": 1359,
                                            "formats": {
                            "thumbnail": {
                                "name": "thumbnail_image 42.png",
                                    "hash": "thumbnail_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 245,
                                                        "height": 129,
                                                            "size": 35.92,
                                                                "url": "/uploads/thumbnail_image_42_f0a284714c.png"
                            },
                            "small": {
                                "name": "small_image 42.png",
                                    "hash": "small_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 500,
                                                        "height": 264,
                                                            "size": 114.57,
                                                                "url": "/uploads/small_image_42_f0a284714c.png"
                            },
                            "medium": {
                                "name": "medium_image 42.png",
                                    "hash": "medium_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 750,
                                                        "height": 396,
                                                            "size": 225.7,
                                                                "url": "/uploads/medium_image_42_f0a284714c.png"
                            },
                            "large": {
                                "name": "large_image 42.png",
                                    "hash": "large_image_42_f0a284714c",
                                        "ext": ".png",
                                            "mime": "image/png",
                                                "path": null,
                                                    "width": 1000,
                                                        "height": 528,
                                                            "size": 390.95,
                                                                "url": "/uploads/large_image_42_f0a284714c.png"
                            }
                        },
                        "hash": "image_42_f0a284714c",
                            "ext": ".png",
                                "mime": "image/png",
                                    "size": 595.46,
                                        "url": "/uploads/image_42_f0a284714c.png",
                                            "previewUrl": null,
                                                "provider": "local",
                                                    "provider_metadata": null,
                                                        "createdAt": "2023-07-11T15:07:56.217Z",
                                                            "updatedAt": "2023-07-11T15:08:05.415Z"
                    }
                }
            },
            "categories": {
                "data": [
                    {
                        "id": 1,
                        "attributes": {
                            "title": "women",
                            "desc": "women hat",
                            "createdAt": "2023-07-11T15:09:44.941Z",
                            "updatedAt": "2023-07-11T15:09:44.941Z",
                            "publishedAt": "2023-07-11T15:11:06.454Z"
                        }
                    }
                ]
            },
            "sub_categories": {
                "data": [
                    {
                        "id": 2,
                        "attributes": {
                            "title": "tshirt",
                            "createdAt": "2023-07-11T15:11:32.302Z",
                            "updatedAt": "2023-07-11T15:11:32.302Z",
                            "publishedAt": "2023-07-11T15:12:44.623Z"
                        }
                    }
                ]
            }
        }
    },
    "meta": { }
}