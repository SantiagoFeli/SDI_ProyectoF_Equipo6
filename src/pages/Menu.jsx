import './Menu.css';
import frozenDrink from './../assets/MenuFroozenDrinks.png';
import donuts from './../assets/MenuDonuts.png';
import breakfast from './../assets/MenuBreakfast.png';
import cocodBrew from './../assets/MenuCocoBrews.png';
import coffee from './../assets/MenuCoffee.png';
import promos from './../assets/MenuPromos.png';

const MenuItem = ({ image, label }) => (
  <div className="menu-item">
    <img src={image} alt={label} className="menu-image" />
    <div className="menu-label">{label}</div>
  </div>
);

const Menu = () => (
  <div className="menu-container">
    <h1 className="menu-title">Menu</h1>
    <div className="menu-grid">
      <MenuItem image={frozenDrink} label="Frozen Drinks" />
      <MenuItem image={donuts} label="Donuts" />
      <MenuItem image={breakfast} label="Breakfast" />
      <MenuItem image={cocodBrew} label="Cold Brews" />
      <MenuItem image={coffee} label="Coffee" />
      <MenuItem image={promos} label="Promos" />
    </div>
  </div>
);

export default Menu;
