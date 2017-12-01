import React, { Component } from 'react'
import NoSupport from './noSupport'

const page = (ChildPage) => {
    return class Page extends Component {
        static async getInitialProps({ req }) {
            const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
            var rv = -1;
            var ua = userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
            return { rv }
        }
        render() {
            return (
                <div className="container">
                    <div className="subcontainer">
                        {this.props.rv === -1 &&
                            <ChildPage {...this.props} />
                        }
                        {(this.props.rv < 11 && this.props.rv > -1) &&
                            <NoSupport />
                        }
                    </div>
                    <style jsx>{`
                    .container{
                        display: table;
                        height: 100vh;
                        width: 100%;
                    }
                    .subcontainer{
                        display: table-cell;
                        vertical-align: middle;
                        text-align: center;
                    }
                    `}</style>
                </div>
            )
        }
    }
}

export default page