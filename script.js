// Galaxy Background (Optimized for Mobile)

const canvas = document.getElementById("galaxy");
if (canvas) {
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 80; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
}

// Member Counter 5.8K

let count = 0;
let target = 5800;
let counter = setInterval(() => {
  count += 50;
  if (count >= target) {
    count = target;
    clearInterval(counter);
  }
  let display = (count / 1000).toFixed(1) + "K";
  let el = document.getElementById("memberCount");
  if (el) el.innerText = display;
}, 40);

// Neon Mode

function toggleNeon() {
  document.body.style.background =
    document.body.style.background === "black"
    ? "radial-gradient(circle, #001f3f, black)"
    : "black";
}

// Staff Roles

function showRole(role) {
  const info = document.getElementById("roleInfo");
  if (!info) return;

  if (role === "owner") {
    info.innerHTML = "Owner: Full control. Server management. Final authority.";
  }
  if (role === "admin") {
    info.innerHTML = "Admin: Ban members. Manage staff. Oversee trading safety.";
  }
  if (role === "mod") {
    info.innerHTML = "Moderator: Handle reports. Prevent scams. Maintain order.";
  }
}

// Ghost Spawn

function spawnGhost() {
  let ghost = document.createElement("div");
  ghost.className = "ghost";
  document.body.appendChild(ghost);
}
