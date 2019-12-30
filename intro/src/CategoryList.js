import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    state = {
        categories: [],
        currentCategory: ""
    };

    componentDidMount(){
        this.getCategories();
    }
    getCategories = ()=>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({
            categories:data
        }));;
    }
    changeCategory = (category) =>{
        this.setState({ currentCategory: category.name });
    }
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem active={category.name===this.props.currentCategory?true:false} onClick={()=>this.props.changeCategory(category)} key={category.categoryID}>{category.name}</ListGroupItem>
                        )
                        )
                    }

                </ListGroup>
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )
    }
}
