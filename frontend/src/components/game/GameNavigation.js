import React, {Component} from 'react';
import {BackAndroid, NavigationExperimental, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getGameNavigation} from '../../reducers';
import ChooseMeaningGame from './choose_meaning';
import ListenGame from './listen';
import MissingCharacterGame from './missing_character';

const {
    CardStack: NavigationCardStack,
} = NavigationExperimental;

class GameNavigator extends Component {

    componentDidMount() {
        // BackAndroid.addEventListener('hardwareBackPress', () => {
        //     const routes = this.props.navigation.routes;
        //
        //     if (routes[routes.length - 1].key === 'home' || routes[routes.length - 1].key === 'login') {
        //         return false;
        //     }
        //
        //     this.props.popRoute(this.props.navigation.key);
        //     return true;
        // });
    }

    _renderScene(props) { // eslint-disable-line class-methods-use-this
        switch (props.scene.route.key) {
            case 'choose_meaning':
                return <ChooseMeaningGame/>;
            case 'listen':
                return <ListenGame/>;
            case 'missing_character':
                return <MissingCharacterGame/>;
            default:
                return (<Text>Fuck</Text>)
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <NavigationCardStack
                    navigationState={this.props.navigation}
                    renderScene={this._renderScene}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    navigation: getGameNavigation(state),
});

export default connect(mapStateToProps)(GameNavigator);