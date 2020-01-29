import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer,Footer,FooterSection,FooterLinkList, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyBeerPong</Link>} scroll>   
            <Navigation>
                <Link to="/boka">Boka</Link>
                <Link to="/regler">Regler</Link>
                <Link to="/omoss">Om Oss</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}  to="/">BilloGrafen</Link>}>
            <Navigation>
                <Link to="/boka">Boka</Link>        
                <Link to="/regler">Regler</Link>
                <Link to="/omoss">Om Oss</Link>
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content" />
            <Main/>
        </Content>

        <Footer className="footer" size="mini">
            <FooterSection>
                <FooterLinkList>
                     <a href="https://elev.skolinspektionen.se/globalassets/bilder/full-bredd/elevwebben/hjalp.png">Hjälp</a>
                     <a href="http://powertrainnorden.se/wp-content/uploads/2018/04/Powertrain-villkor.jpg">Intergritet & Villkor</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    </Layout>
</div>
    );
  }
}

export default App;