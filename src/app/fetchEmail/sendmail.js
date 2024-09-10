export const mailUser = async (values) => {
  try {
    const responce = await fetch("/api/mail/user", {
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

export const mailAdmin = async (values) => {
  try {
    const responce = await fetch("/api/mail/admin", {
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




