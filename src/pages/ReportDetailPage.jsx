function ReportDetailPage({
  report,
  reports,
  setPage,
  editReport,
  deleteReport,
}) {
  if (!report) {
    return (
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <p>レポが見つかりません。</p>

        <button
          onClick={() => setPage("reports")}
        >
          ← 一覧へ戻る
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#f8f9ff 0%,#f3e8ff 100%)",
      }}
    >
      <button
        onClick={() => setPage("reports")}
        style={{
          marginBottom: "20px",
          background: "#fff",
          border: "none",
          padding: "10px 16px",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow:
            "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        ← 一覧へ戻る
      </button>

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
            {report.date}
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#8B5CF6",
              marginBottom: "10px",
            }}
          >
            💜 {report.member}
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
            🎪 {report.eventName}
            {" | "}
            {report.part}部
            {" | "}
            🎫 {report.tickets}枚
          </div>
        </div>

        {report.messages?.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.speaker === "自分"
                  ? "flex-end"
                  : "flex-start",
              marginBottom: "15px",
            }}
          >
            <div>
              {msg.speaker === "メンバー" && (
                <div
  style={{
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#666",
    paddingLeft: "5px",
    textAlign: "left",
    width: "100%",
  }}
>
  {report.member}
</div>
              )}

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

                  border:
                    msg.speaker === "自分"
                      ? "none"
                      : "1px solid #ddd",

                  padding: "12px 18px",

                  borderRadius: "20px",

                  maxWidth: "300px",

                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.05)",

                  lineHeight: "1.7",

                  textAlign: "left"
                }}
              >
                {msg.type === "image" ? (
                  <img
                    src={msg.image}
                    alt=""
                    style={{
                      maxWidth: "220px",
                      borderRadius: "12px",
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
            color: "#999",
            marginTop: "25px",
          }}
        >
          {report.ending}
        </div>

        <hr
          style={{
            margin: "25px 0",
          }}
        />

        <button
          onClick={() => {
            const index =
              reports.findIndex(
                (r) => r === report
              );

            editReport(report, index);

            setPage("input");
          }}
          style={{
            width: "100%",
            padding: "12px",
            background: "#8B5CF6",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          ✏️ 編集
        </button>

        <button
          onClick={() => {
            const index =
              reports.findIndex(
                (r) => r === report
              );

            if (
              window.confirm(
                "このレポを削除しますか？"
              )
            ) {
              deleteReport(index);
              setPage("reports");
            }
          }}
          style={{
            width: "100%",
            padding: "12px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          🗑️ 削除
        </button>
      </div>
    </div>
  );
}

export default ReportDetailPage;