/** @format */
import "../../styles/styles.css";
const links = [
  "about",
  "skills",
  "experience",
  "education",
  "resume",
  "projects",
  // "blog",
  "testimonials",
  "contact",
];
/**
 * Renders the Links component based on the collapsed state and open function.
 *
 * @param {boolean} collapsed - Boolean variable indicating state of menu
 * @param {function} open - Function to toggle menu
 * @return {JSX.Element} The rendered Links component
 */
export const Links = ({ collapsed, open = () => {} }) => {
  return (
    <div className="navlinks-container">
      <nav id="nav-links">
        {collapsed ? (
          <ul>
            {links.map((item) => (
              <li key={item}>
                <a onClick={() => open(false)} href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.substring(1)}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          links.map((item) => (
            <a key={item} href={`#${item}`}>
              {item.charAt(0).toUpperCase() + item.substring(1)}
            </a>
          ))
        )}
      </nav>
    </div>
  );
};
