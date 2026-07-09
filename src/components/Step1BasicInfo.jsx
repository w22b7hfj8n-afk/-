function Step1BasicInfo({
  setPage,
  date,
  setDate,
  member,
  setMember,
  eventName,
  setEventName,
  part,
  setPart,
  tickets,
  setTickets,
  setInputStep,
  hinataMembers,
  sakuraMembers,
}) {
  return (
    <>
<div
style={{
background: "#fff",
borderRadius: "24px",
padding: "25px",
boxShadow:
"0 4px 20px rgba(0,0,0,0.08)",
}}
>
<div
style={{
textAlign: "center",
marginBottom: "25px",
}}
>
<div
style={{
fontSize: "50px",
}}
>
📝 
</div>

    <h2
      style={{
        color: "#8B5CF6",
        margin: "10px 0",
      }}
    >
      基本情報
    </h2>

    <p
      style={{
        color: "#666",
      }}
    >
      ミーグリ情報を入力しよう
    </p>
  </div>

  <div style={{ marginBottom: "15px" }}>
    <label>
      📅 日付
    </label>

    <input
      type="date"
      value={date}
      onChange={(e) =>
        setDate(e.target.value)
      }
      style={{
        width: "100%",
        padding: "12px",
        marginTop: "5px",
        borderRadius: "12px",
        border: "1px solid #ddd",
        boxSizing: "border-box",
      }}
    />
  </div>

  <div style={{ marginBottom: "15px" }}>
    <label>
      💜 メンバー
    </label>

    <select
      value={member}
      onChange={(e) =>
        setMember(e.target.value)
      }
      style={{
        width: "100%",
        padding: "12px",
        marginTop: "5px",
        borderRadius: "12px",
        border: "1px solid #ddd",
      }}
    >
      <option value="">
        メンバーを選択
      </option>

      <optgroup label="🌞 日向坂46">
        {hinataMembers.map((name) => (
          <option
            key={name}
            value={name}
          >
            {name}
          </option>
        ))}
      </optgroup>

      <optgroup label="🌸 櫻坂46">
        {sakuraMembers.map((name) => (
          <option
            key={name}
            value={name}
          >
            {name}
          </option>
        ))}
      </optgroup>
    </select>
  </div>

  <div style={{ marginBottom: "15px" }}>
    <label>
      🎪 イベント名
    </label>

    <input
      type="text"
      placeholder="全国ミーグリ"
      value={eventName}
      onChange={(e) =>
        setEventName(e.target.value)
      }
      style={{
        width: "100%",
        padding: "12px",
        marginTop: "5px",
        borderRadius: "12px",
        border: "1px solid #ddd",
        boxSizing: "border-box",
      }}
    />
  </div>

  <div
    style={{
      display: "flex",
      gap: "10px",
    }}
  >
    <div style={{ flex: 1 }}>
      <label>
        🕒 部数
      </label>

      <input
        type="number"
        value={part}
        onChange={(e) =>
          setPart(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "5px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          boxSizing: "border-box",
        }}
      />
    </div>

    <div style={{ flex: 1 }}>
      <label>
        🎫 枚数
      </label>

      <input
        type="number"
        value={tickets}
        onChange={(e) =>
          setTickets(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "5px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          boxSizing: "border-box",
        }}
      />
    </div>
  </div>
</div>

<hr />

<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  }}
>
  <button
    onClick={() => setPage("home")}

    onMouseEnter={(e) => {
  e.currentTarget.style.transform =
    "translateY(-2px)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    "translateY(0)";
}}

    style={{
      flex: 1,
      padding: "14px",
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "14px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow:
        "0 2px 10px rgba(0,0,0,0.05)",
    }}
  >
    🏠 トップへ戻る

     </button>



  <button
    onClick={() => setInputStep(2)}

onMouseEnter={(e) => {
  e.currentTarget.style.transform =
    "translateY(-2px)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    "translateY(0)";
}}

    style={{
      flex: 2,
      padding: "14px",
      background: "#8B5CF6",
      color: "#fff",
      border: "none",
      borderRadius: "14px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow:
        "0 4px 15px rgba(139,92,246,0.3)",
    }}
  >
    次へ →

  </button>
</div>
</>
  );
}

export default Step1BasicInfo;