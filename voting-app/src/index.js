import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ProductList extends React.Component{
    render(){
        return(
            <div className='ui unstactable items'>
                Hello, friends! I am a basic  React Component.
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('root')
);