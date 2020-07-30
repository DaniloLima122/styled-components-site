import styled from "styled-components";

export const Nav = styled.nav`

    background: #000;
    color: #fff;
    padding:20px;
    width:100%;
    height:60px;
    margin:0;
    display:flex;
    justify-content: space-between;
    align-items:center;

    a{
        text-decoration: none;
        color: #fff;
        margin: 0px 20px;
    }

    .logo{
        font-size:30px;
    }

    ul{
        display:flex;
    }

    li{
        list-style:none;
    }

    ul li:last-child a{
        background: #fff;
        color:#000;
        padding:10px;
    }

`;

export const Banner = styled.div`

    width:100%;
    height: 90vh;
    background-image: url(${bgbanner})

`;