import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

function Header() {
  return (
    <header>
        <a id="title" href="/">BIWI</a>
        <div className="header-icon-box">
          <a href="/"><ReceiptOutlinedIcon/></a>
          <a href="/"><ShoppingCartOutlinedIcon/></a>
          <a href="/login"><PermIdentityOutlinedIcon/></a>
        </div>
    </header>
  );
}

export default Header;