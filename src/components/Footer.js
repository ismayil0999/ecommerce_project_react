import React from 'react';
import { Footers, FooterDiv,Item } from '../styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Footer() {
    return (
        <div>
            <Footers>
                <FooterDiv>
                   <Item><LocalPhoneIcon /> Telephone: (801) 2345 - 6789</Item> 
                   <Item><EmailIcon />E-mail: support@tecnostore.com </Item> 
                   <Item><LocationOnIcon />  8901 Marmora Road, Glasgow, D04 89GR</Item> 
                </FooterDiv>
                <FooterDiv>
                  <Item>Company Info</Item>
                  <Item>News</Item>
                  <Item>Investors</Item>
                  <Item>Policies</Item>
                </FooterDiv>
                <FooterDiv>
                <Item>Jobs</Item>
                <Item>Delivery Information</Item>
                <Item>Term and conditions</Item>
                </FooterDiv>
                <FooterDiv>
                    <Item><FacebookIcon style={{ color: "white" }} />Facebook</Item> 
                    <Item><TwitterIcon style={{ color: "white" }} />Twitter</Item> 
                    <Item><InstagramIcon style={{ color: "white" }} />Instagram</Item> 
                </FooterDiv>
                <FooterDiv>
                   <img style={{width:"70%"}} src='/icons/visa.png'></img>
                </FooterDiv>
            </Footers>
        </div>
    );
}
