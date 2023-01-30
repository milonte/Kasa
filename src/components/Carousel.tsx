import React from 'react';
import '../styles/components/carousel.scss';

interface CarouselProps {
    pictures: Array<string>;
}


class Carousel extends React.Component<CarouselProps, { index: number }> {
    constructor(props: any) {
        super(props);
        this.handlePrevIndex = this.handlePrevIndex.bind(this);
        this.handleNextIndex = this.handleNextIndex.bind(this);
        this.state = { index: 0 };
    }

    handlePrevIndex() {
        const indexResult = this.state.index > 0 ? this.state.index - 1 : this.props.pictures.length - 1;
        this.setState({ index: indexResult });
    }
    handleNextIndex() {
        const indexResult = this.state.index < this.props.pictures.length - 1 ? this.state.index + 1 : 0;
        this.setState({ index: indexResult });
    }

    render() {
        return (
            <div id="carousel">
                <img className="picture" src={this.props.pictures[this.state.index]} alt={`${this.state.index}`} />
                <div className='buttons'>
                    <button className='prev-btn' onClick={this.handlePrevIndex}>&#x2039;</button>
                    <button className='next-btn' onClick={this.handleNextIndex}>&#x203A;</button>
                </div>
            </div>
        );
    }

}
export default Carousel
