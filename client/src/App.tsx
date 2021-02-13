import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import logo from './logo.svg';
import './App.css';
import { Container, ThemeProvider } from '@material-ui/core';
import TasksTable from './components/tasks-table';
import TasksBar from './components/app-bar';
import TaskForm from './components/task-form';
import { theme } from './assets/customTheme';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
    <div>
        <TasksBar/>
        <TaskForm/>
        <TasksTable/>
    </div>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
