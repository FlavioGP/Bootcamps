import styled from 'styled-components';

export const Page = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    justify-content: center;
`;
export const ButtonsGroup = styled.div`
    width: 250px;
    height: max-content;
    display: flex;
    justify-content: space-between  ;
    margin-top: 50px;
    padding: 20px;
`;
export const Button = styled.button`
    width: 80px;
    height: 25px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
`;
export const Circle = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(255,0,0);
    position: absolute;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`} ;

`;
