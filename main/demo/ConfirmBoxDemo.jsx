import {ConfirmBox} from './index.js';

export default class ConfirmBoxDemo extends React.Component {
    handleConfirm(){
        console.log('confirmed')
    }

    handleCancel(){
        console.log('canceled')
    }

    render() {
        return (
            <ol>
                <li>
                    <h4>default confirm box</h4>
                    <ConfirmBox title='confirm deleted, realy you want delete this? are you sure?' onConfirm={this.handleConfirm.bind(this)} onCancel={this.handleCancel.bind(this)}>
                        <a href='javascript:;'>delete</a>
                    </ConfirmBox>
                </li>
                <li>
                    <h4>default confirm box</h4>
                    <ConfirmBox title='confirm delete?'>
                        <a href='javascript:;'>delete</a>
                    </ConfirmBox>
                </li>
                <li>
                    <h4>conform box with different position</h4>
                    <ul>
                        <li>
                            <ConfirmBox title='confirm delete?' position='left'>
                                <a href='javascript:;'>left</a>
                            </ConfirmBox>
                        </li>
                        <li>
                            <ConfirmBox title='confirm delete?' position='right'>
                                <a href='javascript:;'>right</a>
                            </ConfirmBox>
                        </li>
                        <li>
                            <ConfirmBox title='confirm delete?' position='top'>
                                <a href='javascript:;'>top</a>
                            </ConfirmBox>
                        </li>
                        <li>
                            <ConfirmBox title='confirm delete?' position='bottom'>
                                <a href='javascript:;'>bottom</a>
                            </ConfirmBox>
                        </li>
                    </ul>
                </li>
            </ol>
        );
    }
}
