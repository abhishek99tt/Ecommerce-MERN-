import styled from "styled-components";

const Container = styled.div`
    flex:1;
    height: 70vh;
    margin: 3px;
    position: relative;
`;
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    padding: 10px;
    border: none;
    background-color:white;
    color:gray;
    cursor: pointer;
    font-weight:600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
