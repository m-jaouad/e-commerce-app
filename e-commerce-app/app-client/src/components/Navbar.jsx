import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  /* background-color: black; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 16px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px 10px;
`;
const SearchInput = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  color: darkblue;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput /> <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Jaouad-Shope.com</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
