import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const About = ({ name }) => {
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="https://{Annsysadm}.github.com">github</Link>
            </li>
            <li>
              <Link to="https://stackblitz.com/@Annsysadm">stackblitz</Link>
            </li>
          </ul>
        </nav>
        <Route path="https://stackblitz.com/@Annsysadm" />
        <Route path="https://{Annsysadm}.github.com"/>
      </div>
    </Router>
  )
};

// This is my first React app!

/*  <Route path="/" exact component='https://github.com/Annsysadm' />
        <Route path="https://github.com/Annsysadm" />
        <Route path="https://stackblitz.com/@Annsysadm" />*/

        // https://{Annsysadm}.github.com

        // <ul>
        //     <li>
        //       <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //       <Link to="/about">[About]</Link>
        //     </li>
        //     <li>
        //       <Link to="/movies/">Movies</Link>
        //     </li>
        //     <li>
        //       <Link to="/hello/">Hello</Link>
        //     </li>
        //   </ul>
        // </nav>

        // <Route path="/" exact component={Home} />
        // <Route path="/about/" component={About} />
        // <Route path="/movies/" component={Movies} />
        // <Route path="/hello/" component={Hello} />