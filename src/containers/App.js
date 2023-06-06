import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            searchField: ''
        }
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => this.setState({ images: photos }));
    }

    render() {
        const filteredImages = this.state.images.filter(imageCard => {
            return imageCard.title.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (!this.state.images.length) {
            return <h1 className="tc f1">LOADING...</h1>
        }
        return (
            <div className="tc">
                <h1 className="f1">Image Gallery</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList images={filteredImages}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;