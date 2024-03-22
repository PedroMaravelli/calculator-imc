import { ButtonCalc, CardCalculator, CardWeight, ContainerCalculator, ContentCardCalculator, ImgPeoples, LinkSiteImc } from "./style";
import imagePeoples from '../../assets/ilustration.svg'
import { ArrowSquareOut, HandbagSimple, Ruler } from "phosphor-react";

export function Calculator (){
    return (
        <ContainerCalculator>
            <ImgPeoples src={imagePeoples} alt="image of peoples pratice sports"  />
            <CardCalculator>
                <strong>Calculadora - IMC</strong>
                <ContentCardCalculator>
                   
                    <p>Peso em KG</p>
                    <CardWeight>
                        <HandbagSimple size={32} />
                        <input type="number" name="weight"  />
                        <p>Kg</p>

                    </CardWeight>
                        <p>Altura em metros</p>
                    <CardWeight>
                        <Ruler size={32} />
                        <input type="number" name="weight"  />
                        <p>m</p>

                    </CardWeight>

                    <ButtonCalc>Calcular</ButtonCalc>

                    

                </ContentCardCalculator>

                <LinkSiteImc href='https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm'>Mais informações sobre o IMC<ArrowSquareOut size={24} /></LinkSiteImc>
            </CardCalculator>

        </ContainerCalculator>
    )
}