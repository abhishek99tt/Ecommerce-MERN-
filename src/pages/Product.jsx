import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOptions = styled.option``

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
      background-color: teal;
      color: white;
  }
`


const Product = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            adipisci, facere quasi optio quaerat culpa eos delectus veritatis
            nihil architecto? Non aliquid velit voluptate magni molestias, saepe
            vero pariatur eos cupiditate illum quisquam quis nihil voluptas,
            molestiae rerum possimus. Quidem reiciendis ducimus soluta
            dignissimos cum sequi voluptatibus similique cumque perferendis.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOptions>XS</FilterSizeOptions>
                <FilterSizeOptions>S</FilterSizeOptions>
                <FilterSizeOptions>M</FilterSizeOptions>
                <FilterSizeOptions>L</FilterSizeOptions>
                <FilterSizeOptions>XL</FilterSizeOptions>
                </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <RemoveIcon />
                <Amount>1</Amount>
                <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
