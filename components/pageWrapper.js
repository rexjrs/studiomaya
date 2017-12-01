import React, { Component } from 'react'
import Head from './head'
import Nav from './nav'

export default class PageWrapper extends Component {
  render() {
    return (
      <div>
        <Head title="StudioMaya" />
        <Nav />
        {this.props.children}
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: 'Raleway', sans-serif;                        
          }
        `}</style>
      </div>
    )
  }
}