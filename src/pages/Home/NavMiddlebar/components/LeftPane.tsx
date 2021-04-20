import { useEffect } from 'react';
import { getCoinPrice } from 'state/home/action';
import styled from 'styled-components';
import { Assets } from 'constants/images';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';

const LeftPane = () => {

    const dispatch = useDispatch();
    const coinPrice = useSelector((state: AppState) => state.home.coinPrice);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getCoinPrice());
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <SubCon>
            <LogoArea>
                <LogoImg>
                    <img src={Assets.logo} width="44" height="50" alt="logo" />
                </LogoImg>
                <LogoTextArea>
                    <TextArea>
                        <Subtitle>Callisto Network (CLO)</Subtitle>
                        <Subtext>
                            {coinPrice?.usd.toFixed(6)}
                            <Usd>   USD   </Usd>
                            <Percentage color={coinPrice.usd_24h_change >= 0 ? "green": "red"}>({coinPrice.usd_24h_change.toFixed(1)})</Percentage>
                        </Subtext>
                    </TextArea>
                </LogoTextArea>
            </LogoArea>
            <ImgGroup>
                <img src={Assets.coingecko} width='120' height='28' alt='coingecko' />
                <img src={Assets.coinmarket} width='130' height='20' alt="coinmarket" />
            </ImgGroup>
        </SubCon>
    )
}

const LogoArea = styled.div`
    display: flex;
`;
const SubCon = styled.div`
    width: 100%;
    max-width: 384px;
    
`;

const LogoImg = styled.div`
    width: 70px;
    height: 70px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoTextArea = styled.div`
    background: linear-gradient( 
        90deg
     ,rgb(185 229 207 / 37%) 0%,rgb(143 206 196 / 16%) 35%,rgb(90 213 128 / 8%) 100%);  
     width: calc(100% - 70px);
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%
    }
`;

const Subtitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    line-height: 28px;
`;

const Subtext = styled.p`
    font-size: 14px;
    padding: 3px;
`;

const Usd = styled.span`
    font-size: 10px;
`;

const Percentage = styled.span<{ color: string }>`
    color: ${({color}) => color};
    font-size: 14px;
    padding-left: 10px;
`;

const TextArea = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImgGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
    // max-width: 288px;
`;

export default LeftPane;
