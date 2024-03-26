import { ButtonCalc, CardCalculator, CardWeight, ContainerCalculator, ContentCardCalculator, ImgPeoples, LinkSiteImc } from "./style";
import imagePeoples from '../../assets/ilustration.svg'
import { ArrowSquareOut, HandbagSimple, Ruler } from "phosphor-react";
import { useState } from "react";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
    weight: z.number(),
    height: z.number()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>


export function Calculator (){

    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)

    const [imcValue, setImcValue] = useState<string>()


    async function handleGetWeightHeight(data: SearchFormInputs){
        await setWeight(data.weight) , setHeight(data.height)

    }

    function calculateImcValue(){
        const imc = (weight / (height * height)).toFixed(2);
        setImcValue(imc)
    }

    return (
        <ContainerCalculator>
            <ImgPeoples src={imagePeoples} alt="image of peoples practice sports"  />
            <CardCalculator>
                <strong>Calculadora - IMC</strong>
                <ContentCardCalculator method="get" onSubmit={handleSubmit(handleGetWeightHeight)}>

                    <p>Peso em KG</p>
                    <CardWeight>
                        <HandbagSimple size={32} />
                        <input 
                            type="number" 
                            {...register('weight')}  />
                        <p>Kg</p>

                    </CardWeight>
                        <p>Altura em metros</p>
                    <CardWeight>
                        <Ruler size={32} />
                        <input 
                            type="number" 
                            {...register('height')}  />
                        <p>m</p>

                    </CardWeight>

                    <ButtonCalc type="submit">Calcular</ButtonCalc>

                    

                </ContentCardCalculator>

                <LinkSiteImc href='https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm'>Mais informações sobre o IMC<ArrowSquareOut size={24} /></LinkSiteImc>
            </CardCalculator>

        </ContainerCalculator>
    )
}


