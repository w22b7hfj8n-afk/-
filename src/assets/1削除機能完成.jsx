import { useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [member, setMember] = useState("");
  const [eventName, setEventName] = useState("");
  const [part, setPart] = useState("");
  const [tickets, setTickets] = useState("");

  const [speaker, setSpeaker] = useState("自分");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [ending, setEnding] = useState("フェードアウト");

  const [reports, setReports] = useState(
    JSON.parse(localStorage.getItem("megreports")) || []
  );

  const [selectedReport, setSelectedReport] = useState(null);
  const [searchText, setSearchText] = useState("");
  const addMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        speaker,
        text: message,
      },
    ]);

    setMessage("");
  };

  const saveReport = () => {
    const report = {
      date,
      member,
      eventName,
      part,
      tickets,
      ending,
      messages,
    };

    const savedReports = [...reports, report];

    localStorage.setItem(
      "megreports",
      JSON.stringify(savedReports)
    );

    setReports(savedReports);

    alert("保存しました！");
  };
  const deleteReport = (indexToDelete) => {
  const updatedReports = reports.filter(
    (_, index) => index !== indexToDelete
  );

  localStorage.setItem(
    "megreports",
    JSON.stringify(updatedReports)
  );

  setReports(updatedReports);

  if (
    selectedReport === reports[indexToDelete]
  ) {
    setSelectedReport(null);
  }
  };
  const filteredReports = reports.filter((report) => {
  if (!searchText) return true;

  const messageText = report.messages
    .map((msg) => msg.text)
    .join(" ");

  return (
    report.member.includes(searchText) ||
    report.eventName.includes(searchText) ||
    messageText.includes(searchText)
  );
});

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
     <h1>📱 ミーグリレポ【テスト123】</h1>

      <p>日付</p>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <p>メンバー</p>
      <input
        type="text"
        placeholder="清水理央"
        value={member}
        onChange={(e) => setMember(e.target.value)}
      />

      <p>イベント名</p>
      <input
        type="text"
        placeholder="全国ミーグリ"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <p>部数</p>
      <input
        type="number"
        value={part}
        onChange={(e) => setPart(e.target.value)}
      />

      <p>枚数</p>
      <input
        type="number"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
      />

      <hr />

      <h2>会話入力</h2>

      <p>発言者</p>

      <select
        value={speaker}
        onChange={(e) => setSpeaker(e.target.value)}
      >
        <option>自分</option>
        <option>メンバー</option>
      </select>

      <br />
      <br />

      <textarea
        rows="3"
        style={{ width: "100%" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="会話内容を入力"
      />

      <br />
      <br />

      <button onClick={addMessage}>
        発言追加
      </button>

      <hr />

      <p>終了方法</p>

      <select
        value={ending}
        onChange={(e) => setEnding(e.target.value)}
      >
        <option>フェードアウト</option>
        <option>剥がし</option>
      </select>

      <hr />

      <button onClick={saveReport}>
        保存
      </button>

      <hr />

      <h2>プレビュー</h2>

      {messages.map((msg, index) => (
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

      {messages.length > 0 && (
        <div
          style={{
            textAlign: "center",
            color: "#999",
            marginTop: "15px",
            fontSize: "14px",
          }}
        >
          {ending}
        </div>
      )}

      <hr />
      <hr />

      <h2>検索</h2>



      <input

      type="text"

      placeholder="キーワード検索"

      value={searchText}

      onChange={(e) => setSearchText(e.target.value)}

      />

      <hr />
      <h2>保存済みレポ</h2>

      {filteredReports.map((report, index) => (
  <div
    key={index}
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "10px",
    }}
  >
    <div
      onClick={() => setSelectedReport(report)}
      style={{
        cursor: "pointer",
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
    </div>

    <br />

    <button onClick={() => deleteReport(index)}>
      🗑️ 削除
    </button>
  </div>
))}

      {selectedReport && (
        <>
          <hr />

          <h2>レポ詳細</h2>

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

          {selectedReport.messages.map((msg, index) => (
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
        </>
      )}
    </div>
  );
}

export default App;