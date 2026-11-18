
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Global Investor Intelligence</title>

<style>
*{box-sizing:border-box}
body{
 margin:0;background:#0b1220;color:#eaf0fa;
 font-family:Arial,sans-serif
}
header{
 padding:22px 16px;
 background:#14243a;
 border-bottom:2px solid #20c9a0
}
header h1{color:#40d9b2;margin:0;font-size:23px}
header p{color:#a4b5ca;font-size:12px}
nav{
 display:flex;gap:8px;overflow-x:auto;
 padding:12px;background:#101d30;
 position:sticky;top:0;z-index:10
}
nav a{
 color:#dce8f5;background:#263951;
 padding:11px;border-radius:7px;
 text-decoration:none;font-size:12px;
 white-space:nowrap
}
main{max-width:1150px;margin:auto;padding:14px}
section{scroll-margin-top:75px;margin-bottom:25px}
h2{color:#40d9b2;font-size:20px}
h3{font-size:15px}
.grid{
 display:grid;
 grid-template-columns:repeat(2,1fr);
 gap:10px
}
.card,.stat{
 background:#17283e;
 border:1px solid #30445e;
 border-radius:11px;
 padding:15px;
 margin-bottom:12px
}
.stat small,.muted{
 color:#a3b4c9;font-size:12px
}
.stat strong{
 display:block;font-size:19px;margin-top:10px;
 color:#42d6a4
}
.widget{
 width:100%;
 min-height:300px;
 overflow:hidden;
 border-radius:8px;
 background:#101d30
}
.widget iframe{width:100%;max-width:100%}
.btn{
 display:inline-block;
 background:#20bd99;color:#071b18;
 padding:12px 15px;border-radius:8px;
 text-decoration:none;font-size:13px;
 font-weight:bold;margin:5px 3px 5px 0
}
.secondary{
 background:#263d58;color:white
}
.info{
 padding:12px;background:#20344c;
 border-left:3px solid #20bd99;
 border-radius:6px;
 font-size:13px;line-height:1.7;
 margin:12px 0
}
footer{
 text-align:center;color:#879bb4;
 padding:25px;font-size:12px
}
@media(min-width:700px){
 .grid{grid-template-columns:repeat(4,1fr)}
}
</style>
</head>

<body>

<header>
<h1>GLOBAL INVESTOR</h1>
<p>INTELLIGENCE PLATFORM | VERSION 2.0</p>
<p>GLOBAL MARKETS • SRI LANKA • ECONOMY • INVESTMENT</p>
</header>

<nav>
<a href="#home">Overview</a>
<a href="#global">Global Markets</a>
<a href="#crypto">Crypto</a>
<a href="#forex">Forex</a>
<a href="#srilanka">Sri Lanka</a>
<a href="#economy">Economy</a>
<a href="#news">News</a>
<a href="#research">Research</a>
</nav>

<main>

<!-- HOME -->

<section id="home">
<h2>🌍 Global Intelligence Center</h2>

<div class="grid">
<div class="stat">
<small>Global Markets</small>
<strong>MONITOR</strong>
</div>
<div class="stat">
<small>Sri Lanka Market</small>
<strong>CSE CENTER</strong>
</div>
<div class="stat">
<small>Economic Research</small>
<strong>ACTIVE</strong>
</div>
<div class="stat">
<small>Investment Analysis</small>
<strong>WORKSPACE</strong>
</div>
</div>

<div class="card">
<h3>Global Market Ticker</h3>
<div id="ticker" class="widget"></div>
</div>
</section>

<!-- GLOBAL MARKETS -->

<section id="global">
<h2>📈 Global Financial Markets</h2>

<div class="card">
<h3>Global Market Overview</h3>
<div id="market" class="widget"></div>
</div>

<div class="card">
<h3>World Stock Market</h3>
<div id="stocks" class="widget"></div>
</div>

<div class="card">
<h3>Advanced Market Chart</h3>
<div id="chart" class="widget"></div>
</div>
</section>

<!-- CRYPTO -->

<section id="crypto">
<h2>₿ Cryptocurrency Intelligence</h2>

<div class="card">
<h3>Crypto Market Heatmap</h3>
<div id="cryptomap" class="widget"></div>
</div>

<div class="card">
<h3>Bitcoin Market Chart</h3>
<div id="btc" class="widget"></div>
</div>
</section>

<!-- FOREX -->

<section id="forex">
<h2>💱 Global Currency Markets</h2>

<div class="card">
<h3>Forex Market Chart</h3>
<div id="forexchart" class="widget"></div>
</div>

<div class="card">
<h3>USD / LKR Currency Chart</h3>
<div id="lkrchart" class="widget"></div>
<p class="muted">
If the selected symbol is unavailable, use the official CBSL exchange-rate source below.
</p>
<a class="btn" href="https://www.cbsl.gov.lk/en/rates-and-indicators/exchange-rates"
target="_blank">CBSL Exchange Rates</a>
</div>
</section>

<!-- SRI LANKA -->

<section id="srilanka">
<h2>🇱🇰 Sri Lanka Investment Center</h2>

<div class="info">
Dedicated research center for the Sri Lankan economy,
Colombo Stock Exchange and local investment opportunities.
</div>

<div class="grid">
<div class="stat">
<small>Stock Exchange</small>
<strong>CSE</strong>
</div>
<div class="stat">
<small>Main Index</small>
<strong>ASPI</strong>
</div>
<div class="stat">
<small>Second Index</small>
<strong>S&P SL20</strong>
</div>
<div class="stat">
<small>Currency</small>
<strong>LKR</strong>
</div>
</div>

<div class="card">
<h3>Colombo Stock Exchange</h3>
<p class="muted">
Access official market information, listed companies,
share prices and announcements.
</p>
<a class="btn" href="https://www.cse.lk/"
target="_blank">Visit CSE Official Website</a>
</div>

<div class="card">
<h3>ASPI - All Share Price Index</h3>
<p class="muted">
Sri Lanka's broad market index.
View the official index value and historical information.
</p>
<a class="btn" href="https://www.cse.lk/"
target="_blank">View ASPI at CSE</a>
</div>

<div class="card">
<h3>S&P Sri Lanka 20</h3>
<p class="muted">
Monitor the performance of the selected leading
companies in the Sri Lankan equity market.
</p>
<a class="btn" href="https://www.cse.lk/"
target="_blank">View S&P SL20 at CSE</a>
</div>

<div class="card">
<h3>Sri Lankan Listed Companies</h3>
<p class="muted">
Research listed companies, financial reports,
market announcements and corporate information.
</p>
<a class="btn" href="https://www.cse.lk/"
target="_blank">Company Information</a>
</div>

<div class="card">
<h3>Central Bank of Sri Lanka</h3>
<p class="muted">
Official macroeconomic and monetary information.
</p>
<a class="btn" href="https://www.cbsl.gov.lk/"
target="_blank">Visit CBSL</a>
</div>

<div class="card">
<h3>USD / LKR Exchange Rates</h3>
<p class="muted">
Official indicative and TT exchange rates.
</p>
<a class="btn" href="https://www.cbsl.gov.lk/en/rates-and-indicators/exchange-rates"
target="_blank">Exchange Rate Data</a>
</div>

<div class="card">
<h3>Inflation & Price Indicators</h3>
<p class="muted">
Consumer Price Index, CCPI, NCPI and inflation data.
</p>
<a class="btn" href="https://www.cbsl.gov.lk/en/rates-and-indicators"
target="_blank">Economic Indicators</a>
</div>

<div class="card">
<h3>Interest Rates & Monetary Policy</h3>
<p class="muted">
Overnight Policy Rate, market interest rates
and monetary policy announcements.
</p>
<a class="btn" href="https://www.cbsl.gov.lk/en/monetary-policy"
target="_blank">Monetary Policy</a>
</div>

<div class="card">
<h3>Treasury Bills & Government Bonds</h3>
<p class="muted">
Government securities, yields and related
market information.
</p>
<a class="btn" href="https://www.cbsl.gov.lk/"
target="_blank">CBSL Government Securities</a>
</div>

<div class="card">
<h3>Sri Lanka Economic Reports</h3>
<p class="muted">
Economic developments, foreign reserves,
external sector and financial stability.
</p>
<a class="btn" href="https://www.cbsl.gov.lk/en/publications"
target="_blank">Official Publications</a>
</div>

<div class="info">
Important: CSE and CBSL links lead to official sources.
This version does not yet automatically import CSE
prices or CBSL statistics into the dashboard.
A verified data connection and backend are required
for that functionality.
</div>

</section>

<!-- ECONOMY -->

<section id="economy">
<h2>🏦 Global Economic Intelligence</h2>

<div class="card">
<h3>Economic Calendar</h3>
<div id="calendar" class="widget"></div>
</div>

<div class="card">
<h3>Global Economic Research Sources</h3>
<a class="btn" href="https://www.imf.org/"
target="_blank">IMF</a>
<a class="btn secondary" href="https://www.worldbank.org/"
target="_blank">World Bank</a>
<a class="btn secondary" href="https://www.oecd.org/"
target="_blank">OECD</a>
</div>
</section>

<!-- NEWS -->

<section id="news">
<h2>📰 Global Financial News</h2>

<div class="card">
<h3>Market News</h3>
<div id="newsfeed" class="widget"></div>
</div>

<div class="card">
<h3>Sri Lankan Financial News Sources</h3>
<a class="btn" href="https://www.cse.lk/"
target="_blank">CSE Announcements</a>
<a class="btn secondary" href="https://www.cbsl.gov.lk/"
target="_blank">CBSL News</a>
</div>
</section>

<!-- RESEARCH -->

<section id="research">
<h2>🤖 Investment Research Workspace</h2>

<div class="card">
<h3>Research Questions</h3>

<p class="muted">
Prepare your investment research questions.
AI analysis requires a separate secure AI connection.
</p>

<textarea id="question" rows="4"
style="width:100%;background:#0b1728;color:white;padding:12px"
placeholder="Example: Analyse Sri Lanka's economy and investment opportunities..."></textarea>

<button class="btn" onclick="prepareResearch()">
Prepare Research
</button>

<div id="result" class="info"></div>
</div>

<div class="card">
<h3>Investment Risk Monitor</h3>
<p class="muted">
Market Risk<br>
Currency Risk<br>
Interest Rate Risk<br>
Inflation Risk<br>
Political and Geopolitical Risk<br>
Liquidity Risk
</p>
</div>

</section>

</main>

<footer>
GLOBAL INVESTOR INTELLIGENCE PLATFORM<br>
GLOBAL + SRI LANKA INVESTMENT CENTER<br>
VERSION 2.0 | 2026
</footer>

<script>

// TradingView widget loader

function addWidget(id,file,config,height){

 const root=document.getElementById(id);

 const box=document.createElement("div");
 box.style.width="100%";
 box.style.height=height+"px";

 const script=document.createElement("script");

 script.src=
 "https://s3.tradingview.com/external-embedding/embed-widget-"+
 file+".js";

 script.async=true;
 script.innerHTML=JSON.stringify(config);

 box.appendChild(script);
 root.appendChild(box);
}

const dark={
 colorTheme:"dark",
 isTransparent:true,
 locale:"en"
};

// Global ticker

addWidget("ticker","ticker-tape",{
 ...dark,
 symbols:[
 {proName:"FOREXCOM:SPXUSD",title:"S&P 500"},
 {proName:"FOREXCOM:NSXUSD",title:"NASDAQ"},
 {proName:"FOREXCOM:DJI",title:"DOW JONES"},
 {proName:"FX:EURUSD",title:"EUR/USD"},
 {proName:"FX:GBPUSD",title:"GBP/USD"},
 {proName:"BITSTAMP:BTCUSD",title:"BITCOIN"},
 {proName:"BITSTAMP:ETHUSD",title:"ETHEREUM"},
 {proName:"OANDA:XAUUSD",title:"GOLD"},
 {proName:"TVC:USOIL",title:"OIL"}
 ],
 showSymbolLogo:true,
 displayMode:"adaptive"
},100);

// Market overview

addWidget("market","market-overview",{
 ...dark,
 dateRange:"12M",
 showChart:true,
 width:"100%",
 height:"550",
 showSymbolLogo:true,
 tabs:[
 {
 title:"Indices",
 symbols:[
 {s:"FOREXCOM:SPXUSD",d:"S&P 500"},
 {s:"FOREXCOM:NSXUSD",d:"NASDAQ"},
 {s:"FOREXCOM:DJI",d:"DOW JONES"},
 {s:"INDEX:NKY",d:"NIKKEI"},
 {s:"INDEX:DEU40",d:"DAX"}
 ]
 },
 {
 title:"Forex",
 symbols:[
 {s:"FX:EURUSD",d:"EUR/USD"},
 {s:"FX:GBPUSD",d:"GBP/USD"},
 {s:"FX:USDJPY",d:"USD/JPY"}
 ]
 },
 {
 title:"Commodities",
 symbols:[
 {s:"OANDA:XAUUSD",d:"Gold"},
 {s:"TVC:USOIL",d:"Crude Oil"}
 ]
 }
 ]
},550);

// Stock market

addWidget("stocks","stock-heatmap",{
 ...dark,
 dataSource:"SPX500",
 blockSize:"market_cap_basic",
 blockColor:"change",
 grouping:"sector",
 locale:"en"
},450);

// Main chart

addWidget("chart","advanced-chart",{
 ...dark,
 symbol:"NASDAQ:AAPL",
 interval:"D",
 timezone:"Etc/UTC",
 style:"1",
 withdateranges:true,
 allow_symbol_change:true,
 hide_side_toolbar:false,
 save_image:false,
 support_host:"https://www.tradingview.com"
},500);

// Crypto

addWidget("cryptomap","crypto-coins-heatmap",{
 ...dark,
 dataSource:"Crypto",
 blockSize:"market_cap_calc",
 blockColor:"change",
 locale:"en"
},400);

addWidget("btc","advanced-chart",{
 ...dark,
 symbol:"BITSTAMP:BTCUSD",
 interval:"D",
 timezone:"Etc/UTC",
 style:"1",
 withdateranges:true,
 allow_symbol_change:true,
 save_image:false,
 support_host:"https://www.tradingview.com"
},450);

// Forex

addWidget("forexchart","advanced-chart",{
 ...dark,
 symbol:"FX:EURUSD",
 interval:"D",
 timezone:"Etc/UTC",
 style:"1",
 withdateranges:true,
 allow_symbol_change:true,
 save_image:false,
 support_host:"https://www.tradingview.com"
},450);

// USD LKR - availability depends on provider

addWidget("lkrchart","advanced-chart",{
 ...dark,
 symbol:"FX_IDC:USDLKR",
 interval:"D",
 timezone:"Etc/UTC",
 style:"1",
 withdateranges:true,
 allow_symbol_change:true,
 save_image:false,
 support_host:"https://www.tradingview.com"
},400);

// Economic calendar

addWidget("calendar","economic-calendar",{
 ...dark,
 width:"100%",
 height:"550",
 importanceFilter:"0,1",
 currencyFilter:"USD,EUR,GBP,JPY,CNY"
},550);

// News

addWidget("newsfeed","timeline",{
 ...dark,
 feedMode:"all_market",
 isTransparent:true,
 displayMode:"regular",
 width:"100%",
 height:"550"
},550);

// Research workspace

function prepareResearch(){

 const q=document.getElementById("question").value.trim();

 const result=document.getElementById("result");

 if(!q){
 result.textContent="Please enter your research question.";
 return;
 }

 result.textContent=
 "Research question saved in this page: "+q+
 ". AI connection is not configured yet.";
}

</script>

</body>
</html>
