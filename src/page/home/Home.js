import React from 'react';
import Header from '../../component/header/Header';
import BookItem from '../../component/common/BookItem'
import './Home.css';
import { Carousel, Tabs, Badge, Grid, Flex } from 'antd-mobile';
import { Media } from 'react-bootstrap';
import preview from '../../res/img/preview.jpeg'
import preview1 from '../../res/img/preview1.jpeg'
import preview2 from '../../res/img/preview2.jpeg'
import recommandBook from '../../res/img/fic1.jpeg'

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
            recommandBooks: [{ img: recommandBook, name: "末世无限吞噬" }, { img: recommandBook, name: "末世无限吞噬" }
                , { img: recommandBook, name: "末世无限吞噬" }, { img: recommandBook, name: "末世无限吞噬" }
            ],
            imgHeight: 176,
            columnNum: 3,
        }
    }

    bookItem() {
        return (
            <BookItem title="我要修仙"
                desc="丧尸横行，异兽出没，无数恐怖物种出现，王双，觉醒了自己的吞噬天赋，吞噬诸天，踏上了一条永恒"
                author="风雨神话"
                type="科幻玄幻"
                imgUrl={preview} />
        );
    }

    render() {
        return (
            <div>
                <Header />
                <div className="home-wrapper">
                    <div className="home-container">
                        <div className="home-carousel-container">
                            <Carousel className="home-space-carousel"
                                autoplay
                                infinite
                                slideWidth={1.0}
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => this.setState({ slideIndex: index })}>
                                {this.state.imgUrl.map((val, index) => (
                                    <a key={index} href="#">
                                        <Media>
                                            <img className="mr-3" src={val} alt="" />
                                        </Media>

                                    </a>
                                ))}
                            </Carousel>
                        </div>
                        <div className="home-book-recommand-container">
                            <Flex direction="column" justify="center">
                                <div className="home-book-recommand-title">
                                    <p>精彩推荐</p>
                                </div>
                                <div className="home-book-recommand-content" align="center">
                                    <ul>
                                        {this.state.recommandBooks.map((item, index) => (
                                            <li key={index}>
                                                <img src={item.img} alt={item.name}></img><p>{item.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Flex>
                        </div>
                        <div className="home-book-type-container">
                            <div className="home-book-type-title">
                                <p>小说分类</p>
                            </div>
                            <div className="home-book-type-content">
                                <Tabs tabs={tabs} initialPage={0}>
                                    <div className="home-book-list-container">
                                        <Grid data={data1}
                                            columnNum={this.state.columnNum}
                                            hasLine={false}
                                            square={false}
                                            renderItem={this.bookItem} />
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1}
                                            columnNum={this.state.columnNum}
                                            hasLine={false} />
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1}
                                            columnNum={this.state.columnNum}
                                            hasLine={false} />
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1}
                                            columnNum={this.state.columnNum}
                                            hasLine={false} />
                                    </div>
                                    <div className="home-book-list-container">
                                        <Grid data={data1}
                                            columnNum={this.state.columnNum}
                                            hasLine={false} />
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