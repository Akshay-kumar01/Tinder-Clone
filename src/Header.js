import React from 'react';
import "./Header.css";
import PersonIcon  from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import tinlogo from './logo.png';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import {Link, useHistory} from "react-router-dom";

function Header({backButton}){
    const history=useHistory();
    return(
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                <ArrowBackIcon fontSize="large" className="header__icon"/>
                    </IconButton>
            ):(
                <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            )}
            <Link to="/">
            <img className="header__logo"
            src={tinlogo} alt="error"/>
            </Link>
           <Link to="/chat">
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
        )
}

export default Header;