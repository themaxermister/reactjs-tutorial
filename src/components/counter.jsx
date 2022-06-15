import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     tags: ['tag1', 'tag2', 'tag3'],
    // };

    countStyle = {
        fontWeight: 'bold',
        fontSize: 15
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={ tag }>{ tag }</li>) }</ul>;
    }

    // OnClick Bind: Mehthod A
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     console.log("Constructor", this);
    // }
    //
    // handleIncrement() {
    //     console.log('Increment Clicked');
    //     // obj.method();
    //     // function();
    // }

    // OnClick Bind: Mehthod B
    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({ count: his.props.counter.value + 1 })
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps #' + this.props.counter.id, prevProps);
        console.log('prevState #' + this.props.counter.id, prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount(){
        console.log('Counter #' + this.props.counter.id + '- Unmount');
    }

    render() {
        //console.log(this.props);
        console.log("Counter #" + this.props.counter.id + " - Rendered");
        
        return (
            //{ this.state.tags.length === 0 && <p>Please create a new tag!</p> }
            //{ this.renderTags() }
            <div>
                {this.props.children}
                <span style={ this.countStyle } className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } type="button" className="btn btn-secondary">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge text-bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;