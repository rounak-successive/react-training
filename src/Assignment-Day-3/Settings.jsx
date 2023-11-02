import './Assignment3.css'
const Settings = () => {
  const userSettings = {
    notifications: true,
    darkMode: true,
  }

  return (
    <div className='settings-section'>
      <h3 style={{ marginTop: '5px' }}>Adjust Your Settings</h3>
      <p>
        Notifications: {userSettings.notifications ? 'Enabled' : 'Disabled'}
      </p>
      <p>Dark Mode: {userSettings.darkMode ? 'Enabled' : 'Disabled'}</p>
    </div>
  )
}
export default Settings
