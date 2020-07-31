import styled from "styled-components";

export const HBanner = styled.div`

    width:100%;
    height: 90.9vh;
    background-size: 100% 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    position:relative;
   
    img{
        width:100%;
        height:100%;
        position:absolute;
        filter: brightness(.5);
        margin:0;
        top:0;
    }

    h1,button{
        z-index:10;
        margin: 0px 0 40px 0;
    }

    h1{
        color: #fff;
        font-weight: 100;
        font-size:60px;
    }

    button{
        padding: 10px;
        font-size: 20px;
        background:#fff;
        outline:none;
        cursor:pointer;
    }
`;