import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

function Header() {
  return (
    <header>
      <div className="header-box">
        <h1><a href="/">BIWI</a></h1>
        <div className="icon-box">
          <a href="/"><ReceiptOutlinedIcon/></a>
          <a href="/"><ShoppingCartOutlinedIcon/></a>
          <a href="/login"><PermIdentityOutlinedIcon/></a>
        </div>
      </div>
    </header>
  );
}

export default Header;