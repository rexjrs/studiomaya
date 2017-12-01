export default () => (
  <div>
    <div className="container">
      <div className="left-nav">
        <h3>About</h3>
        <h3>Experience</h3>
        <h3>Technology</h3>
        <h3>Contact</h3>
      </div>
    </div>
    <style jsx>{`
      .container{
        height: 60px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .left-nav{
        display: flex;
      }
      .left-nav > h3{
        margin: 0px;
        margin-left: 10px;
        margin-right: 10px;
        color: rgba(100,100,100, 1)
      }
    `}</style>
  </div>
)
