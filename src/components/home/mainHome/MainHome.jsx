import './mainHome.css'
import Independencia4 from '../imagens/Independencia4.jpg'

function MainHome() {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='row row-home'>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                    <h3>A Independência do Brasil, proclamada em 7 de setembro de 1822, é um marco fundamental na formação da 
                        nação brasileira. Ela representou o rompimento com o domínio colonial português, possibilitando o 
                        surgimento de um Estado soberano e autônomo. A partir desse momento, o Brasil pôde começar a moldar suas 
                        próprias instituições políticas, sociais e econômicas, estabelecendo-se como uma monarquia constitucional
                         sob o governo de Dom Pedro I.</h3>
                    <h3>
                        A independência teve um papel crucial na consolidação de uma identidade nacional, ao unificar um vasto 
                        território com grande diversidade cultural e regional. Além disso, foi um passo importante para a definição 
                        das fronteiras do Brasil e para a criação de uma nova ordem social, embora os desafios de uma verdadeira independência, 
                        como a abolição da escravidão e a inclusão de diferentes grupos sociais, ainda estivessem por vir. Esse processo lançou 
                        as bases para o desenvolvimento da nação, inaugurando uma trajetória que levou à construção de um Brasil moderno e republicano.</h3>
                    <button type="button" class="btn btn-link" onclick="window.location.href = 'link das esculturas'">Clique aqui</button>

                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <img
                        className="home-image"
                        src={Independencia4}
                        alt="First"
                    />
                </div>
            </div>
        </div>
    )

}

export default MainHome