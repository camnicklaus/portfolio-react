import styled from 'styled-components';
import { transMd, selectedLight } from 'styleConstants';

export const MenuContentWrapLg = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;
export const MenuContentWrapSm = styled.div`
    /* position: absolute; */
    transition: max-height ${transMd}ms;
    width: 100vw;
    background: ${selectedLight};
    display: flex;
    /* display: ${props => props.menuActive ? 'grid' : 'none'}; */
    max-height: ${props => props.menuActive ? '400px' : '0px'};
    overflow: hidden;

    flex-direction: column;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    flex: 1;
`;
export const MenuLi = styled.li`

`;