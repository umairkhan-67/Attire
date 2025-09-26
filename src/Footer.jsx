import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-black">
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">FOOTER CONTENT</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae modi cum ipsam ad, illo possimus laborum ut
                    reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                    Reiciendis assumenda iusto sapiente inventore animi?
                  </p>
                </div>

                {[...Array(3)].map((_, i) => (
                  <div key={i} className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled mb-0">
                      <li><a href="#!" className="text-black">Link 1</a></li>
                      <li><a href="#!" className="text-black">Link 2</a></li>
                      <li><a href="#!" className="text-black">Link 3</a></li>
                      <li><a href="#!" className="text-black">Link 4</a></li>
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <hr className="mb-4" />

           

         

            <section className="mb-4 text-center">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
            </section>
          </div>

          <div className="text-center p-3">
            © 2020 Copyright:
            <a className="text-black" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer