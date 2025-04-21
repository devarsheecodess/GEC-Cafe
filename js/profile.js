const userId = localStorage.getItem("userId");

fetch("http://localhost/gec-cafe/Backend/profile.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ userId }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("User Info:", data);

    // Extract name, year, department, id from data
    const name = data.name;
    let year;
    if (data.year === "1") {
      year = "FE";
    } else if (data.year === "2") {
      year = "SE";
    } else if (data.year === "3") {
      year = "TE";
    } else if (data.year === "4") {
      year = "BE";
    }
    const department = data.department.toUpperCase(); // e.g., Computer

    console.log("Name:", name);
    console.log("Year:", year);
    console.log("Department:", department);
    console.log("ID:", userId);

    // Format user ID as GEC{yy}{DEPT}{ID}
    const formattedId = `ID: GEC_${year}_${department}_${userId}`;

    console.log("Formatted ID:", formattedId);

    // Update HTML elements
    document.getElementById("user-name").textContent = name;
    document.getElementById("student-id").textContent = formattedId;
    document.getElementById("student-id").style.color = "gray";
  });
