// ============================================================
// Wireframe UI Kit — screens, composed from components.jsx
// ============================================================
const { useState: useS } = React;

const ITEMS = [
  { id: 1, icon: 'photograph', title: 'Mountain retreat', subtitle: 'Listing · 2 beds' },
  { id: 2, icon: 'photograph', title: 'City loft', subtitle: 'Listing · studio' },
  { id: 3, icon: 'photograph', title: 'Coastal cabin', subtitle: 'Listing · 3 beds' },
  { id: 4, icon: 'photograph', title: 'Garden house', subtitle: 'Listing · 4 beds' },
];

// ---------- Login ----------
function LoginScreen({ onSignIn }) {
  const [email, setEmail] = useS('mattsmith@mail.com');
  const [pwd, setPwd] = useS('••••••••');
  return (
    <div className="k-screen">
      <StatusBar />
      <div className="k-body" style={{ justifyContent: 'center', gap: 24 }}>
        <div className="k-center" style={{ gap: 10, marginBottom: 8 }}>
          <Avatar size={64} icon="sparkles" />
          <span style={{ font: '700 24px var(--wf-font-ui)', color: 'var(--wf-text)', letterSpacing: '-0.02em' }}>Welcome back</span>
          <span style={{ font: '400 14px var(--wf-font-ui)', color: 'var(--wf-muted)' }}>Sign in to continue</span>
        </div>
        <Input label="Email" value={email} onChange={setEmail} lead="mail" />
        <Input label="Password" value={pwd} onChange={setPwd} type="password" trail="eye" />
        <div style={{ height: 4 }}></div>
        <Button onClick={onSignIn}>Sign In</Button>
        <div className="k-center"><span className="a" style={{ font: '600 14px var(--wf-font-ui)', color: 'var(--wf-ink)', textDecoration: 'underline', textUnderlineOffset: 3, cursor: 'pointer' }}>Forgot password?</span></div>
      </div>
      <HomeIndicator />
    </div>
  );
}

// ---------- Home ----------
function HomeScreen({ onOpen }) {
  const [filter, setFilter] = useS('All');
  const filters = ['All', 'Houses', 'Apartments', 'Cabins'];
  return (
    <React.Fragment>
      <TopNav title="Home" action="bell" />
      <div className="k-body">
        <Input placeholder="Search listings…" lead="search" value="" onChange={() => {}} />
        <div className="k-chips">
          {filters.map(f => <Chip key={f} on={filter === f} onClick={() => setFilter(f)}>{f}</Chip>)}
        </div>
        <SectionTitle action="See all">Featured</SectionTitle>
        <div className="k-grid">
          <MediaCard title="Lakeside" desc="From $120 / night" onClick={() => onOpen(ITEMS[0])} ratio={26} />
          <MediaCard title="Downtown" desc="From $90 / night" onClick={() => onOpen(ITEMS[1])} ratio={34} />
        </div>
        <SectionTitle>Recent</SectionTitle>
        <div className="k-list">
          {ITEMS.map(it => (
            <ListRow key={it.id} icon={it.icon} title={it.title} subtitle={it.subtitle} onClick={() => onOpen(it)} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

// ---------- Detail ----------
function DetailScreen({ item, onBack, saved, onToggleSave }) {
  return (
    <React.Fragment>
      <TopNav title={item.title} onBack={onBack} action="share" />
      <div className="k-body">
        <ImagePlaceholder height={200} ratio={22} />
        <div className="k-stack" style={{ gap: 4 }}>
          <span style={{ font: '700 22px var(--wf-font-ui)', color: 'var(--wf-text)', letterSpacing: '-0.02em' }}>{item.title}</span>
          <span style={{ font: '400 14px var(--wf-font-ui)', color: 'var(--wf-muted)' }}>{item.subtitle}</span>
        </div>
        <div className="k-toolbar" style={{ alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--wf-accent-strong)' }}>
            <Icon name="star" style={{ fontSize: 18 }} />
            <span style={{ font: '700 14px var(--wf-font-ui)', color: 'var(--wf-ink)' }}>4.8</span>
          </span>
          <span style={{ font: '400 14px var(--wf-font-ui)', color: 'var(--wf-muted)' }}>· 128 reviews</span>
        </div>
        <p style={{ margin: 0, font: '400 15px/1.5 var(--wf-font-ui)', color: 'var(--wf-ink)', letterSpacing: '-0.01em' }}>
          A short descriptive paragraph stands in for the listing copy. Wireframe text labels the
          content slot without committing to final words.
        </p>
        <div className="k-list">
          <ListRow icon="location-marker" title="Location" subtitle="Map placeholder" chevron />
          <ListRow icon="calendar" title="Availability" subtitle="Select dates" chevron />
          <ListRow icon="user-circle" title="Hosted by Alex" subtitle="Superhost · 3 yrs" chevron />
        </div>
      </div>
      <div style={{ flex: 'none', padding: '12px 20px', borderTop: '1px solid var(--wf-fill)', display: 'flex', gap: 10 }}>
        <Button variant="outline" auto onClick={onToggleSave} icon={saved ? 'heart' : 'heart'}>{saved ? 'Saved' : 'Save'}</Button>
        <Button onClick={onBack}>Book now</Button>
      </div>
    </React.Fragment>
  );
}

// ---------- Search ----------
function SearchScreen({ onOpen }) {
  const [q, setQ] = useS('');
  const [cat, setCat] = useS('Nearby');
  const cats = ['Nearby', 'Popular', 'New', 'Cheapest'];
  return (
    <React.Fragment>
      <TopNav title="Search" />
      <div className="k-body">
        <Input placeholder="Where to?" lead="search" value={q} onChange={setQ} trail="adjustments" />
        <div className="k-chips">
          {cats.map(c => <Chip key={c} on={cat === c} onClick={() => setCat(c)}>{c}</Chip>)}
        </div>
        <SectionTitle>Results</SectionTitle>
        <div className="k-list">
          {ITEMS.map(it => (
            <ListRow key={it.id} icon={it.icon} title={it.title} subtitle={it.subtitle} trailing={'$' + (80 + it.id * 10)} chevron={false} onClick={() => onOpen(it)} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

// ---------- Saved ----------
function SavedScreen({ savedItems, onOpen }) {
  return (
    <React.Fragment>
      <TopNav title="Saved" />
      <div className="k-body">
        {savedItems.length === 0 ? (
          <div className="k-center" style={{ gap: 12, marginTop: 80, color: 'var(--wf-muted)' }}>
            <Icon name="heart" style={{ fontSize: 44 }} />
            <span style={{ font: '600 16px var(--wf-font-ui)' }}>Nothing saved yet</span>
            <span style={{ font: '400 14px var(--wf-font-ui)', textAlign: 'center', maxWidth: 220 }}>Tap the heart on any listing to keep it here.</span>
          </div>
        ) : (
          <React.Fragment>
            <SectionTitle>{savedItems.length} saved</SectionTitle>
            <div className="k-grid">
              {savedItems.map(it => <MediaCard key={it.id} title={it.title} desc={it.subtitle} onClick={() => onOpen(it)} />)}
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

// ---------- Profile ----------
function ProfileScreen() {
  const [notif, setNotif] = useS(true);
  const [emails, setEmails] = useS(false);
  const [dark, setDark] = useS(false);
  return (
    <React.Fragment>
      <TopNav title="Profile" action="cog" />
      <div className="k-body">
        <div className="k-center" style={{ gap: 8 }}>
          <Avatar size={72} icon="user" />
          <span style={{ font: '700 20px var(--wf-font-ui)', color: 'var(--wf-text)', letterSpacing: '-0.02em' }}>Matt Smith</span>
          <span style={{ font: '400 14px var(--wf-font-ui)', color: 'var(--wf-muted)' }}>mattsmith@mail.com</span>
          <Button variant="secondary" auto pill onClick={() => {}}>Edit profile</Button>
        </div>
        <SectionTitle>Preferences</SectionTitle>
        <div className="k-setgroup">
          <SettingRow icon="bell" label="Notifications"><Toggle on={notif} onChange={setNotif} /></SettingRow>
          <SettingRow icon="mail" label="Email updates"><Toggle on={emails} onChange={setEmails} /></SettingRow>
          <SettingRow icon="eye" label="Dark mode"><Toggle on={dark} onChange={setDark} /></SettingRow>
        </div>
        <SectionTitle>Account</SectionTitle>
        <div className="k-list">
          <ListRow icon="credit-card" title="Payment methods" chevron />
          <ListRow icon="lock-closed" title="Privacy & security" chevron />
          <ListRow icon="information-circle" title="Help & support" chevron />
        </div>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, {
  LoginScreen, HomeScreen, DetailScreen, SearchScreen, SavedScreen, ProfileScreen, ITEMS,
});
