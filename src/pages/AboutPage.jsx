import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h2>About this app</h2>
        <p>
          This is an application to set / edit / delete tasks. It uses local
          storage to save them within the current browser.
        </p>
        <b>Version: 1.5</b>
        <p>
          <Link to="/">Home page</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
