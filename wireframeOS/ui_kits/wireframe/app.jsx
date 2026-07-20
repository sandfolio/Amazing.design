// ============================================================
// Wireframe UI Kit — interactive demo app
// Login → tabbed app (Home / Search / Saved / Profile) → Detail
// ============================================================
const { useState: uS } = React;

function App() {
  const [signedIn, setSignedIn] = uS(false);
  const [tab, setTab] = uS('home');
  const [detail, setDetail] = uS(null);
  const [saved, setSaved] = uS([]);

  const open = (item) => setDetail(item);
  const back = () => setDetail(null);
  const toggleSave = () => {
    if (!detail) return;
    setSaved(s => s.find(i => i.id === detail.id) ? s.filter(i => i.id !== detail.id) : [...s, detail]);
  };
  const isSaved = detail && saved.some(i => i.id === detail.id);

  let content;
  if (!signedIn) {
    content = <LoginScreen onSignIn={() => setSignedIn(true)} />;
  } else if (detail) {
    content = (
      <div className="k-screen">
        <StatusBar />
        <DetailScreen item={detail} onBack={back} saved={isSaved} onToggleSave={toggleSave} />
        <HomeIndicator />
      </div>
    );
  } else {
    let screen;
    if (tab === 'home') screen = <HomeScreen onOpen={open} />;
    else if (tab === 'search') screen = <SearchScreen onOpen={open} />;
    else if (tab === 'saved') screen = <SavedScreen savedItems={saved} onOpen={open} />;
    else screen = <ProfileScreen />;
    content = (
      <div className="k-screen">
        <StatusBar />
        {screen}
        <TabBar active={tab} onChange={setTab} />
        <HomeIndicator />
      </div>
    );
  }

  const hint = !signedIn ? 'Tap Sign In to enter the app'
    : detail ? 'Tap Save to keep this listing · back to return'
    : 'Switch tabs below · tap any listing to open it';

  return (
    <div className="k-app">
      <div className="k-stagewrap">
        <div className="k-device">{content}</div>
        <span className="k-hint">{hint}</span>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
