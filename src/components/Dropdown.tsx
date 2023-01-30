import React, { ReactElement } from 'react';
import '../styles/components/dropdown.scss';

interface DropdownProps {
    title: string;
    children: ReactElement;
}

class Dropdown extends React.Component<DropdownProps, { isHidden: boolean }> {
    constructor(props: any) {
        super(props);
        this.displayContent = this.displayContent.bind(this);
        this.displayHeader = this.displayHeader.bind(this);
        this.state = { isHidden: true };
    }


    displayContent() {
        if (!this.state.isHidden) {
            return (
                <div className='content'>{this.props.children}</div>
            )
        } else { return (<div className='buttons'></div>) }
    }

    displayHeader() {
        if (this.state.isHidden) {
            return (
                <div className='title' onClick={() => {
                    this.setState({ isHidden: false });
                }}>
                    {this.props.title}
                    <span className='show-btn'>
                        &#x2039;
                    </span>
                </div>
            )
        } else {
            return (
                <div className='title' onClick={() => {
                    this.setState({ isHidden: true });
                }}>
                    {this.props.title}
                    <span className='show-btn'>
                        &#x203A;
                    </span>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='dropdown'>
                <this.displayHeader />
                <this.displayContent />
            </div>
        );
    }

}
export default Dropdown
