import * as S from "./style"
const ProductItem = ()=>{
    return(
        <S.ProductItem>
            <S.ProductItemImage src="" alt=""/>
            <div>
                <S.ProductItemName>nome do produto</S.ProductItemName>
                <S.ProductItemPrice>R$ 100,00</S.ProductItemPrice>
                <S.ProductItemDescription>Descrição</S.ProductItemDescription>
            </div>
        </S.ProductItem>
    )
}

export default ProductItem