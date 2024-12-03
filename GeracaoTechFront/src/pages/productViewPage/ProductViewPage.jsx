import React from 'react';
import { useParams } from 'react-router-dom';
import { productsList} from '../../mock/Mock.js';

const ProductViewPage = () => {
    
    const { id } = useParams();

    const produto = productsList.find(x => x.id == id)

    return (
        <div>
            <h1>Produto {produto.name}</h1>
            <p>ID do Produto: {id}</p>
            
        </div>
    );
};
export default ProductViewPage;