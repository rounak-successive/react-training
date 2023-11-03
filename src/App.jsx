import { Link, Outlet, useLocation } from 'react-router-dom'
const App = () => {
  const { pathname } = useLocation()
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to='/assignment-1/' style={{ padding: 5 }}>
          Assignment-1
        </Link>
        <Link to='/assignment-1-class/' style={{ padding: 5 }}>
          Assignment-1 Class components
        </Link>
        <Link to='/assignment-2/' style={{ padding: 5 }}>
          Assignment-2
        </Link>
        <Link to='/assignment-3/' style={{ padding: 5 }}>
          Assignment-3
        </Link>
        <Link to='/assignment-4/' style={{ padding: 5 }}>
          Assignment-4
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
