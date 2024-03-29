import { ButtonCalc, CardCalculator, CardWeight, ContainerCalculator, ContentCardCalculator, ImcContainer, ImgPeoples, LinkSiteImc, ResultImcvalue } from "./style";
import imagePeoples from '../../assets/ilustration.svg'
import { ArrowSquareOut, HandbagSimple, Ruler } from "phosphor-react";
import { useState } from "react";


import { useForm } from "react-hook-form";





interface Values {
    height: number
    weight: number
}
export function Calculator (){

    const {register, handleSubmit} = useForm<Values>()

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)

    const [imcValue, setImcValue] = useState<number>()


    async function handleGetWeightHeight(data: Values){
    setWeight(data.weight) , setHeight(data.height)
        await calculateImcValue()
        

    }

    async function calculateImcValue(){

        const heightToCalculate = height * height 

        await setImcValue(weight / heightToCalculate)
        
    }

    return (
        <ContainerCalculator>
            <ImgPeoples src={imagePeoples} alt="image of peoples practice sports"  />
            <CardCalculator>
                <strong>Calculadora - IMC</strong>
                <ContentCardCalculator method="get"  onSubmit={ handleSubmit(handleGetWeightHeight)}>

                    <p>Peso em KG</p>
                    <CardWeight>
                        <HandbagSimple size={32} />
                        <input 
                            type="text"
                            required 
                            {...register('weight')}  />
                        <p>Kg</p>

                    </CardWeight>
                        <p>Altura em metros</p>
                    <CardWeight>
                        <Ruler size={32} />
                        <input 
                            type="text"
                            required
                            {...register('height')}  />
                        <p>m</p>

                    </CardWeight>

                    <ButtonCalc type="submit">Calcular</ButtonCalc>

                    <ResultImcvalue>
                        <ImcContainer>
                            <p>{imcValue}</p>
                            <span>Seu IMC</span>
                        </ImcContainer>
                        <p>Você está no peso ideal !</p>
                    </ResultImcvalue>

                </ContentCardCalculator>

                <LinkSiteImc href='https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm'>Mais informações sobre o IMC<ArrowSquareOut size={24} /></LinkSiteImc>
            </CardCalculator>

        </ContainerCalculator>
    )
}


