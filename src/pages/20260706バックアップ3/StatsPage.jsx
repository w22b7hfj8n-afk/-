function StatsPage({
  totalReports,
  totalTickets,
  averageTickets,
  memberRanking,
  partRanking,
  setPage,
}) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >

      <h1>📊 統計・ランキング</h1>

      <p>総レポ数：{totalReports}</p>

      <p>総枚数：{totalTickets}</p>

      <p>平均枚数：{averageTickets}</p>

      <hr />

<h2>👑 メンバー別ランキング</h2>

{memberRanking.map(([name, stats]) => (
  <div
    key={name}
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "10px",
    }}
  >
    <strong>{name}</strong>

    <br />

    {stats.count}回 / {stats.tickets}枚
  </div>
))}

<hr />

<h2>🥇 よく行く部ランキング</h2>

{partRanking.map(([part, count]) => (
  <div
    key={part}
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "10px",
    }}
  >
    <strong>{part}部</strong>

    <br />

    {count}回
  </div>
))}

<button
        onClick={() => setPage("home")}
      >
        ← トップへ戻る
      </button>

    </div>
  );
}

export default StatsPage;