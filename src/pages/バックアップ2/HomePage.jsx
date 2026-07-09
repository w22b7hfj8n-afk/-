function HomePage({ setPage }) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>📱 ミーグリレポ</h1>

      <button
        onClick={() => setPage("input")}
      >
        📝 ミーグリレポ入力
      </button>

      <br />
      <br />

      <button
        onClick={() => setPage("reports")}
      >
        📚 保存済みレポ
      </button>

      <br />
      <br />

      <button
        onClick={() => setPage("stats")}
      >
        📊 統計・ランキング
      </button>
    </div>
  );
}

export default HomePage;