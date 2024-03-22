import styled from "styled-components";

export const ContainerCalculator = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
background-color: #18181b;

`
export const CardCalculator = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
justify-content: center;
border-radius: 8px;
margin-left: 5rem;
width: 30%;
background-color:#262626 ;
padding: 2rem 3rem;
gap: 2rem;

strong{
    color: white;
    font-size: 1.5rem;
}
`
export const ImgPeoples = styled.img`
width: 35%;
`

export const ContentCardCalculator = styled.div`
display: flex;
flex-direction: column;
width: 100%;
color:#cbd5e1 ;
gap: 0.5rem;
font-size: 1.2rem ;
border-bottom: gray 1px solid;
padding-bottom: 2rem;

`
export const CardWeight = styled.div`
background-color: #3f3f46;
border-radius: 3px ;
padding: 0.5rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;


input{
    width: 90%;
    background-color: transparent;
    margin-left: 0.9rem;
    border: none;
    outline: none;
    color: white;
    font-size: 1.2rem;

}

`
export const ButtonCalc = styled.button`
width: 100%;
padding: 0.7rem;
background-color: #5a189a;
border: none;
color: white;
font-weight: bold;
font-size: 1.2rem;
border-radius: 4px;
`

export const LinkSiteImc = styled.a`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
text-decoration: none;
font-weight: 600;
`


