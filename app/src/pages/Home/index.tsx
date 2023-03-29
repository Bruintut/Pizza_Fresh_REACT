import {ReactComponent as Search} from "assets/icons/search.svg"
import * as S from "./style"


const Home =()=>{
    return(
        <S.Home>
            <S.HomeContent>
                <header>
                    <S.HomeHeaderDetails>
                        <div>
                            <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
                            <S.HomeHeaderDetailsDate>Aqui a data</S.HomeHeaderDetailsDate>
                        </div>
                        <S.HomeHeaderDetailsSearch>
                            <Search/>
                            <input type="text" placeholder = "Procure o sabor"/>
                        </S.HomeHeaderDetailsSearch>
                    </S.HomeHeaderDetails>
                </header>
                <div>
                    <S.HomeProductTitle>
                        <b>Pizzas</b>
                    </S.HomeProductTitle>
                    <S.HomeProductList>
                        <p>Lista de produtos</p>
                    </S.HomeProductList> 
                </div>
            </S.HomeContent>
            <aside>
                <p>onde ficarão os pedidos</p>
            </aside>
        </S.Home>
    );
}

export default Home;