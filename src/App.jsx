import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ReportsPage from "./pages/ReportsPage";
import StatsPage from "./pages/StatsPage";
import InputPage from "./pages/InputPage";
import ReportDetailPage from "./pages/ReportDetailPage";

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
  const [editingMessageIndex, setEditingMessageIndex] =
  useState(null);

  const [ending, setEnding] = useState("フェードアウト");

  const [reports, setReports] = useState(
    JSON.parse(localStorage.getItem("megreports")) || []
  );

  const [selectedReport, setSelectedReport] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [favoriteOnly, setFavoriteOnly] =
  useState(false);
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
    favorite:
      editingIndex !== null
    ? reports[editingIndex].favorite
    : false,
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
setPage("home");
setEnding("フェードアウト");

setSelectedReport(null);

  alert("保存しました！");
};

useEffect(() => {
  const handleMessage = (event) => {
    if (event.origin !== window.location.origin) {
      return;
    }

    if (
      event.data?.type ===
      "MEGREPO_SAVE_REPORT"
    ) {
      saveReport();
    }
  };

  window.addEventListener(
    "message",
    handleMessage
  );

  return () => {
    window.removeEventListener(
      "message",
      handleMessage
    );
  };
}, [saveReport]);


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

  const toggleFavorite = (index) => {
  const updatedReports = [...reports];

  updatedReports[index].favorite =
    !updatedReports[index].favorite;

  localStorage.setItem(
    "megreports",
    JSON.stringify(updatedReports)
  );

  setReports(updatedReports);

  // 詳細画面を開いたままでも星が切り替わる
  setSelectedReport(updatedReports[index]);
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
  setMessages((prev) => [
    ...prev,
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
  if (favoriteOnly && !report.favorite) {
    return false;
  }

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

    if (sortType === "date_desc") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortType === "date_asc") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortType === "member") {
      const memberCompare =
        a.member.localeCompare(
          b.member,
          "ja"
        );

      if (memberCompare !== 0) {
        return memberCompare;
      }

      return new Date(b.date) - new Date(a.date);
    }

    return 0;
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
    reports={sortedReports}
    favoriteOnly={favoriteOnly}
    setFavoriteOnly={setFavoriteOnly}
    setPage={setPage}
    editReport={editReport}
    deleteReport={deleteReport}
    searchText={searchText}
    setSearchText={setSearchText}
    sortType={sortType}
    setSortType={setSortType}
    selectedReport={selectedReport}
    setSelectedReport={setSelectedReport}
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

if (page === "reportDetail") {
  return (
    <ReportDetailPage
      report={selectedReport}
      reports={reports}
      setPage={setPage}
      editReport={editReport}
      deleteReport={deleteReport}
      toggleFavorite={toggleFavorite}
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
    addImage={addImage}
   />
  );
}

}

export default App;