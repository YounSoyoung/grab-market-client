import './index.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage(){
    // product의 id를 얻기 위해 useParams를 이용한다
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(function(){
        axios.get(`https://e3e44655-948f-4c30-bd23-ab3bc78126e6.mock.pstmn.io/products/${id}`).then(
        function(result){
            setProduct(result.data);
        }
        ).catch(function(error){
            console.error(error);
        });
    }, []);

    if(product === null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }

    return (
        <div>
            <div id="image-box">
                <img src={"/" + product.imageUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id='createdAt'>2023년 5월 8일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    )
}

export default ProductPage;