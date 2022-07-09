import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


//IMPORTING ASSETS
import mySearchIcon from "./Assets/search.png"
import myTarget from "./Assets/Crosshair.png"
import myDrink from "./Assets/Drink.png"
import myHeartbeat from "./Assets/Heartbeat.png"
import myKnight from "./Assets/Knight.png"
import myLaptop from "./Assets/Laptop.png"
// import myLeft_Circle_Arrow from "./Assets/Left_Circle_Arrow.png"
// import myRight_Circle_Arrow from "./Assets/Right_Circle_Arrow.png"
import myRocket from "./Assets/Rocket.png"
import myLogo from "./Assets/Slack_Logo.png"
import myBannerImg1 from "./Assets/Imagem_Capa.png"
import mySneakers from "./Assets/sneakers.png"
import myCup from "./Assets/Xícaras.jpg"
import myVinil from "./Assets/Vinil.jpg"
import myVase from "./Assets/Vaso.jpg"

//PALETA DE CORES
//#006d77 verde escuro
//#83c5be verde claro
//#edf6f9 verde agua acinzentado
//#ffddd2 rose
//#e29578 bege/marron claro

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Menu = styled.section`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(237,246,249);
  background: linear-gradient(90deg, rgba(237,246,249,1) -20%, rgba(131,197,190,1) 0%, rgba(0,109,119,1) 51%);
`;

const Nav = styled.div`
  width: 58vw;
  display: flex;
  justify-content: space-around;
`;

const List = styled.ul`
  width: 35vw;
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

const ListItem = styled.li`
  color: #edf6f9;
  text-transform: uppercase;

  :hover{
    cursor: pointer;
  }
`;

const TertiaryButton = styled.button`
  width: 4vw;
  height: 4vh;
  border: none;
  background-color: transparent;

  :hover{
    cursor: pointer;
  }
`;

const IconButton = styled.img`
  width: 3vw;
  height: 3vh;
  object-fit: contain;
`;

const SearchBox = styled.input`
  color: #edf6f9;
  width: 15vw;
  height: 4vh;
  border: solid #edf6f9;
  border-radius: 15px 15px; 
  background: transparent;

  ::placeholder{
    color: #edf6f9;
    text-align: center;
    text-transform: capitalize;
  }
`;

const Imagem = styled.img`
  width: 5vw;
  height: 100%;
  object-fit: cover;
  margin: 1vh;
`;

const Banner = styled.div`
  width: 100%;
  height: 52vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: rgb(237,246,249);
  background: linear-gradient(90deg, rgba(237,246,249,1) -20%, rgba(131,197,190,1) 0%, rgba(0,109,119,1) 51%);  
`;

const BannerTxtBox = styled.div`
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const BannerParagraph = styled.p`
  color: #edf6f9;
  width: 40vw;
  height: 3vh;
  line-height: 3vh;
`;

const BannerTitle = styled.h2`
  font-size: 2em;
  color: #edf6f9;
  width: 40vw;
  height: 10vh;
`;

const PrimaryButton = styled.button`
  text-transform: capitalize;
  color: #edf6f9;
  width: 8vw;
  height: 4vh;
  border: none;
  border-radius: 15px 15px;
  background-color: #e29578;

  &:hover{
    cursor: pointer;
  }
`;

const BannerImg = styled.img`
  width: 40vw;
  height: 50vh;
  object-fit: contain;
`;

const StatsContainer = styled.section`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #edf6f9;
`;

const Stats = styled.div`
  width: 20vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const StatsImg = styled.img`
  width: 6vw;
  height: 6vh;
  object-fit: contain;
`;

const StatsTitle = styled.h3`
  font-size: 1.75em;
`;

const StatsParagraph = styled.p`
  color: #006d77;
`;

const Product = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BuyContainer = styled.div`
  width: 25vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const BuyParagraph = styled.p`
  font-size: 0.85rem;
`;

const BuyTitle = styled.h2`
  font-size: 2rem;
`;

const ContainedButton = styled(PrimaryButton)`
  color: #006d77;
  width: 10vw;
  background-color: #83c5be;
`;

const ProductInfoContainer = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  background: rgb(237,246,249);
  background: linear-gradient(45deg, rgba(237,246,249,1) -20%, rgba(131,197,190,1) 0%, rgba(0,109,119,1) 51%);
`;

const ProductInfo = styled.div`
  width: 15vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const ProductInfoTitle = styled.h3`
  font-size: 1.5rem;
`;

const ProductInfoParagraph = styled.p`
  font-size: 0.85rem;
`;

const ProductImg = styled.img`
  width: 25vw;
  height: 45vh;
  position: relative;
  right: 5vw;
  bottom: 5vh;
  z-index: 1;
  object-fit: cover;
`;

const MidpageBanner = styled.section`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: -1;
  background-color: #006d77;
`;

const MidpageBannerInfo = styled.div`
  color: #edf6f9;
  width: 30vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MidpageBannerParagraph = styled.p`
  font-size: 0.85rem;
`;

const MidpageBannerTitle = styled.h2`
  font-size: 2rem;
`;

  // background: rgb(237,246,249);
  // background: linear-gradient(235deg, rgba(237,246,249,1) -10%, rgba(131,197,190,1) 15%, rgba(0,109,119,1) 100%);

const AboutContainer = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const AboutSubcontainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const AboutParagraph = styled.p`
  font-size: 0.85rem;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
`;

const AboutCardContainer = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Card = styled.div`
  width: 25vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  width: 25vw;
  height: 30vh;
  object-fit: cover;
`;

const CardInfo = styled.div`
  width: 25vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardIcon = styled.img`
  widht: 5vw;
  height: 10vh;
  object-fit: contain;
`;

const CardInfoTxt = styled.div`
  width: 18vw;
  height: 15vh;
`;

const SecondaryButton = styled(PrimaryButton)`
  color: #83c5be;
  border: 2px solid #83c5be;
  background-color: transparent;
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Menu>
        <figure>
          <Imagem src={myLogo} />
        </figure>
        <Nav>
          <List>
            <ListItem>maximus</ListItem>
            <ListItem>placerat</ListItem>
            <ListItem>tincidunt lectus</ListItem>
            <ListItem>justo</ListItem>
          </List>
          <div>
            <TertiaryButton><IconButton src={mySearchIcon} alt="Lupa - Botão de pesquisar"/></TertiaryButton>
            <SearchBox placeholder='pesquise'></SearchBox>
          </div>
        </Nav>
      </Menu>
      <Banner>
        <BannerTxtBox>
          <BannerParagraph>Vestibulum lobortis risus sed magna accumsan, sed efficitur urna interdum.</BannerParagraph>
          <BannerTitle>Suspendisse placerat maximus tincidunt</BannerTitle>
          <PrimaryButton>tristique</PrimaryButton>
        </BannerTxtBox>
        <figure>
          <BannerImg src={myBannerImg1} alt=" desenho de pessoa com coque grande na cabeça, vestindo blazer, saia e cropped segurando uma rama com 3 folhas. Ao fundo há um círculo"/>
        </figure>
      </Banner>
      <StatsContainer>
        <Stats>
          <figure>
            <StatsImg src={myDrink} alt="Icone de um copo com tampa e canudo com bebida dentro"/>
          </figure>
          <StatsTitle>42+</StatsTitle>
          <StatsParagraph>Cras nec justo eros. Fusce id tincidunt lacus, vel sagittis erat.</StatsParagraph>
        </Stats>
        <Stats>
          <figure>
            <StatsImg src={myHeartbeat} alt="Ícone de um coração com um gráfico de batida de coração"/>
          </figure>
          <StatsTitle>73%</StatsTitle>
          <StatsParagraph>Cras nec justo eros. Fusce id tincidunt lacus, vel sagittis erat.</StatsParagraph>
        </Stats>
        <Stats>
          <figure>
            <StatsImg src={myRocket} alt="Ícone de um foguete"/>
          </figure>
          <StatsTitle>70+</StatsTitle>
          <StatsParagraph>Cras nec justo eros. Fusce id tincidunt lacus, vel sagittis erat.</StatsParagraph>
        </Stats>
        <Stats>
          <figure>
            <StatsImg src={myKnight} alt="Ícone do cavalo, peça do xadrez"/>
          </figure>
          <StatsTitle>235</StatsTitle>
          <StatsParagraph>Cras nec justo eros. Fusce id tincidunt lacus, vel sagittis erat.</StatsParagraph>
        </Stats>
      </StatsContainer>
      <Product>
        <BuyContainer>
          <BuyParagraph>Integer ultricies lacus sit amet</BuyParagraph>
          <BuyTitle>Cras nec justo eros</BuyTitle>
          <BuyParagraph>Fusce id tincidunt lacus, vel sagittis erat. In eget dui malesuada, ultrices sem elementum, condimentum dolor. Suspendisse potenti. </BuyParagraph>
          <ContainedButton>Action</ContainedButton>
        </BuyContainer>
        <ProductInfoContainer>
          <figure>
            <ProductImg src={mySneakers} alt="Foto de um tenis  cano médio da marca Nike"/>
          </figure>
          <ProductInfo>
            <ProductInfoTitle>Nam eget</ProductInfoTitle>
            <ProductInfoParagraph>Maecenas a gravida est. Nulla ultrices, massa sed fermentum congue, purus dolor maximus lacus, at placerat dui libero non elit. Sed eu mauris id velit lacinia facilisis eget nec neque.</ProductInfoParagraph>
          </ProductInfo>
        </ProductInfoContainer>
      </Product>
      <MidpageBanner>
        <MidpageBannerInfo>
          <MidpageBannerParagraph>Nullam eros diam, accumsan eget placerat at</MidpageBannerParagraph>
          <MidpageBannerTitle>Maecenas a gravida est Nullam</MidpageBannerTitle>
        </MidpageBannerInfo>
        <PrimaryButton>Cras nec</PrimaryButton>
      </MidpageBanner>
      <AboutContainer>
        <AboutSubcontainer>
          <AboutParagraph>Nunc vulputate nulla</AboutParagraph>
          <AboutTitle>Proin dapibus tincidunt est id pulvinar</AboutTitle>
        </AboutSubcontainer>
        <AboutCardContainer>
          <Card>
            <figure>
              <CardImg src={myCup} alt="foto de duas xícaras de cerâmica, uma mais próxima do observador e outra mais afastada"/>
            </figure>
            <CardInfo>
              <figure>
                <CardIcon src={myRocket} alt="Ícone de um fogete"/>
              </figure>
              <CardInfoTxt>
                <h3>Sed viverra</h3>
                <AboutParagraph>Class aptent taciti sociosqu ad litora torquent</AboutParagraph>
              </CardInfoTxt>
            </CardInfo>
          </Card>
          <Card>
            <figure>
              <CardImg src={myVinil} alt="Foto de um vinil"/>
            </figure>
            <CardInfo>
              <figure>
                <CardIcon src={myLaptop} alt="Ícone de um laptop"/>
              </figure>
              <CardInfoTxt>
                <h3>Sed viverra</h3>
                <AboutParagraph>Class aptent taciti sociosqu ad litora torquent</AboutParagraph>
              </CardInfoTxt>
            </CardInfo>
          </Card>
          <Card>
            <figure>
              <CardImg src={myVase} alt="Foto de um vaso esférico pequeno com planta"/>
            </figure>
            <CardInfo>
              <figure>
                <CardIcon src={myTarget} alt="Ícone de um alvo"/>
              </figure>
              <CardInfoTxt>
                <h3>Sed viverra</h3>
                <AboutParagraph>Class aptent taciti sociosqu ad litora torquent</AboutParagraph>
              </CardInfoTxt>
            </CardInfo>
          </Card>
        </AboutCardContainer>
        <SecondaryButton>Action</SecondaryButton>
      </AboutContainer>
    </div>
  )
}
