function HomePage({ setPage }) {
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
          padding: "30px",
          textAlign: "center",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            fontSize: "50px",
          }}
        >
          💬
        </div>

        <h1
          style={{
            margin: "10px 0",
            color: "#8B5CF6",
          }}
        >
          MegRepo
        </h1>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          ミーグリの思い出を
          <br />
          きれいに残そう
        </p>
      </div>

      <div
  onClick={() => setPage("input")}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-4px)";
    e.currentTarget.style.boxShadow =
    "0 10px 25px rgba(0,0,0,0.12)";
}}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0px)";
    e.currentTarget.style.boxShadow =
    "0 4px 15px rgba(0,0,0,0.06)";
}}

  style={{
    background: "#fff",
    borderRadius: "20px",
    padding: "20px",
    marginBottom: "15px",
    cursor: "pointer",

    boxShadow:
      "0 4px 15px rgba(0,0,0,0.06)",

    transition: "0.2s",
  }}
>
        <h2>✏️ 新規レポ作成</h2>
        <p style={{ color: "#666" }}>
          ミーグリレポを記録する
        </p>
      </div>

      <div
        onClick={() => setPage("reports")}

        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-4px)";
  }}

        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0px)";
  }}

        style={{
    background: "#fff",
    borderRadius: "20px",
    padding: "20px",
    marginBottom: "15px",
    cursor: "pointer",

    boxShadow:
      "0 4px 15px rgba(0,0,0,0.06)",

    transition: "0.2s",
  }}
>
        <h2>📚 保存済みレポ</h2>
        <p style={{ color: "#666" }}>
          過去のレポを見る
        </p>
      </div>

      <div
        onClick={() => setPage("stats")}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-4px)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0px)";
  }}

  style={{
    background: "#fff",
    borderRadius: "20px",
    padding: "20px",
    marginBottom: "15px",
    cursor: "pointer",

    boxShadow:
      "0 4px 15px rgba(0,0,0,0.06)",

    transition: "0.2s",
  }}
>
        <h2>📊 統計・ランキング</h2>
        <p style={{ color: "#666" }}>
          推し活データを分析
        </p>
      </div>
    </div>
  );
}

export default HomePage;