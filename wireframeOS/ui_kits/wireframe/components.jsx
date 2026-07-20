// ============================================================
// Wireframe UI Kit — presentational components
// All styling lives in kit.css (.k-*). Icons via <wf-icon>.
// ============================================================
const { useState } = React;

function Icon({ name, style }) {
  // wrap the <wf-icon> web component
  return React.createElement('wf-icon', { name, style });
}

// ---------- Device chrome ----------
function StatusBar() {
  return (
    <div className="k-status">
      <span className="t">9:41</span>
      <span className="ind">
        <Icon name="search" style={{ fontSize: 0, display: 'none' }} />
        <span className="dot" title="signal"></span>
        <span className="bar" title="battery"></span>
      </span>
    </div>
  );
}
function HomeIndicator() { return <div className="k-home-ind"></div>; }

function DeviceFrame({ children }) {
  return (
    <div className="k-device">
      <div className="k-screen">{children}</div>
    </div>
  );
}

// ---------- Navigation ----------
function TopNav({ title, onBack, action, onAction }) {
  return (
    <div className="k-topnav">
      {onBack
        ? <div className="nav-btn" onClick={onBack}><Icon name="chevron-left" /></div>
        : <div className="spacer"></div>}
      <span className="title center">{title}</span>
      {action
        ? <div className="nav-btn" onClick={onAction}><Icon name={action} /></div>
        : <div className="spacer"></div>}
    </div>
  );
}

function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'search', label: 'Search', icon: 'search' },
    { id: 'saved', label: 'Saved', icon: 'heart' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <div className="k-tabbar">
      {tabs.map(t => (
        <div key={t.id} className={'k-tab' + (active === t.id ? ' active' : '')} onClick={() => onChange(t.id)}>
          <Icon name={t.icon} />
          <span className="lbl">{t.label}</span>
        </div>
      ))}
    </div>
  );
}

// ---------- Primitives ----------
function Button({ children, variant = 'primary', pill, disabled, auto, icon, onClick }) {
  const cls = ['k-btn', variant, pill ? 'pill' : '', disabled ? 'disabled' : '', auto ? 'auto' : ''].join(' ').trim();
  return (
    <button className={cls} onClick={disabled ? undefined : onClick}>
      {icon && <Icon name={icon} />}{children}
    </button>
  );
}

function Input({ label, value, onChange, placeholder, type = 'text', lead, trail, onTrail, focusable = true }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className="k-field">
      {label && <label>{label}</label>}
      <div className={'k-input' + (focus && focusable ? ' focus' : '')}>
        {lead && <Icon name={lead} style={{ color: 'var(--wf-muted)' }} />}
        <input
          type={type} value={value} placeholder={placeholder}
          onChange={e => onChange && onChange(e.target.value)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
        {trail && <Icon name={trail} style={{ marginLeft: 'auto' }} onClick={onTrail} />}
      </div>
    </div>
  );
}

function Toggle({ on, onChange }) {
  return <div className={'k-toggle' + (on ? ' on' : '')} onClick={() => onChange(!on)}><span className="knob"></span></div>;
}
function Checkbox({ on, onChange }) {
  return <div className={'k-check' + (on ? ' on' : '')} onClick={() => onChange(!on)}>{on && <Icon name="check" />}</div>;
}
function Radio({ on, onChange }) {
  return <div className={'k-radio' + (on ? ' on' : '')} onClick={() => onChange && onChange(true)}></div>;
}

function Chip({ children, on, onClick }) {
  return <span className={'k-chip' + (on ? ' on' : '')} onClick={onClick}>{children}</span>;
}

function SectionTitle({ children, action, onAction }) {
  return (
    <div className="k-sectitle">
      <span className="h">{children}</span>
      {action && <span className="a" onClick={onAction}>{action}</span>}
    </div>
  );
}

// ---------- Placeholders ----------
function ImagePlaceholder({ height = 140, ratio = 30 }) {
  return <div className="k-ph" style={{ height, '--ca': ratio + 'deg' }}></div>;
}
function Avatar({ size = 44, icon = 'user' }) {
  return <div className="k-avatar" style={{ width: size, height: size, fontSize: size * 0.55 }}><Icon name={icon} /></div>;
}

// ---------- Composite list / card ----------
function ListRow({ icon, title, subtitle, trailing, chevron = true, onClick }) {
  return (
    <div className="k-row" onClick={onClick}>
      {icon && <span className="thumb"><Icon name={icon} /></span>}
      <span className="meta">
        <span className="t1">{title}</span>
        {subtitle && <span className="t2">{subtitle}</span>}
      </span>
      {trailing && <span className="trail">{trailing}</span>}
      {chevron && <Icon name="chevron-right" style={{ color: 'var(--wf-muted)', fontSize: 18 }} />}
    </div>
  );
}

function MediaCard({ title, desc, onClick, ratio = 30 }) {
  return (
    <div className="k-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <div className="k-ph" style={{ height: 96, borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottomWidth: '1.5px', '--ca': ratio + 'deg' }}></div>
      <div className="cbody">
        <span className="ct">{title}</span>
        {desc && <span className="cd">{desc}</span>}
      </div>
    </div>
  );
}

function SettingRow({ icon, label, children }) {
  return (
    <div className="k-setrow">
      {icon && <span className="si"><Icon name={icon} /></span>}
      <span className="sl">{label}</span>
      {children}
    </div>
  );
}

Object.assign(window, {
  Icon, StatusBar, HomeIndicator, DeviceFrame, TopNav, TabBar,
  Button, Input, Toggle, Checkbox, Radio, Chip, SectionTitle,
  ImagePlaceholder, Avatar, ListRow, MediaCard, SettingRow,
});
