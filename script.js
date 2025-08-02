// Currency symbols + flags
const currencyList = {
  USD: "🇺🇸 USD",
  EUR: "🇪🇺 EUR",
  GBP: "🇬🇧 GBP",
  INR: "🇮🇳 INR",
  JPY: "🇯🇵 JPY",
  AUD: "🇦🇺 AUD",
  CAD: "🇨🇦 CAD"
};

const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

Object.keys(currencyList).forEach((code) => {
  const option1 = document.createElement("option");
  option1.value = code;
  option1.textContent = currencyList[code];
  fromSelect.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = code;
  option2.textContent = currencyList[code];
  toSelect.appendChild(option2);
});

fromSelect.value = "USD";
toSelect.value = "INR";

convertBtn.addEventListener("click", async () => {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = document.getElementById("amount").value;

  if (!amount || isNaN(amount)) {
    result.textContent = "❌ Please enter a valid amount!";
    return;
  }

  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await res.json();
    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    result.innerHTML = `<span style="font-size:1.2rem;">💹 ${amount} ${from} = <b>${converted} ${to}</b></span>`;
  } catch (error) {
    result.textContent = "⚠️ Conversion failed. Try again.";
  }
});

// Particles Background
tsParticles.load("tsparticles", {
  fullScreen: { enable: true },
  particles: {
    number: { value: 60 },
    color: { value: ["#00f2fe", "#4facfe", "#43e97b"] },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 2, max: 4 } },
    move: { enable: true, speed: 1.5 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  }
});
