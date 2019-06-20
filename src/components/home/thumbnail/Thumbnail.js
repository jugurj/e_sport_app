import React,  { Component } from 'react';
import StripesBg from './StripesBg';
import Title from './Title';

class Thumbnail extends Component {

    state =  {
        width: 0,
        height: 0 
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render () {
        return (
            <React.Fragment>
                {/* This div moves thumbnail section under navbar so that zoom doesn't mess up margins. */}
                <div style={{ height: '80px', width: '100%' }}></div>
                <div 
                    className="thumbnail_wrapper"
                    style={{ zoom: `${this.state.width * 0.06}%`}}
                >
                    <StripesBg/>
                    <Title/>
                </div>
            </React.Fragment>
            
        );
    }
};

export default Thumbnail;