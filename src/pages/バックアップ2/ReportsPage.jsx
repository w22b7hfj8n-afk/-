import { useState } from "react";

function ReportsPage({
  reports,
  setPage,
  editReport,
  deleteReport,
  searchText,
  setSearchText,
  sortType,
  setSortType,
}) {

const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
<button
  onClick={() => setPage("home")}
>
  ← トップへ戻る
</button>

      <h1>📚 保存済みレポ</h1>

      <input
  type="text"
  placeholder="メンバー名・イベント名・会話内容で検索"
  value={searchText}
  onChange={(e) =>
    setSearchText(e.target.value)
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  }}
/>

<p>
  検索結果：{reports.length}件
</p>

<select
  value={sortType}
  onChange={(e) =>
    setSortType(e.target.value)
  }
>
  <option value="date_desc">
    新しい順
  </option>

  <option value="date_asc">
    古い順
  </option>
</select>

      <p>レポ件数：{reports.length}</p>

      {reports.map((report, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <strong>{report.member}</strong>

          <br />

          {report.date}

          <br />

          {report.eventName}

          <br />

          {report.part}部

          <br />

          {report.tickets}枚

          <br />
<br />

<button
  onClick={() => setSelectedReport(report)}
>
  👁 詳細
</button>
        </div>
      ))}
{selectedReport && (
  <>
    <hr />

    <h2>📄 レポ詳細</h2>

    <p>
      <strong>{selectedReport.member}</strong>
    </p>

    <p>{selectedReport.date}</p>

    <p>{selectedReport.eventName}</p>

    <p>
      {selectedReport.part}部 /{" "}
      {selectedReport.tickets}枚
    </p>

    <hr />

    {selectedReport.messages?.map((msg, index) => (
  <div
    key={index}
    style={{
      display: "flex",
      justifyContent:
        msg.speaker === "自分"
          ? "flex-end"
          : "flex-start",
      marginBottom: "10px",
    }}
  >
    <div
      style={{
        background: "#eeeeee",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "70%",
      }}
    >
      {msg.text}
    </div>
  </div>
))}
<div
  style={{
    textAlign: "center",
    color: "#999",
    marginTop: "15px",
    fontSize: "14px",
  }}
>
  {selectedReport.ending}
</div>

<hr />

<button
  onClick={() => {
    const index = reports.findIndex(
      (report) => report === selectedReport
    );

    editReport(selectedReport, index);

    setPage("input");
  }}
>
  ✏️ 編集
</button>

{" "}

<button
  onClick={() => {
    const index = reports.findIndex(
      (report) => report === selectedReport
    );

    if (
      window.confirm(
        "このレポを削除しますか？"
      )
    ) {
      deleteReport(index);
    }
  }}
>
  🗑️ 削除
</button>

  </>
)}


    </div>
  );
}

export default ReportsPage;