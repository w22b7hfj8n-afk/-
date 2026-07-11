function ReportsPage({
  reports,
  setPage,
  editReport,
  deleteReport,
  searchText,
  setSearchText,
  sortType,
  setSortType,
  selectedReport,
  setSelectedReport,
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
    boxShadow:
      "0 4px 20px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      fontSize: "35px",
      marginBottom: "10px",
    }}
  >
    📚
  </div>

  <h1
    style={{
      color: "#8B5CF6",
      margin: 0,
    }}
  >
    保存済みレポ
  </h1>

  <p
    style={{
      color: "#666",
      marginTop: "8px",
    }}
  >
    思い出を振り返ろう
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

<input
  type="text"
  placeholder="🔍 メンバー名・イベント名・会話内容"
  value={searchText}
  onChange={(e) =>
    setSearchText(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  }}
/>

<br />
<br />

<select
  value={sortType}
  onChange={(e) =>
    setSortType(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ddd",
  }}
>
  <option value="date_desc">
    🆕 新しい順
  </option>

  <option value="date_asc">
    📜 古い順
  </option>
</select>

<p
  style={{
    color: "#666",
    marginTop: "15px",
    marginBottom: 0,
  }}
>
  検索結果：{reports.length}件
</p>
</div>

      {reports.map((report, index) => (
        <div
          key={index}
          style={{
  background: "#fff",
  padding: "18px",
  marginBottom: "15px",
  borderRadius: "20px",
  boxShadow:
    "0 4px 15px rgba(0,0,0,0.06)",
}}
        >
       <div
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    color: "#8B5CF6",
    marginBottom: "8px",
  }}
>
  💜 {report.member}
</div>

<div style={{ color: "#666" }}>
  📅 {report.date}
</div>

<div style={{ color: "#666" }}>
  🎪 {report.eventName}
</div>

<div style={{ color: "#666" }}>
  {report.part}部 ・ 🎫 {report.tickets}枚
</div>   

<button
  onClick={() => {
  setSelectedReport(report);
  setPage("reportDetail");
}}
  style={{
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    background: "#8B5CF6",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
  }}
>
  👁 詳細を見る
</button>

        </div>
      ))}












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
    marginTop: "20px",
  }}
>
  ← トップへ戻る
</button>

    </div>


  );

}

export default ReportsPage;