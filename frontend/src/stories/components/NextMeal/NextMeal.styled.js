import { styled } from 'styled-components';
import { ThreeDotsVertical } from '@styled-icons/bootstrap';

export const Root = styled.div`
display: flex;
width: 370px;
padding: 9px 0px;
flex-direction: column;
align-items: center;
gap: 12px;
align-items: center;
border-radius: 12px;
background: #2D2B30;
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.25);
color: #CAC4D0;
height: auto;
align-self: stretch;
`;

export const Summary = styled.div`
display: flex;
padding: 0px 12px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
align-self: stretch;
`;

export const SummaryMain = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
`;

export const Media = styled.img`
width: 370px;
height: 200px;
background: lightgray 50%;
object-fit: cover;
`;
export const Content = styled.div`
display: flex;
padding: 0px 16px;
justify-content: space-between;
align-items: flex-start;
align-content: space-between;
align-self: stretch;
flex-wrap: wrap;
`;

export const IconButton = styled.button`
display: flex;
padding: 0;
border: none;
outline: none;
background: none;
cursor: pointer;
border-radius: 15px;
&:hover {
    background: #37353A;
}
`;
export const Menu = styled(ThreeDotsVertical)`
color: #CAC4D0;
width: 24px;
height: 24px;
`;

export const Grid = styled.div`
display: flex;
padding: 0px 16px;
justify-content: space-between;
align-items: flex-start;
align-content: space-between;
align-self: stretch;
flex-wrap: wrap;
`;

export const Actions = styled.div`
display: flex;
width: 100%;
padding: 0px 10px;
justify-content: flex-end;
align-items: center;
gap: 10px;
align-self: stretch;
`;

export const Button = styled.button`
border: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
display: flex;
padding: 10px 24px;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;
border-radius: 100px;
background: var(--M3-sys-dark-primary, #D0BCFF);
color: var(--M3-sys-dark-on-primary, #381E72);
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
`;

