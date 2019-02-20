import * as React from 'react';
import Header from './Header';
import './AppShell.less';
import Sidebar from './Sidebar';

export class AppShell extends React.Component {
    render() {
        return (
            <div className="page">
                <Header />
                <section className="page-content">
                    <div className="page-container">
                        <div>
                            <Sidebar />
                        </div>
                        <div className="page-right-content">
                            {this.props.children}
                        </div>
                    </div>
                </section>
                <footer></footer>
            </div>
        );
    }
}