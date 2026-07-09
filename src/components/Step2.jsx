function Step2({
  speaker,
  setSpeaker,
  message,
  setMessage,
  addMessage,
  editingMessageIndex,
  messages,
  editMessage,
  deleteMessage,
  ending,
  setEnding,
  addImage,
  setInputStep,
}) {
  return (
<>
<div
style={{
background: "#fff",
borderRadius: "24px",
padding: "20px",
boxShadow:
"0 4px 20px rgba(0,0,0,0.08)",
}}
>
<h2
style={{
marginTop: 0,
color: "#8B5CF6",
}}
>
💬 会話入力 </h2>


  <div
    style={{
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    }}
  >
    <button
      onClick={() =>
        setSpeaker("自分")
      }
      style={{
        flex: 1,
        padding: "12px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        background:
          speaker === "自分"
            ? "#8B5CF6"
            : "#eee",
        color:
          speaker === "自分"
            ? "#fff"
            : "#333",
      }}
    >
      🙋 自分
    </button>

    <button
      onClick={() =>
        setSpeaker("メンバー")
      }
      style={{
        flex: 1,
        padding: "12px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        background:
          speaker === "メンバー"
            ? "#EC4899"
            : "#eee",
        color:
          speaker === "メンバー"
            ? "#fff"
            : "#333",
      }}
    >
      💜 メンバー
    </button>
  </div>

  <div
    style={{
      background: "#f8f9ff",
      borderRadius: "16px",
      padding: "15px",
      marginBottom: "20px",
      maxHeight: "250px",
      overflowY: "auto",
    }}
  >
    {messages.length === 0 && (
      <p
        style={{
          color: "#999",
          textAlign: "center",
        }}
      >
        まだ会話はありません
      </p>
    )}

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
            background:
              msg.speaker === "自分"
                ? "#8B5CF6"
                : "#fff",
            color:
              msg.speaker === "自分"
                ? "#fff"
                : "#333",
            padding: "10px 15px",
            borderRadius: "18px",
            maxWidth: "250px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          {msg.type === "image" ? (
            <img
              src={msg.image}
              alt=""
              style={{
                maxWidth: "180px",
                borderRadius: "10px",
              }}
            />
          ) : (
            msg.text
          )}
        </div>
<div
        style={{
          marginTop: "5px",
          textAlign:
            msg.speaker === "自分"
              ? "right"
              : "left",
        }}
      >
        {msg.type !== "image" && (
          <>
            <button
              onClick={() =>
                editMessage(index)
              }
              style={{
                marginRight: "5px",
              }}
            >
              ✏️
            </button>
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
  </div>

  <textarea
    rows="3"
    value={message}
    onChange={(e) =>
      setMessage(e.target.value)
    }
    placeholder="会話内容を入力..."
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "12px",
      border: "1px solid #ddd",
      boxSizing: "border-box",
      marginBottom: "15px",
    }}
  />

  <div
    style={{
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    }}
  >
    <button
      onClick={addMessage}
      style={{
        flex: 1,
        padding: "12px",
        background: "#8B5CF6",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      {editingMessageIndex !== null
        ? "更新"
        : "➕ 発言追加"}
    </button>

    <input
      type="file"
      accept="image/*"
      onChange={addImage}
    />

</div>

<hr />

<div
  style={{
    textAlign: "center",
    marginTop: "25px",
  }}
>
  <div
    style={{
      color: "#888",
      fontSize: "14px",
      marginBottom: "8px",
    }}
  >
    🎬 終了方法
  </div>

  <select
    value={ending}
    onChange={(e) =>
      setEnding(e.target.value)
    }
    style={{
      padding: "10px 20px",
      borderRadius: "999px",
      border: "1px solid #ddd",
      background: "#fff",
    }}
  >
    <option>
      フェードアウト
    </option>

    <option>
      剥がし
    </option>
  </select>
</div>



<button
    onClick={() => setInputStep(1)}

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
    ← 戻る

  </button>

{" "}

<button
    onClick={() => setInputStep(3)}

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

export default Step2;