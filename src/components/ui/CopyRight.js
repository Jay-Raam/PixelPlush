import React from 'react';
import "./copy.css"

const CopyrightPage = () => {
  return (
    <div className=' copy-container'>
      <p>© {new Date().getFullYear()} Jayasriraam. All Rights Reserved.</p>
      <p>Thank's to unsplash api.</p>
       <p>For inquiries, please contact: <a href="mailto:jayasriraam.jobgamil.com">jayasriraam.jobgamil.com 😉</a></p>
    </div>
  );
}

export default CopyrightPage;
