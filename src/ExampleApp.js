import React, { Component } from 'react';
import {Route, NavLink, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{background: "black", height: "200px", padding: "20px"}}>
			<NavLink style={{padding: '20px'}} to='/'>Enter</NavLink>
			<NavLink to='/home/music'>Home page</NavLink>
        </div>
		<Switch>
			<Route exact path="/" component={EntryPage} />
			<Route path="/home" component={HomePage} />
		</Switch>
      </div>
    );
  }
}

export default App;


const EntryPage = () => {
	return (
		<h1>SPLASHY SPLASH</h1>
	)
}

const HomePage = (props) => {

	return (
		<section>
			<div style={{height: '120px', background: 'gray'}}>
				<h3>home page</h3>
				<NavLink to={'/home/music'}>music</NavLink>
				<NavLink to={'/home/coding'}>coding</NavLink>
			</div>
			<Switch>
				<Route path={'/home/:route'} exact component={Body} />
			</Switch>
		</section>
	)
}

const Body = ({match}) => {
	return (
		<div style={{height: '100px', background: 'red', border: "1px solid yellow"}}>
			{match.params.route === 'coding' && <CodingContent />}
			{match.params.route === 'music' && <MusicContent />}
		</div>
	)
}

const MusicContent = () => {
	return (
		<div>music content</div>
	)
}

const CodingContent = () => {
	return (
		<div>coding content</div>
	)
}

{/* <section>
    <ul className="articles-list">
      {articles.map(article => (
        <li key={article.id}>
          <NavLink to={`${match.url}/${article.slug}`}>
            <article>
              <p>{article.title}</p>
            </article>
          </NavLink>
        </li>
      ))}
    </ul>
    <Switch>
      <Route path={`${match.url}`} exact render={() => <p>Choose article</p>} />
      <Route path={`${match.url}/:title`} exact component={ArticlePage} />
    </Switch>
  </section> */}