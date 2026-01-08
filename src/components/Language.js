import React from 'react';

function Language() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Language</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="experience-card">
              <div className="language-experience">
                <h3 className="h5">English <small>- C2</small></h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="experience-card">
              <div className="language-experience">
                <h3 className="h5">German <small>- B2</small></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;