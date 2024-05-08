// import React from 'react';

// function FooterAdmin() {
//   return (
//     <div>
//       <footer className="bg-body-tertiary text-center text-lg-start">
//         {/* Copyright */}
//         <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
//           © 2024 Copyright:
//           <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//         </div>
//         {/* Copyright */}
//       </footer>
//     </div>
//   );
// }

// export default FooterAdmin;

import React from 'react';

function FooterAdmin() {
  return (
    <div>
      {/* Footer */}
      <footer className="footer py-3 border-top border-light-subtle">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="py-3">
                Built by <a href="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">BootstrapBrain</a> with <span className="text-accent">&#9829;</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterAdmin;
