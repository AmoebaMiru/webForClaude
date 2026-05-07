// Tab Bar component
const TabBar = ({ active, onChange }) => {
  const tabs = [
    { id: "home", label: "首页", icon: "home" },
    { id: "detect", label: "检测", icon: "search" },
    { id: "dashboard", label: "仪表盘", icon: "dashboard" },
    { id: "mine", label: "我的", icon: "user" },
  ];
  return (
    <div className="tabbar">
      {tabs.map(t => (
        <button key={t.id} className={"tab " + (active === t.id ? "active" : "")} onClick={() => onChange(t.id)}>
          <span className="tab-icon-wrap">
            <Icon name={t.icon} size={20} />
          </span>
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
};

// Header (greeting style)
const GreetingHeader = ({ name, suffix, right }) => (
  <div className="screen-header">
    <div>
      <p className="greeting">早上好</p>
      <h1 className="greeting-name">{name}{suffix && <span style={{fontWeight:400, fontSize:18, marginLeft:6, color:'var(--ink-700)'}}>{suffix}</span>}</h1>
    </div>
    <div style={{display:'flex', gap: 8}}>{right}</div>
  </div>
);

window.TabBar = TabBar;
window.GreetingHeader = GreetingHeader;
