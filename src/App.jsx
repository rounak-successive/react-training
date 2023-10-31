import { Link, Outlet, useLocation } from 'react-router-dom'
const App = () => {
  const { pathname } = useLocation()
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-1/' style={{ padding: 5 }}>
          Assignment-1
        </Link>
        <Outlet />
      </nav>
      {pathname === '/' && (
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome to Rounak's React Training Application.</h2>
        </div>
      )}
    </>
  )
}

export default App
