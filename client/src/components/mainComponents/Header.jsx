import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

function Header() {
  return (
    <header>
      <div className="header-box">
        <h1>BIWI</h1>
        <div className="icon-box">
          <button><ReceiptOutlinedIcon/></button>
          <button><ShoppingCartOutlinedIcon/></button>
          <button><PermIdentityOutlinedIcon/></button>
        </div>
      </div>
    </header>
  );
}

export default Header;