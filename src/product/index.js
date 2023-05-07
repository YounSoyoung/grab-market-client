import { useParams } from "react-router-dom";

function ProductPage(){
    // product의 id를 얻기 위해 useParams를 이용한다
    const {id} = useParams();
    return <h1>상품 상세 페이지 {id} 상품</h1>
}

export default ProductPage;