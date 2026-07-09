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
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#f8f9ff 0%,#f3e8ff 100%)",
      }}
    >
      <div
  style={{
    background: "#fff",
    borderRadius: "24px",
    padding: "25px",
    textAlign: "center",
    marginBottom: "20px",
    boxShadow:
      "0 4px 20px rgba(0,0,0,0.08)",
  }}
>
  <div
    style={{
      fontSize: "25px",
      marginBottom: "10px",
    }}
  >
    📊
  </div>

  <h1
    style={{
      color: "#8B5CF6",
      margin: 0,
    }}
  >
    統計・ランキング
  </h1>

  <p
    style={{
      color: "#666",
      marginTop: "8px",
    }}
  >
    あなたの推し活データ
  </p>
</div>

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.06)",
        }}
      >
        <h2>📈 活動サマリー</h2>

        <p>📝 総レポ数：{totalReports}</p>

        <p>🎫 総枚数：{totalTickets}</p>

        <p>📊 平均枚数：{averageTickets}</p>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.06)",
        }}
      >
        <h2>👑 メンバー別ランキング</h2>

        {memberRanking.map(
          ([name, stats], index) => (
            <div
              key={name}
              style={{
                background: "#fafafa",
                borderRadius: "15px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <strong
                style={{
                  color: "#8B5CF6",
                  fontSize: "18px",
                }}
              >
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : "🏅"}{" "}
                {name}
              </strong>

              <br />

              {stats.count}回 /
              {" "}
              {stats.tickets}枚
            </div>
          )
        )}
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.06)",
        }}
      >
        <h2>🎯 よく行く部ランキング</h2>

        {partRanking.map(
          ([part, count], index) => (
            <div
              key={part}
              style={{
                background: "#fafafa",
                borderRadius: "15px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <strong>
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : "🏅"}{" "}
                {part}部
              </strong>

              <br />

              {count}回
            </div>
          )
        )}
      </div>

      <button
        onClick={() => setPage("home")}
        style={{
          width: "100%",
          padding: "15px",
          background: "#8B5CF6",
          color: "#fff",
          border: "none",
          borderRadius: "15px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ← トップへ戻る
      </button>
    </div>
  );
}

export default StatsPage;