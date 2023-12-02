import styled from "styled-components"

export default function LargerContainerContent() {
    return (
        
        <PageContainer>

        </PageContainer>

    )
}

const LogoFastShop = styled.h1`
    font-family: 'Roboto', cursive;
    font-weight: 800;
    font-size: 70px;
    color: white;
    display:flex;
    justify-content:center;
    span{
        color:#f87b09;
    }
`

const PageContainer = styled.div`
    width: calc(100% - 65px);
    height: calc(100% - 65px);
    background-color: black;
`