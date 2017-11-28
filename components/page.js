import React, { Component } from 'react'
import Head from './head'

export default class PageWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Head title="StudioMaya"/>
        {this.props.children}
      </div>
    )
  }
}

export default pageWrapper