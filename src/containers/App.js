import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import {robots} from '../robots'
import './App.css'
import Scroll from '../components/Scroll'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots:users})})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => 
                robot.name.toLowerCase().includes(searchfield.toLowerCase())
        )
        return (!robots.length) ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1>Collection Cards</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
        
    }
    
}

// everything heads towards chaos
// increases discomfort
// expanding
// constant shifting towards infinity

export default App