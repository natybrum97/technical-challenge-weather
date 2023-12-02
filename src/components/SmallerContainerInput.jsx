import styled from "styled-components";
import Search from '../assets/search.png';
import { useState } from "react";

export default function SmallerContainerInput() {

    const [city, setCity] = useState('');

    return (
        <Input>
            <Border>
                <ImageSearch src={Search} alt="Lupa" />
                <input placeholder="Procure por uma cidade" type="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </Border>
        </Input>
    )
}

const Input = styled.div`
    width: 550px;
    height: 225px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const ImageSearch = styled.img`
    width: 36.7px;
    height: 40px;
    border-radius: 16px;
`;

const Border = styled.div`
    width: 500px;
    height: 80px;
    border-radius: 24px;
    display:flex;
    padding: 14px;
    justify-content: space-between;
    align-items: center;
    background-color: #EDEDEF;
    box-shadow: 0px 24px 48px 0px #314F7C14;
`;