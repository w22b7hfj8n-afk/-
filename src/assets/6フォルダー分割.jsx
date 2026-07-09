import { useState } from "react";
import HomePage from "./pages/HomePage";
import ReportsPage from "./pages/ReportsPage";
import StatsPage from "./pages/StatsPage";
import InputPage from "./pages/InputPage";

function App() {
  const [page, setPage] =
  useState("home");
  const [date, setDate] = useState("");
  const [member, setMember] = useState("");
  const [eventName, setEventName] = useState("");
  const [part, setPart] = useState("");
  const [tickets, setTickets] = useState("");

  const [speaker, setSpeaker] = useState("自分");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(""); 
  const [editingMessageIndex, setEditingMessageIndex] =
  useState(null);

  const [ending, setEnding] = useState("フェードアウト");

  const [reports, setReports] = useState(
    JSON.parse(localStorage.getItem("megreports")) || []
  );

  const [selectedReport, setSelectedReport] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] =
  useState("date");
  const [editingIndex, setEditingIndex] = useState(null);
  const addMessage = () => {
  if (!message.trim()) return;

  if (editingMessageIndex !== null) {
    const updatedMessages = [...messages];

    updatedMessages[editingMessageIndex] = {
      speaker,
      text: message,
    };

    setMessages(updatedMessages);

    setEditingMessageIndex(null);
  } else {
    setMessages([
      ...messages,
      {
        speaker,
        text: message,
      },
    ]);
  }

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

  let savedReports;

  if (editingIndex !== null) {
    savedReports = [...reports];

    savedReports[editingIndex] = report;
  } else {
    savedReports = [...reports, report];
  }

  localStorage.setItem(
    "megreports",
    JSON.stringify(savedReports)
  );

  setReports(savedReports);

  setEditingIndex(null);

setDate("");
setMember("");
setEventName("");
setPart("");
setTickets("");
setMessages([]);
setEnding("フェードアウト");

setSelectedReport(null);

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
  const editReport = (report, index) => {
  setDate(report.date);
  setMember(report.member);
  setEventName(report.eventName);
  setPart(report.part);
  setTickets(report.tickets);
  setMessages(report.messages);
  setEnding(report.ending);

  setEditingIndex(index);
};
const editMessage = (index) => {
  setMessage(messages[index].text);

  setSpeaker(messages[index].speaker);

  setEditingMessageIndex(index);
};
const deleteMessage = (indexToDelete) => {
  const updatedMessages =
    messages.filter(
      (_, index) =>
        index !== indexToDelete
    );

  setMessages(updatedMessages);
};

const addImage = (e) => {
  const file = e.target.files[0];

  console.log(file.type);

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setMessages([
      ...messages,
      {
        speaker,
        type: "image",
        image: reader.result,
      },
    ]);
  };

  reader.readAsDataURL(file);
};

  const filteredReports = reports.filter((report) => {
  if (!searchText) return true;

  const messageText = report.messages
  .map((msg) => msg.text || "")
  .join(" ");

  return (
    report.member.includes(searchText) ||
    report.eventName.includes(searchText) ||
    messageText.includes(searchText)
  );
});

const sortedReports = [...filteredReports]
  .sort((a, b) => {
    if (sortType === "member") {
      const memberCompare =
        a.member.localeCompare(
          b.member,
          "ja"
        );

      if (memberCompare !== 0) {
        return memberCompare;
      }

      return (
        new Date(b.date) -
        new Date(a.date)
      );
    }

    return (
      new Date(b.date) -
      new Date(a.date)
    );
  });

const totalReports = reports.length;

const memberStats = {};

reports.forEach((report) => {
  if (!memberStats[report.member]) {
    memberStats[report.member] = {
      count: 0,
      tickets: 0,
    };
  }

  memberStats[report.member].count += 1;

  memberStats[report.member].tickets += Number(
    report.tickets || 0
  );
});

const memberRanking = Object.entries(memberStats)
  .sort(
    (a, b) =>
      b[1].tickets - a[1].tickets
  );
const partStats = {};

reports.forEach((report) => {
  if (!partStats[report.part]) {
    partStats[report.part] = 0;
  }

  partStats[report.part] += 1;
});

const partRanking = Object.entries(partStats)
  .sort((a, b) => b[1] - a[1]);  

const totalTickets = reports.reduce(
  (sum, report) => sum + Number(report.tickets || 0),
  0
);

const averageTickets =
  totalReports > 0
    ? (totalTickets / totalReports).toFixed(1)
    : 0;
if (page === "home") {
  return (
    <HomePage
      setPage={setPage}
    />
  );
}

if (page === "reports") {
  return (
  <ReportsPage
    reports={reports}
    setPage={setPage}
  />
);
}

if (page === "stats") {
  return (
    <StatsPage
      totalReports={totalReports}
      totalTickets={totalTickets}
      averageTickets={averageTickets}
      memberRanking={memberRanking}
      partRanking={partRanking}
      setPage={setPage}
    />
  );
}

if (page === "input") {
  return (
   <InputPage
    setPage={setPage}
    date={date}
    setDate={setDate}
    member={member}
    setMember={setMember}
    eventName={eventName}
    setEventName={setEventName}
    part={part}
    setPart={setPart}
    tickets={tickets}
    setTickets={setTickets}
    speaker={speaker}
    setSpeaker={setSpeaker}
    message={message}
    setMessage={setMessage}
    addMessage={addMessage}
    editingMessageIndex={editingMessageIndex}
    messages={messages}
    editMessage={editMessage}
    deleteMessage={deleteMessage}
    ending={ending}
    setEnding={setEnding}
    saveReport={saveReport}
    editingIndex={editingIndex}

   />
  );
}

if (page === "input") {
  return <InputPage />;
}

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
  style={{
    marginBottom: "20px",
  }}
>
  ← トップへ戻る
</button>

     <h1>📱 ミーグリレポ</h1>

      <p>日付</p>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <p>メンバー</p>
      <input
        type="text"
        placeholder="金村美玖"
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
  {editingMessageIndex !== null
    ? "発言更新"
    : "発言追加"}
</button>

{" "}

<input
  type="file"
  accept="image/*"
  onChange={addImage}
/>

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
  {editingIndex !== null
    ? "更新"
    : "保存"}
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
      {msg.type === "image" ? (
        <img
          src={msg.image}
          alt=""
          style={{
            maxWidth: "200px",
            borderRadius: "10px",
          }}
        />
      ) : (
        msg.text
      )}

      <br />
      <br />

      {msg.type !== "image" && (
        <>
          <button
            onClick={() =>
              editMessage(index)
            }
          >
            ✏️
          </button>

          {" "}
        </>
      )}

      <button
        onClick={() =>
          deleteMessage(index)
        }
      >
        🗑️
      </button>
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

<h2>📸 投稿用プレビュー</h2>

<div
  style={{
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: "20px",
      lineHeight: "1.8",
    }}
  >
    <div>{date}</div>

    <div>
      {eventName} {part}部 {tickets}枚
    </div>

    <div>
      <strong>{member}</strong>
    </div>
  </div>

  {messages.map((msg, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent:
          msg.speaker === "自分"
            ? "flex-end"
            : "flex-start",
        marginBottom: "25px",
      }}
    >
      <div>
  {msg.speaker === "メンバー" && (
    <div
      style={{
        fontSize: "14px",
        marginBottom: "5px",
        textAlign: "left",
        fontWeight: "bold",
      }}
    >
      {member}
    </div>
  )}
        

        <div
  style={{
    border:
      msg.speaker === "メンバー"
        ? "2px solid #d9534f"
        : "2px solid #999",

    borderRadius: "30px",

    padding: "12px 20px",

    background: "#fff",

    maxWidth: "300px",

    fontSize: "18px",
  }}
>
          {msg.type === "image" ? (
            <img
              src={msg.image}
              alt=""
              style={{
                maxWidth: "200px",
                borderRadius: "10px",
              }}
            />
          ) : (
            msg.text
          )}
        </div>
      </div>
    </div>
  ))}

  <div
    style={{
      textAlign: "center",
      color: "#bbb",
      marginTop: "30px",
      fontSize: "26px",
    }}
  >
    {ending}
  </div>
</div>

<hr />
      


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
                {msg.type === "image" ? (
  <img
    src={msg.image}
    alt=""
    style={{
      maxWidth: "200px",
      borderRadius: "10px",
    }}
  />
) : (
  msg.text
)}
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
