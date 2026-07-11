import { useState } from "react";
import Step1BasicInfo from "../components/Step1BasicInfo";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";


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
  addImage,

}) {

const hinataMembers = [
  "金村美玖",
  "小坂菜緒",
  "上村ひなの",
  "髙橋未来虹",
  "森本茉莉",
  "山口陽世",
  "石塚瑶季",
  "小西夏菜実",
  "清水理央",
  "正源司陽子",
  "竹内希来里",
  "平尾帆夏",
  "平岡海月",
  "藤嶌果歩",
  "宮地すみれ",
  "山下葉留花",
  "渡辺莉奈",
  "大田美月",
  "大野愛実",
  "片山紗希",
  "蔵盛妃那乃",
  "坂井新奈",
  "佐藤優羽",
  "下田衣珠季",
  "高井俐香",
  "鶴崎仁香",
  "松尾桜",
];
  
const sakuraMembers = [
  "遠藤光莉",
  "大園玲",
  "大沼晶保",
  "幸阪茉里乃",
  "田村保乃",
  "藤吉夏鈴",
  "松田里奈",
  "森田ひかる",
  "守屋麗奈",
  "山﨑天",
  "石森璃花",
  "遠藤理子",
  "小田倉麗奈",
  "小島凪紗",
  "谷口愛季",
  "中嶋優月",
  "的野美青",
  "向井純葉",
  "村井優",
  "村山美羽",
  "山下瞳月",
  "浅井恋乃未",
  "稲熊ひな",
  "勝又春",
  "佐藤愛桜",
  "中川智尋",
  "松本和子",
  "目黒陽色",
  "山川宇衣",
  "山田桃実",
];

const [inputStep, setInputStep] = useState(1);    

  return (
    <div
  style={{
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  }}
>


  <h1>📝 ミーグリレポ入力</h1>

  <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "25px",
  }}
>
  {[1, 2, 3].map((step) => (
    <div
      key={step}
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        background:
          inputStep >= step
            ? "#8B5CF6"
            : "#ddd",
      }}
    />
  ))}
</div>


<p>
  STEP {inputStep} / 3
</p>

{inputStep === 1 && (
  <Step1BasicInfo
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
    setInputStep={setInputStep}
    hinataMembers={hinataMembers}
    sakuraMembers={sakuraMembers}
  />
)}

{inputStep === 2 && (
  <Step2
    speaker={speaker}
    setSpeaker={setSpeaker}
    message={message}
    setMessage={setMessage}
    messages={messages}
    addMessage={addMessage}
    editMessage={editMessage}
    deleteMessage={deleteMessage}
    editingMessageIndex={editingMessageIndex}
    addImage={addImage}
    ending={ending}
    setEnding={setEnding}
    setInputStep={setInputStep}
    member={member}
  />
)}

{inputStep === 3 && (
  <Step3
    date={date}
    member={member}
    eventName={eventName}
    part={part}
    tickets={tickets}
    messages={messages}
    ending={ending}
    saveReport={saveReport}
    editingIndex={editingIndex}
    setInputStep={setInputStep}
  />
)}

</div>
  );
}

export default InputPage;