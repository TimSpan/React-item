import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { List } from 'antd';



class PageList extends Component {
    componentWillReceiveProps(nextProps){

        console.log(nextProps);

    }

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <List
                style={{background:'#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Link to={`/detail/${item.id}`}>{item.title}</Link>
                    </List.Item>
                )}
            />
        )

    }
    // 这里需要多理解
    componentDidMount(){
        let url = 'http://www.dell-lee.com/react/api/list.json'
        const id = this.props.match.params.id;
        if(id){
            url = url +'?id='+id;
        }
        axios.get(url)
        .then(res => {
            this.setState({
                data: res.data.data
            });
        })
    }
}
export default PageList;