import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>
          Lakshit<span>.</span>
        </h2>

        <p>
          MERN Stack Developer • React Developer • Java Developer
        </p>

        <hr />

        <p>
          © {new Date().getFullYear()} Lakshit Choudhary.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;