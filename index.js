<html>
<head>
<title>Info</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand mr-0 mr-md-2" href="#">Bollinger Bands Simulator</a>
        
      </nav>
    
<nav class="navbar navbar-secondary bg-secondary" id="navbarTogglerDemo02">
    <ul class="nav nav-tabs nav-muted">
        <li class="nav-item">
            <a class="nav-link active" href="/info">How it works</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="/">Custom simulation</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="/tickers">Stock performance</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="/results">All results</a>
        </li>
        
    </ul>
</nav>

<div class = "col-12 col-md-10 py-md-5 pl-md-5">
<h1>How it Works</h1><br>
<h3>Bollinger Bands</h3>
    <img src="/static/images/demo_Boll.png" width = 100%>
<br><br>

    <p>
         Bollinger bands were created by John Bollinger as a way to track fast movements in stock prices using the average and standard deviation.
        The bands themselves are calculations of the average over a given period (EMA resolution) plus or minus the standard deviation modified by some multiplier (σ).
    </p>
    <p>
           The theory behind Bollinger Band trading strategies is that when a stock price drastically changes either high or low, it tends to pull back to the average elastically.
        The simplest version of this strategy is to buy stock when the price dips below the lower band, and sell when the price rises past the top band. 
    </p>
    <p>
        This website will uses a slightly more complicated version of this strategy. Our strategy marks when the price leaves the band (indicated in yellow on the graph above), then signals a buy or sell when it reenters as shown.
         Many variations on Bollinger band strategy have been suggested that make the strategy more effective and complicated, 
        and later versions of this website may incorporate more compliacated versions.
    </p>
    <p>
           Any short term trading strategy is inherently risky, and stock movements tend to be unpredictable. 
        This app was created primarily to show risk, and help users make informed decisions about stock trading. 
        This app is not intended to give financial advice, and I personally do not reccommend using simple Bollinger band trading as your primary trading strategy.
    </p><br>
<h3>User Inputs</h3><br>
<h5>Ticker Symbol</h5>
    <p>
           The ticker symbol is a company-specific code used by the NYSE to keep track of stock prices.
        For the purposes of this app, the symbol indicates which stock to run a simulation on. 
        Usually the symbol consists of a 2 to 4 letter designation (ex. Apple, inc. has the symbol 'AAPL'), but some can be longer or include other symbols. 
        This app may not support certain ticker symbols, and while it should continue to be updated, if a company has been removed from the NYSE or changes symbols, the app may not understand some inputs.
    </p>
<br>
<h5>EMA Resolution</h5>
    <p>
        This variable determines how many days are included in the calculations of the moving average and standard deviation. 
        The moving average is a calculated average that changes every day to include the current day's price and all prices counting back the length of the EMA resolution.
        If this is difficult to understand, the simple explanation is that the higher the resolution number, the smoother the Bollinger bands will be, and the more often the price will go outside of them.
    </p><br>
<h5>σ multiplier</h5>
    <p>
        σ, or standard deviation, is a measure of how different a group of numbers is from each other.
        Bollinger bands use this value to show a normal amount of travel in the stock price, so if the price travels outside, it is no longer within a normal deviation.
        The multiplier indicates how many standard deviations the Bollinger bands will be from the average.
        If this is difficult to understand, the simple explanation is that the higher the multiplier, the less the stock price will go outside the Bollinger bands.
    </p><br>
<h3>Results Chart</h3>
<img src="/static/images/demo_res.png" width = 80%>

<p>
    The results chart shows the aggregate results from simulations run by all users. 
    Each square on the chart represents the percentage return per year of that strategy, averaged over all instances run.
    When enough simulations are run that results become statistically significant, this chart will show which strategies perform best.
    Keep in mind when viewing this chart that the best result will be hilighted in green, whether or not the return is positive.
</p> <br>
<p>
    A similar version of this graph is available for individual stocks, which can be accessed through the "Stock Performance" tab. 
    This shows how the individual stock performs over the range of strategies.
    different stocks will have different responses to any given strategy, and showing how they perform individually can help you create a better image in your mind of how performance trends are created.

</p>
</div>

</body>


</html>
