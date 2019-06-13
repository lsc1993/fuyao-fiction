import React from 'react';
import { Flex } from 'antd-mobile';
import preview from '../../res/img/preview.jpg'

export default class CardItem extends React.Component {

    render() {
        return(
            <div className="card-container">
                <Flex direction="column">
                    <Flex.Item>
                        <img src={preview} alt=""/>
                    </Flex.Item>
                    <Flex.Item>
                        <div><p>{this.props.title}</p></div>
                        <div><p>{this.props.desc}</p></div>
                    </Flex.Item>
                </Flex>
            </div>
        );
    }
}