// === Main App ===
const App = () => {
  const [tab, setTab] = React.useState("home");
  const [reportOpen, setReportOpen] = React.useState(false);
  const [showDevice, setShowDevice] = React.useState(false);

  // When user clicks 我的设备 from Mine, jump to device
  const handleOpenDevice = () => {
    setShowDevice(true);
  };

  let content;
  if (showDevice) {
    content = (
      <>
        <div style={{position:'absolute', top: 16, left: 16, zIndex: 5}}>
          <button className="back-btn" onClick={() => setShowDevice(false)}><Icon name="chevron-left" size={18}/></button>
        </div>
        <DeviceScreen />
      </>
    );
  } else {
    switch (tab) {
      case "home":      content = <HomeScreen onOpenDetailReport={() => setReportOpen(true)} />; break;
      case "detect":    content = <DetectScreen onOpenDetailReport={() => setReportOpen(true)} onOpenHistoryItem={() => setReportOpen(true)} />; break;
      case "dashboard": content = <DashboardScreen onSelectMember={() => setReportOpen(true)} />; break;
      case "mine":      content = <MineScreen onOpenDevice={handleOpenDevice} />; break;
    }
  }

  return (
    <div className="app">
      {content}
      <TabBar active={tab} onChange={(t) => { setShowDevice(false); setTab(t); }}/>
      <DetailReportPage open={reportOpen} onClose={() => setReportOpen(false)}/>
    </div>
  );
};

const Root = () => (
  <IOSDevice width={402} height={874} dark={false}>
    <App/>
  </IOSDevice>
);

ReactDOM.createRoot(document.getElementById("phone-mount")).render(<Root/>);
