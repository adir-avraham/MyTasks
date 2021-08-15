import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import { Container, ThemeProvider } from '@material-ui/core';
import CasesTable from './components/cases-table';
import TasksBar from './components/app-bar';
import { theme } from './assets/customTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCase from './components/add-case';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
      <TasksBar/>   
      <div className="container">
        <AddCase/>
        <CasesTable/>
      </div>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
