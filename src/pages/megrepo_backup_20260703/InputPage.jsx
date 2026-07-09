import { useState } from "react";

function InputPage({
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
  saveReport,
  editingIndex,

}) {

const [inputStep, setInputStep] = useState(1);    

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

  <h1>📝 ミーグリレポ入力</h1>

<p>
  STEP {inputStep} / 4
</p>

{inputStep === 1 && (
  <>

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

{" "}

<button
  onClick={() => setInputStep(2)}
>
  次へ →
</button>

  </>
)}


{inputStep === 2 && (
  <>

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

<hr />

<button
  onClick={() => setInputStep(1)}
>
  ← 戻る
</button>

{" "}

<button
  onClick={() => setInputStep(3)}
>
  次へ →
</button>

</>
)}

{inputStep === 3 && (
  <>

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

<p>終了方法</p>

<select
  value={ending}
  onChange={(e) => setEnding(e.target.value)}
>
  <option>フェードアウト</option>
  <option>剥がし</option>
</select>



<hr />

<button
  onClick={() => setInputStep(2)}
>
  ← 戻る
</button>

{" "}

<button
  onClick={() => setInputStep(4)}
>
  次へ →
</button>

</>
)}



{inputStep === 4 && (
  <>

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

<button onClick={saveReport}>
  {editingIndex !== null
    ? "更新"
    : "保存"}
</button>
<br />

<button
  onClick={() => setInputStep(3)}
>
  ← 戻る
</button>

  </>
)}

</div>
  );
}

export default InputPage;