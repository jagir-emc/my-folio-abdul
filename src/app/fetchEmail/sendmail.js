const sendMail = async (values) => {
  try {
    const responce = await fetch("/api/mailData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!responce.ok) {
      throw new Error("Network Responce was not ok");
    }
    const data = await responce.json();
  } catch (error) {
    console.error("Error sending email:" + error.message);
  }
};

export default sendMail;
