import Card from './card.jsx';
import './card.css';
function App() {
  return (
    <>
    <h1>Trending Products</h1>
    <div className="main">
      <Card title="Laptop" idx={0} />
      <Card title="Mobile" idx={1} />
      <Card title="Tablet" idx={2} />
      <Card title="Fitbit" idx={3} />
    </div>
    </>
  );
}
export default App;