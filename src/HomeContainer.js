/**
 * Created by rabby on 08/09/17.
 */

import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        userData: state.userData

    }
}


const mapDispatchToProps = dispatch => {
    return {
        registerUser: user => {
            dispatch(Actions.registerUser(user));
        },
        loginUser: user => {
            dispatch(Actions.loginUser(user));
        }
    }
}


export const  UserContainer = connect(mapStateToProps, mapDispatchToProps)(App);