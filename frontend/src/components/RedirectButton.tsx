import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectButton = (props) => {
    const navigate = useNavigate();

    const handleViewBuildingClick = () => {
        navigate(props.path);
    };

    const buttonStyle = {
        marginLeft: props.type === 'home' ? '20px' : '0',
        backgroundColor: props.type === 'home' ? 'transparent' : '',
        marginRight: props.type === 'login' ? '20px' : '0',
        paddingInline: props.type === 'login' ? '30px' : '',
        paddingBlock: props.type === 'login' ? '10px' : '',
      };

      return (
        <button onClick={handleViewBuildingClick} style={buttonStyle}>
          {props.text && <span>{props.text}</span>}
          {props.icon && <img src={props.icon} width="26px" height="auto" alt="Icon" />}
        </button>
      );
}

export default RedirectButton;
