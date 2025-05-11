  <script type='text/javascript'>

//<![CDATA[
const teamLogos = {
  "Arsenal": "https://images.fotmob.com/image_resources/logo/teamlogo/9825_small.png",
  "Aston Villa": "https://images.fotmob.com/image_resources/logo/teamlogo/10252_small.png",
  "Bournemouth": "https://images.fotmob.com/image_resources/logo/teamlogo/10211_small.png",
  "Brentford": "https://images.fotmob.com/image_resources/logo/teamlogo/10203_small.png",
  "Brighton": "https://images.fotmob.com/image_resources/logo/teamlogo/10204_small.png",
  "Burnley": "https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png",
  "Chelsea": "https://images.fotmob.com/image_resources/logo/teamlogo/8455_small.png",
  "Crystal Palace": "https://images.fotmob.com/image_resources/logo/teamlogo/9826_small.png",
  "Everton": "https://images.fotmob.com/image_resources/logo/teamlogo/8654_small.png",
  "Fulham": "https://images.fotmob.com/image_resources/logo/teamlogo/9879_small.png",
  "Liverpool": "https://images.fotmob.com/image_resources/logo/teamlogo/8650_small.png",
  "Luton": "https://images.fotmob.com/image_resources/logo/teamlogo/8198_small.png",
  "Manchester City": "https://images.fotmob.com/image_resources/logo/teamlogo/8456_small.png",
  "Manchester United": "https://images.fotmob.com/image_resources/logo/teamlogo/10260_small.png",
  "Newcastle": "https://images.fotmob.com/image_resources/logo/teamlogo/10261_small.png",
  "Nottingham Forest": "https://images.fotmob.com/image_resources/logo/teamlogo/8653_small.png",
  "Sheffield United": "https://images.fotmob.com/image_resources/logo/teamlogo/10210_small.png",
  "Tottenham": "https://images.fotmob.com/image_resources/logo/teamlogo/8586_small.png",
  "West Ham": "https://images.fotmob.com/image_resources/logo/teamlogo/8655_small.png",
  "Wolves": "https://images.fotmob.com/image_resources/logo/teamlogo/10269_small.png",

  "Alaves": "https://images.fotmob.com/image_resources/logo/teamlogo/8192_small.png",
  "Almeria": "https://images.fotmob.com/image_resources/logo/teamlogo/8193_small.png",
  "Athletic Club": "https://images.fotmob.com/image_resources/logo/teamlogo/8651_small.png",
  "Atletico Madrid": "https://images.fotmob.com/image_resources/logo/teamlogo/8637_small.png",
  "Barcelona": "https://images.fotmob.com/image_resources/logo/teamlogo/8634_small.png",
  "Cadiz": "https://images.fotmob.com/image_resources/logo/teamlogo/8196_small.png",
  "Celta Vigo": "https://images.fotmob.com/image_resources/logo/teamlogo/8635_small.png",
  "Getafe": "https://images.fotmob.com/image_resources/logo/teamlogo/8652_small.png",
  "Girona": "https://images.fotmob.com/image_resources/logo/teamlogo/10057_small.png",
  "Granada": "https://images.fotmob.com/image_resources/logo/teamlogo/8657_small.png",
  "Las Palmas": "https://images.fotmob.com/image_resources/logo/teamlogo/8194_small.png",
  "Mallorca": "https://images.fotmob.com/image_resources/logo/teamlogo/8658_small.png",
  "Osasuna": "https://images.fotmob.com/image_resources/logo/teamlogo/8636_small.png",
  "Rayo Vallecano": "https://images.fotmob.com/image_resources/logo/teamlogo/8641_small.png",
  "Real Betis": "https://images.fotmob.com/image_resources/logo/teamlogo/8692_small.png",
  "Real Madrid": "https://images.fotmob.com/image_resources/logo/teamlogo/8633_small.png",
  "Real Sociedad": "https://images.fotmob.com/image_resources/logo/teamlogo/8640_small.png",
  "Sevilla": "https://images.fotmob.com/image_resources/logo/teamlogo/8639_small.png",
  "Valencia": "https://images.fotmob.com/image_resources/logo/teamlogo/8604_small.png",
  "Villarreal": "https://images.fotmob.com/image_resources/logo/teamlogo/8603_small.png",

  "AC Milan": "https://images.fotmob.com/image_resources/logo/teamlogo/8686_small.png",
  "Atalanta": "https://images.fotmob.com/image_resources/logo/teamlogo/8687_small.png",
  "Bologna": "https://images.fotmob.com/image_resources/logo/teamlogo/8688_small.png",
  "Cagliari": "https://images.fotmob.com/image_resources/logo/teamlogo/8704_small.png",
  "Empoli": "https://images.fotmob.com/image_resources/logo/teamlogo/8703_small.png",
  "Fiorentina": "https://images.fotmob.com/image_resources/logo/teamlogo/8690_small.png",
  "Frosinone": "https://images.fotmob.com/image_resources/logo/teamlogo/8706_small.png",
  "Genoa": "https://images.fotmob.com/image_resources/logo/teamlogo/8689_small.png",
  "Hellas Verona": "https://images.fotmob.com/image_resources/logo/teamlogo/8705_small.png",
  "Inter Milan": "https://images.fotmob.com/image_resources/logo/teamlogo/8697_small.png",
  "Juventus": "https://images.fotmob.com/image_resources/logo/teamlogo/9885_small.png",
  "Lazio": "https://images.fotmob.com/image_resources/logo/teamlogo/9873_small.png",
  "Lecce": "https://images.fotmob.com/image_resources/logo/teamlogo/8702_small.png",
  "Monza": "https://images.fotmob.com/image_resources/logo/teamlogo/10306_small.png",
  "Napoli": "https://images.fotmob.com/image_resources/logo/teamlogo/9876_small.png",
  "Roma": "https://images.fotmob.com/image_resources/logo/teamlogo/9870_small.png",
  "Salernitana": "https://images.fotmob.com/image_resources/logo/teamlogo/8696_small.png",
  "Sassuolo": "https://images.fotmob.com/image_resources/logo/teamlogo/8691_small.png",
  "Torino": "https://images.fotmob.com/image_resources/logo/teamlogo/9894_small.png",
  "Udinese": "https://images.fotmob.com/image_resources/logo/teamlogo/9877_small.png",

  "Augsburg": "https://images.fotmob.com/image_resources/logo/teamlogo/9797_small.png",
  "Bayer Leverkusen": "https://images.fotmob.com/image_resources/logo/teamlogo/9798_small.png",
  "Bayern Munich": "https://images.fotmob.com/image_resources/logo/teamlogo/9823_small.png",
  "Bochum": "https://images.fotmob.com/image_resources/logo/teamlogo/9799_small.png",
  "Borussia Dortmund": "https://images.fotmob.com/image_resources/logo/teamlogo/9789_small.png",
  "Borussia Monchengladbach": "https://images.fotmob.com/image_resources/logo/teamlogo/9790_small.png",
  "Darmstadt": "https://images.fotmob.com/image_resources/logo/teamlogo/9837_small.png",
  "Eintracht Frankfurt": "https://images.fotmob.com/image_resources/logo/teamlogo/9802_small.png",
  "Freiburg": "https://images.fotmob.com/image_resources/logo/teamlogo/9795_small.png",
  "Heidenheim": "https://images.fotmob.com/image_resources/logo/teamlogo/10338_small.png",
  "Hoffenheim": "https://images.fotmob.com/image_resources/logo/teamlogo/9796_small.png",
  "Mainz": "https://images.fotmob.com/image_resources/logo/teamlogo/9833_small.png",
  "RB Leipzig": "https://images.fotmob.com/image_resources/logo/teamlogo/10017_small.png",
  "Union Berlin": "https://images.fotmob.com/image_resources/logo/teamlogo/10347_small.png",
  "Werder Bremen": "https://images.fotmob.com/image_resources/logo/teamlogo/9824_small.png",
  "Wolfsburg": "https://images.fotmob.com/image_resources/logo/teamlogo/9830_small.png",
  "Koln": "https://images.fotmob.com/image_resources/logo/teamlogo/9831_small.png",
  "Stuttgart": "https://images.fotmob.com/image_resources/logo/teamlogo/9827_small.png",
  "Hamburg": "https://images.fotmob.com/image_resources/logo/teamlogo/9822_small.png",
  "Hansa Rostock": "https://images.fotmob.com/image_resources/logo/teamlogo/9805_small.png",

  "Brest": "https://images.fotmob.com/image_resources/logo/teamlogo/5926_small.png",
  "Clermont Foot": "https://images.fotmob.com/image_resources/logo/teamlogo/5981_small.png",
  "Havre AC": "https://images.fotmob.com/image_resources/logo/teamlogo/5915_small.png",
  "Lens": "https://images.fotmob.com/image_resources/logo/teamlogo/5916_small.png",
  "Lille": "https://images.fotmob.com/image_resources/logo/teamlogo/5920_small.png",
  "Lorient": "https://images.fotmob.com/image_resources/logo/teamlogo/5924_small.png",
  "Lyon": "https://images.fotmob.com/image_resources/logo/teamlogo/5947_small.png",
  "Marseille": "https://images.fotmob.com/image_resources/logo/teamlogo/5985_small.png",
  "Metz": "https://images.fotmob.com/image_resources/logo/teamlogo/5943_small.png",
  "Monaco": "https://images.fotmob.com/image_resources/logo/teamlogo/5919_small.png",
  "Montpellier": "https://images.fotmob.com/image_resources/logo/teamlogo/5944_small.png",
  "Nantes": "https://images.fotmob.com/image_resources/logo/teamlogo/5946_small.png",
  "Nice": "https://images.fotmob.com/image_resources/logo/teamlogo/5942_small.png",
  "Paris FC": "https://images.fotmob.com/image_resources/logo/teamlogo/5922_small.png",
  "PSG": "https://images.fotmob.com/image_resources/logo/teamlogo/5917_small.png",
  "Reims": "https://images.fotmob.com/image_resources/logo/teamlogo/5982_small.png",
  "Rennes": "https://images.fotmob.com/image_resources/logo/teamlogo/5987_small.png",
  "Strasbourg": "https://images.fotmob.com/image_resources/logo/teamlogo/5950_small.png",
  "Toulouse": "https://images.fotmob.com/image_resources/logo/teamlogo/5953_small.png",
  "Ajaccio": "https://images.fotmob.com/image_resources/logo/teamlogo/5914_small.png"
};


const matches=window.matchData||[];
function formatLocalTime(e){return new Date(e).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})}
function createMatchCard(e,t){return`
<div class="containermatch" onclick="location.href='${e.url}'">
  <div class="play-icon">&#9658;</div>
  <div class="match-section">
    <div class="team">
      <div class="matchlogo">
        <img src="${teamLogos[e.team1]||'https://via.placeholder.com/70'}" alt="${e.team1}">
      </div>
      <div class="matchname">${e.team1}</div>
    </div>
    <div class="team">
      <div class="matchTime">
        <div class="localtime">${formatLocalTime(e.start)}</div>
        <div class="countdown" id="countdown-${t}" data-start="${e.start}" data-end="${e.end}">Loading...</div>
      </div>
    </div>
    <div class="team">
      <div class="matchlogo">
        <img src="${teamLogos[e.team2]||'https://via.placeholder.com/70'}" alt="${e.team2}">
      </div>
      <div class="matchname">${e.team2}</div>
    </div>
  </div>
  <div class="info">
    <ul>
      <li>Vicecaptain</li>
      <li><b></b></li>
      <li>Total Sports</li>
    </ul>
  </div>
</div>`}
document.getElementById("matches").innerHTML=matches.map((e,t)=>createMatchCard(e,t)).join("");
function startIndividualCountdown(e){const t=Date.parse(e.dataset.start),n=Date.parse(e.dataset.end);function a(){const a=Date.now(),c=t-a,d=n-a;c<=0&&d>0?e.innerHTML="Match is <span class='live-badge'>LIVE</span>":c>0?c<=18e5?e.innerHTML="<span class='soon-badge'>Starting Soon</span>":e.innerHTML=`${Math.floor(c/36e5)}h ${Math.floor(c%36e5/6e4)}m ${Math.floor(c%6e4/1e3)}s`:e.innerHTML="Full-time"}a(),setInterval(a,1e3+300*Math.random())}
document.querySelectorAll(".countdown").forEach(startIndividualCountdown);
//]]>
</script>