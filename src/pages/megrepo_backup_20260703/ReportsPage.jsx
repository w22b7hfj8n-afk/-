function ReportsPage({
  reports,
  setPage,
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

    {selectedReport.messages?.map(
      (msg, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
          }}
        >
          <strong>
            {msg.speaker}
          </strong>
          ：
          {msg.text}
        </div>
      )
    )}
  </>
)}

    </div>
  );
}

export default ReportsPage;