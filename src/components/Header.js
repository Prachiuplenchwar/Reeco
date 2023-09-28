import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import cartLogo from '../assets/cart.jpeg';

const HeaderContainer = styled.header`
  background-color: #145508e0;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const BrandName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;
`;

const CartLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  cursor: pointer;
`;

const UserDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const Username = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  min-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userName = 'James';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <BrandName>Reeco</BrandName>
      <MenuList>
        <MenuItem>Store</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem>Analytics</MenuItem>
        <CartLogo src={cartLogo} alt="Cart" />
        <UserDropdown onClick={toggleDropdown}>
          <Username>Hello, {userName}</Username>
          <DropdownContent isOpen={isDropdownOpen}>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownContent>
        </UserDropdown>
      </MenuList>
    </HeaderContainer>
  );
};

export default Header;
