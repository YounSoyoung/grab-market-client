import './index.css';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {API_URL} from "../config/constants.js"
import { Carousel } from 'antd';

dayjs.extend(relativeTime);

// axios 사용을 위해 터미널에 npm install axios를 입력하여 설치해주기

function MainPage(){
    const [products, setProducts] = React.useState([]);
    const [banners, setBanners] = React.useState([]);
    React.useEffect(function(){
        axios
        .get(`${API_URL}/products`)
        .then(function(result){
            const products = result.data.products;
            setProducts(products);
        }).catch(function(error){
            console.log('에러 발생: ', error);
        });

        axios.get(`${API_URL}/banners`).then((result) => {
            const banners = result.data.banners;
            setBanners(banners);
        }).catch((error) => {
            console.log('에러 발생 : ', error);
        })
    }, []);
    

    return (
    <div>   
        {/* 3초 동안 자동으로 배너 이미지를 바꿔준다. */}
        <Carousel autoplay autoplaySpeed={3000}>
            {
                banners.map((banner, index) => {
                    return (
                        <Link to={banner.href}>
                            <div id="banner">
                                <img src={`${API_URL}/${banner.imageUrl}`} />
                            </div>
                        </Link>
                        
                    )
                })
            }
        </Carousel>
        <div id="body">
            <h1 id='product-headline'>판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function(product, index){
                        return(
                            <div className="product-card">
                                {   // product.soldout 값이 1이면 product-blur 부분을 실행
                                    product.soldout === 1 && <div className='product-blur' />
                                }
                                
                                <Link style={{color: 'inherit'}} className='product-link' to={`/products/${product.id}`}>
                                <div>
                                    <img className="product-img" src={`${API_URL}/${product.imageUrl}`}/>
                                </div>
                                <div className='product-contents'>
                                    <span className='product-name'>
                                        {product.name}
                                    </span>
                                    <span className='product-price'>
                                        {product.price}원
                                    </span>
                                    <div className='product-footer'>
                                        <div className='product-seller'>
                                            <img className='product-avatar' src='images/icons/avatar.png' />
                                            <span>{product.seller}</span>
                                        </div>
                                        <span className='product-date'>{dayjs(product.createdAt).fromNow()}</span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>  
    </div>
    );
}

export default MainPage;