import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { SiYoutubemusic } from "react-icons/si";

function Header() {
  return (
    <>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <SiYoutubemusic className='fs-1 mx-3'/>
            <span className='fs-3'>Media Player</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header