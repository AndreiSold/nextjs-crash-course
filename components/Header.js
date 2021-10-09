import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Crash course</span>
      </h1>
      <p className={headerStyles.description}>Universal header</p>
    </div>
  );
};

export default Header;
