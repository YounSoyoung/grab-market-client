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

    console.log(product);
    return <h1>상품 상세 페이지 {id} 상품</h1>
}

export default ProductPage;