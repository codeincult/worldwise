import styles from "./CountryItem.module.css";
import Emoji from "./Emoji";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <Emoji value={country.emoji} className="emoji--large" />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
