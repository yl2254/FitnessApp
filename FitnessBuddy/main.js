
/*const ReactNative = require('react-native');
const React = require('react');

const {
    AppRegistry,
    Component,
    Navigator,
} = React;
*/

import React, {Component} from 'react';
import { StyleSheet, View, AppRegistry, Navigator, ListView} from 'react-native';
import {Container} from 'native-base';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import HeaderIconText from './Header';
import MyDatePicker from './DatePicker';
import NewWorkout from './NewWorkout';


class FitnessBuddy extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Time',
                },
                {
                    task: 'Pro Club',
                },
                {
                    task: 'running',
                },
                {
                    task: 'buddy preference',
                },
            ],
        };
    }

    onAddStarted() {
        this.nav.push({
            name: 'taskform',
        });
    }

    onCancel() {
        console.log('cancelled!');
        this.nav.pop();
    }

    onAdd(task) {
        console.log('a task was added: ', task);
        this.state.todos.push({ task });
        this.setState({ todos: this.state.todos });
        this.nav.pop();
    }

    onDone(todo) {
        console.log('todo was completed: ', todo.task);
        const filteredTodos =
            this.state.todos.filter((filterTodo) => {
                return filterTodo !== todo;
            });
        this.setState({ todos: filteredTodos });
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'taskform':
            return (
                <Container>
                <HeaderIconText/>               
                <TaskForm
                    onAdd={this.onAdd.bind(this)}
                    onCancel={this.onCancel.bind(this)}
                />
                </Container>
            );
        default:
            return (
                 <Container>
                <HeaderIconText/>
                <MyDatePicker  />  
                <NewWorkout
                    onAddStarted={this.onAddStarted.bind(this)}
                    onDone={this.onDone.bind(this)}
                    todos={this.state.todos}
                />           
                </Container>
            );
        }
    }

    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
                initialRoute={{ name: 'tasklist', index: 0 }}
                ref={((nav) => {
                    this.nav = nav;
                })}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => FitnessBuddy);
