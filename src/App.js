import React,{useState} from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider'

import './App.css';
import Chat from './components/Chat';

function App() {

	const [{user}, dispatch] = useStateValue()

	return (
		<div className="app">
			<BrowserRouter>
			{
				user ? (
					<>
						<Header />
						<div className='app__body'>
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<h1>welcome</h1>
								</Route>
							</Switch>
						</div>
					</>
				) : (
					<Route path='/'>
						<Login />
					</Route>
				)
			}
			</BrowserRouter>
		</div>
	);
}

export default App;
