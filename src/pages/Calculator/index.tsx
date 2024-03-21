import { CardCalculator, ContainerCalculator, ImgPeoples } from "./style";
import imagePeoples from '../../assets/ilustration.svg'

export function Calculator (){
    return (
        <ContainerCalculator>
            <ImgPeoples src={imagePeoples} alt="image of peoples pratice sports"  />
            <CardCalculator>
                <div>
                    <strong>Calculadora - IMC</strong>

                </div>
            </CardCalculator>

        </ContainerCalculator>
    )
}