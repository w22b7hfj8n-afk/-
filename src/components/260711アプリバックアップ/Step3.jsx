import { useRef } from "react";
import html2canvas from "html2canvas";

function Step3({
  date,
  member,
  eventName,
  part,
  tickets,
  messages,
  ending,
  saveReport,
  editingIndex,
  setInputStep,
}) {

const previewRef = useRef(null);

const saveImage = async () => {
  const canvas = await html2canvas(previewRef.current);

  const link = document.createElement("a");
  link.download = `${member}_${date}.png`;
  link.href = canvas.toDataURL();
  link.click();
};


  return (
    <>

<h2>📸 投稿用プレビュー</h2>

<div
  ref={previewRef}
  style={{
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  }}
>
  <div
  style={{
    textAlign: "center",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      fontSize: "14px",
      color: "#888",
      marginBottom: "10px",
    }}
  >
    {date}
  </div>

  <div
    style={{
      fontSize: "24px",
      fontWeight: "bold",
      color: "#8B5CF6",
      marginBottom: "10px",
    }}
  >
    💜 {member}
  </div>

  <div
    style={{
      background: "#f3e8ff",
      display: "inline-block",
      padding: "8px 16px",
      borderRadius: "999px",
      fontSize: "14px",
    }}
  >
    🎪 {eventName}
    {" "}
    |{" "}
    {part}部
    {" "}
    |{" "}
    🎫 {tickets}枚
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
            fontSize: "16px",
lineHeight: "1.7",
boxShadow:
  "0 2px 10px rgba(0,0,0,0.05)",
textAlign: "left",
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
    <div
  style={{
    textAlign: "center",
    marginTop: "40px",
  }}
>
  <div
    style={{
      color: "#bbb",
      fontSize: "16px",
      marginBottom: "10px",
    }}
  >
    {ending}
  </div>

  <div
    style={{
      fontSize: "6px",
      color: "#999",
      letterSpacing: "1px",
    }}
  >
    Created with MegRepo
  </div>
</div>
  </div>
</div>
<hr />


<br />

<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  }}
>

<button
  onClick={() => setInputStep(2)}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
  style={{
    flex: 1,
    padding: "14px",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  }}
>
  ← 戻る
</button>


<button
  onClick={saveImage}
  style={{
    flex: 1,
    padding: "14px",
    background: "#10B981",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  📸 画像保存
</button>


<button
    onClick={saveReport}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
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
      boxShadow: "0 4px 15px rgba(139,92,246,0.3)",
    }}
  >
    💾 {editingIndex !== null ? "更新する" : "保存する"}
  </button>
</div>
    </>
  );
}

export default Step3;