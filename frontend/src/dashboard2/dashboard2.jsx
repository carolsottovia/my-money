import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`$ ${credit}`} text='Total Credit' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`$ ${debt}`} text='Total Debt' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`$ ${credit - debt}`} text='Total Amounth' />
                    </Row> 
                </Content> 
            </div>
        )
    }
}
