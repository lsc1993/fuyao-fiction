import React from 'react';
import Header from '../../component/header/Header';
import Card from '../../component/common/Card'
import './Home.css';
import { Carousel, WingBlank, Tabs, Badge, Grid } from 'antd-mobile';
import preview from '../../res/img/preview.jpg'
import preview1 from '../../res/img/preview1.jpg'
import preview2 from '../../res/img/preview2.jpg'

const tabs = [
    { title: <Badge>悬疑</Badge> },
    { title: <Badge>恐怖</Badge> },
    { title: <Badge>网游</Badge> },
    { title: <Badge>都市</Badge> },
    { title: <Badge>玄幻</Badge> },
];

const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: [preview, preview1, preview2],
            imgHeight: 176,
            columnNum: 5,
        }
    }

    bookItem() {
        return(
            <div className="home-book-card-container">
                <Card title="我要修仙" desc="我要修仙我要修仙我要修仙我要修仙我要修仙" imgUrl={preview}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header />
                <div className="home-wrapper">
                    <div className="home-container">
                        <div className="home-carousel-container">
                            <WingBlank>
                                <Carousel className="home-space-carousel"
                                  autoplay
                                  infinite
                                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                  afterChange={index => this.setState({slideIndex: index})} 
                                >
                                    {
                                        this.state.imgUrl.map((val, index) => (
                                            <a key={val} href="#">
                                                  <img src={val} alt=""/>
                                            </a>
                                        ))
                                    }
                                </Carousel>
                            </WingBlank>
                        </div>
                        <div className="home-book-type-container">
                            {/* <div className="home-book-type-title">
                                <p>作品分类</p>
                            </div> */}
                            <div className="home-book-type-content">
                                <Tabs tabs={tabs} initialPage={1}>
                                    <div className="home-book-list-container">
                                        <Grid data={data1} columnNum={this.state.columnNum} activeStyle={false} hasLine={false} renderItem={this.bookItem} />
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1} columnNum={this.state.columnNum} hasLine={false}/>
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1} columnNum={this.state.columnNum} hasLine={false}/>
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1} columnNum={this.state.columnNum} hasLine={false}/>
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1} columnNum={this.state.columnNum} hasLine={false}/>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;