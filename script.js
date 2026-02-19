* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  font-family: 'Segoe UI', sans-serif;
}

.card {
  width: 320px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  text-align: center;
  color: white;
  box-shadow: 0 0 40px rgba(0,255,255,0.25);
  transition: 0.4s;
}

h1 {
  margin-bottom: 10px;
  letter-spacing: 2px;
}

#status {
  margin: 20px 0;
  font-size: 18px;
}

/* Button */
button {
  width: 160px;
  height: 55px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  color: white;
}

/* OFF State */
.off {
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  box-shadow: 0 0 25px rgba(255, 75, 43, 0.9);
}

/* ON State */
.on {
  background: linear-gradient(135deg, #00ff99, #00ccff);
  box-shadow: 0 0 30px rgba(0, 255, 200, 1);
}

/* Glow animation */
.on:hover {
  box-shadow: 0 0 50px rgba(0, 255, 200, 1);
}

.off:hover {
  box-shadow: 0 0 50px rgba(255, 75, 43, 1);
}
