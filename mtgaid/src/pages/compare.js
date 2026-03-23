import NavigationBar from '../components/navigationBar';
import ComparisonPage from '../components/compareCards';

function Compare() {
  return(
    <body class="bodyBG">
      <section>
    <h1 class="heading1">Compare 2 creature cards</h1>
  <div class="container-fluid row">
    <ComparisonPage />
  </div>
  </section>
      <NavigationBar />
    </body>
  )
}

export default Compare;

