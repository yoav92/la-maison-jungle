function ConnectBackend(){
    return(
        <form action="/api/stuff" method="post" className="form">
          <button type="submit">Connected?</button>
        </form>
    )
}


export default ConnectBackend