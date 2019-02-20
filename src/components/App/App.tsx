import * as React from 'react';
import { hot } from 'react-hot-loader';
import { AppShell } from '../app-shell/AppShell';

class App extends React.Component {
    render() {
        return (
            <AppShell>
                <h1>App 1</h1>
            </AppShell>
        );
    }
}

export default App;