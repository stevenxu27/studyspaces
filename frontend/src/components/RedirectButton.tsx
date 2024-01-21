import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectButton = (props) => {
    const navigate = useNavigate();

    const handleViewBuildingClick = () => {
        navigate(props.path);
    };

    return (
        <button onClick={handleViewBuildingClick}>
            {props.text && <span>{props.text}</span>}
            {props.icon && <img src={props.icon} width="26px" height="auto" alt="Icon" />}
        </button>
    );
}

export default RedirectButton;
