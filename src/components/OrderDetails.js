import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { approveProduct, markMissingProduct, editProduct } from '../store/actions';
import styled from 'styled-components';
import SearchIcon from '../assets/search.png';
import PrintLog from '../assets/print.png';

function OrderDetails({ products, onApprove, onMarkMissing, onEdit }) {
//   const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <ProductListContainer>
      <SearchBar>
      <SearchInput type="text" placeholder="Search..." />
        {/* <SearchButton> */}
          {/* <SearchIcon /> */}
          <SearchLogo src={SearchIcon} alt="Search" />
        {/* </SearchButton> */}
        <AddItemButton>Add Item</AddItemButton>
        <PrintLogo src={PrintLog} alt="Print" />
      </SearchBar> 
      <Table>
        <thead>
          <tr>
            <TableHeader>Product Name</TableHeader>
            <TableHeader>Brand</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell>
                <ActionButton primary onClick={() => onApprove(product.id)}>
                  Approve
                </ActionButton>
                <ActionButton onClick={() => onMarkMissing(product.id)}>
                  Mark Missing
                </ActionButton>
                <ActionButton onClick={() => onEdit(product.id)}>Edit</ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ProductListContainer>
  );
}

export default OrderDetails;

const ProductListContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #333;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? 'green' : 'red')};
  color: white;
  border: none;
  border-radius: 3px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  // background-color: #333;
  // color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

const AddItemButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 20px;
  margin-right: 10px;
  margin-left: 67%;
`;

const PrintLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const SearchLogo = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 150px;
  position: absolute;
`;