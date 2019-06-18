import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { List } from 'antd-mobile';
import Header from '../../component/header/Header';
import './BookDetail.css';
import audioPlayIcon from '../../res/img/audioPlay.png';
import audioPauseIcon from '../../res/img/audioPause.png';

const Item = List.Item;
const AUDIO_PLAYING = "playing";
const AUDIO_PAUSE = "pause";

export default class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSectionList: [
                { title: "第00集_李鸿章：晚清第一能臣 前言" },
                { title: "第01集_李鸿章：晚清第一能臣 前言" },
                { title: "第02集_李鸿章：晚清第一能臣 前言" },
                { title: "第03集_李鸿章：晚清第一能臣 前言" },
                { title: "第04集_李鸿章：晚清第一能臣 前言" },
                { title: "第05集_李鸿章：晚清第一能臣 前言" },
                { title: "第06集_李鸿章：晚清第一能臣 前言" },
                { title: "第07集_李鸿章：晚清第一能臣 前言" },
                { title: "第08集_李鸿章：晚清第一能臣 前言" },
                { title: "第09集_李鸿章：晚清第一能臣 前言" }],
            audioPlay: audioPauseIcon,
            selectedBookItem: "第00集_李鸿章：晚清第一能臣 前言",
            audioStatus: AUDIO_PAUSE,
        };

        this.toggleAudioPlay = this.toggleAudioPlay.bind(this);
    }

    onItemClick(item, index) {
        this.setState({
            audioPlay: audioPlayIcon,
            selectedBookItem: item.title,
            audioStatus: AUDIO_PLAYING
        });
    }

    toggleAudioPlay() {
        if (this.state.audioStatus == AUDIO_PLAYING) {
            this.setState({
                audioPlay: audioPauseIcon,
                audioStatus: AUDIO_PAUSE
            });
        } else {
            this.setState({
                audioPlay: audioPlayIcon,
                audioStatus: AUDIO_PLAYING
            });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="book-detail-container">
                    <Container>
                        <Media>
                            <img
                                width={140}
                                height={200}
                                className="mr-3"
                                src={require('../../res/img/fic1.jpeg')} alt="" />
                            <Media.Body>
                                <h6>无限吞噬世界</h6>
                                <p>作者：风雨彩虹 主播：风雨彩虹</p>
                                <p>类型：科幻玄幻</p>
                                <p>章节：21</p>
                                <p>时长：18914分钟</p>
                            </Media.Body>
                        </Media>
                        <div className="book-desc-container">
                            <div className="book-detial-sub-title">
                                <h5>内容简介</h5>
                            </div>
                            <p>他企图用先进的思想和行动唤醒中国这条沉睡的巨龙，四十年付出为封建的中国点亮了一丝近代化的曙光，埋下了近代化企业的种子，他用自己奋斗的故事谱写了一部励志史诗！</p>
                        </div>
                        <div className="book-audio-play-container">
                            <div className="book-detial-sub-title">
                                <h5>正在收听</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={4} md={4} xs={6}>
                                    <img src={this.state.audioPlay} onClick={this.toggleAudioPlay} />
                                </Col>
                                <Col xl={8} lg={8} md={8} xs={6}>
                                    <p>{this.state.selectedBookItem}</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="book-section-container">
                            <div className="book-detial-sub-title">
                                <h5>章节列表</h5>
                            </div>
                            <List className="book-section-list">
                                {this.state.bookSectionList.map((item, index) => (
                                    <Item
                                        className="book-section-list-item"
                                        arrow="horizontal"
                                        key={item.title}
                                        onClick={() => this.onItemClick(item, index)}>
                                        {item.title}
                                    </Item>
                                ))}
                            </List>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}