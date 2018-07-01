import React ,{Component} from 'react';
import {Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import {incrementNumber} from '../actions';

 class Number extends Component{
    render(){
console.log('From the props ',this.props)

        return(
            <div>
                <div className="row col-sm-offset-5">
                <p>{this.props.num}</p> 
                </div>
                   
                <div className="row col-sm-offset-3">
                    <Button 
                    bsStyle="primary"
                    onClick={()=>this.props.incrementNumber(this.props.num)}
                    >Increment</Button>
                </div>
               
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        num:state.num,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({incrementNumber},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps   )(Number);