import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Desc = styled.div`
  padding: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-top: 20px;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  font-weight: bold;
  color: darkblue;
  cursor: pointer;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Jaouad-Shope.com</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore
          ab deleniti, culpa vel et sint nostrum, ad atque sapiente maiores
          possimus magni quo, perferendis voluptates impedit saepe.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Other Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title style={{ margin: "20px 0" }}>Contact Info</Title>
        <ContactItem>
          <Room style={{ "margin-right": "10px" }} /> 622 New York |USA
        </ContactItem>
        <ContactItem>
          <Phone style={{ "margin-right": "10px" }} /> 06 123 456
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ "margin-right": "10px" }} />{" "}
          jaouadmustafa@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
