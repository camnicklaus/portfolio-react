import React from 'react';
import { Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

// style
import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'styleConstants';

//components
import { HeaderComponent, BodyContentWrap, BodyWrap, FooterComponent } from 'ViewsHome';

const PageWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${HEADER_HEIGHT}px auto ${FOOTER_HEIGHT}px;
    grid-template-areas:
        "Header"
        "Body"
        "Footer";
    max-width: 1100px;
    height: 100vh;
    margin: 0 auto;
`;

const Body = styled.div`
    grid-area: Body;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
`;

const Home = (props) => {
    const {match, location} = props;
    return (
        <PageWrap>
            <MediaQuery query="(max-width: 767px)">
                {matches => <HeaderComponent smallMedia={matches} />}
            </MediaQuery>
            <Body gridArea={"Body"}>
                <Route path={`/:route`} component={BodyWrap} />
            </Body>
            <FooterComponent {...props} />
        </PageWrap>
    )
}
export default Home;