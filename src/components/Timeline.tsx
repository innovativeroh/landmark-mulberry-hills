import React from 'react';

export default function Timeline() {
  return (
    <section className="section" style={{ backgroundColor: "#fafafa", padding: "160px 0", position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Watermark */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)', fontSize: '20vw', fontWeight: 900, color: 'rgba(0,0,0,0.02)', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0 }}>
        PROCESS
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .editorial-wrap {
          display: flex;
          flex-direction: column;
          gap: 160px;
          position: relative;
          z-index: 1;
        }
        .editorial-row {
          display: flex;
          align-items: center;
          gap: 0;
          position: relative;
        }
        .editorial-row.reverse {
          flex-direction: row-reverse;
        }
        .editorial-img-container {
          flex: 0 0 55%;
          position: relative;
          overflow: hidden;
        }
        .editorial-img-container.portrait {
          flex: 0 0 45%;
        }
        .editorial-img {
          width: 100%;
          height: 100%;
          min-height: 500px;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .editorial-img-container.portrait .editorial-img {
          min-height: 700px;
        }
        .editorial-img-container:hover .editorial-img {
          transform: scale(1.05);
        }
        .editorial-content-box {
          flex: 1;
          background: #ffffff;
          padding: 60px;
          position: relative;
          margin-left: -100px;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .editorial-row.reverse .editorial-content-box {
          margin-left: 0;
          margin-right: -100px;
        }
        .editorial-content-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .editorial-number-bg {
          position: absolute;
          top: -40px;
          right: 20px;
          font-size: 8rem;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.06);
          line-height: 1;
          pointer-events: none;
          z-index: -1;
        }
        .editorial-row.reverse .editorial-number-bg {
          right: auto;
          left: 20px;
        }
        .editorial-title {
          font-size: 2.5rem;
          color: #1a1a1a;
          margin-bottom: 24px;
          font-weight: 600;
          position: relative;
        }
        .editorial-title::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 40px;
          height: 3px;
          background-color: #e2ff00;
        }
        .editorial-desc {
          font-size: 1.125rem;
          color: #555;
          line-height: 1.7;
          margin-top: 30px;
        }
        @media (max-width: 991px) {
          .editorial-wrap { gap: 80px; }
          .editorial-row, .editorial-row.reverse { flex-direction: column; }
          .editorial-img-container, .editorial-img-container.portrait { flex: none; width: 100%; }
          .editorial-img, .editorial-img-container.portrait .editorial-img { min-height: 300px; }
          .editorial-content-box, .editorial-row.reverse .editorial-content-box {
            margin: -40px 20px 0 20px;
            padding: 40px;
          }
        }
      `}} />

      <div className="container">
        <div className="hero-service-wrap" style={{ marginBottom: '120px', position: 'relative', zIndex: 1 }}>
          <div className="hero-service-title-box" style={{ maxWidth: '100%' }}>
            <h2 className="hero-service-title" style={{ textAlign: 'center', fontSize: '4rem', color: '#1a1a1a' }}>How Owning Your Plot Works</h2>
            <p style={{ textAlign: 'center', color: '#666', fontSize: '1.25rem', marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>A seamless, guided journey from your first site visit to owning your plot at Mulberry Hills.</p>
          </div>
        </div>
        
        <div className="editorial-wrap">
          
          {/* Step 1: Landscape */}
          <div className="editorial-row">
            <div className="editorial-img-container">
              <img src="/images/b8d5ad51-6261-4e51-a9e9-24c2ae8e2575.png" alt="Enquiry & Site Visit" className="editorial-img" loading="lazy" />
            </div>
            <div className="editorial-content-box">
              <div className="editorial-number-bg">01</div>
              <h3 className="editorial-title">Enquiry &amp; Site Visit</h3>
              <div className="editorial-desc">Reach out by phone or the enquiry form, and schedule a visit to see the Mulberry Hills layout and location firsthand.</div>
            </div>
          </div>

          {/* Step 2: Portrait */}
          <div className="editorial-row reverse">
            <div className="editorial-img-container portrait">
              <img src="/images/7696353e-45c7-4ccb-b8ad-6bab90dab678.png" alt="Plot Selection & Booking" className="editorial-img" loading="lazy" />
            </div>
            <div className="editorial-content-box">
              <div className="editorial-number-bg">02</div>
              <h3 className="editorial-title">Plot Selection &amp; Booking</h3>
              <div className="editorial-desc">Choose a plot from the master layout plan and complete booking formalities with the sales team, including token payment and agreement documentation.</div>
            </div>
          </div>

          {/* Step 3: Landscape */}
          <div className="editorial-row">
            <div className="editorial-img-container">
              <img src="/images/3e1ab70b-9574-477d-b726-431dd7182913.png" alt="Home Loan Assistance" className="editorial-img" loading="lazy" />
            </div>
            <div className="editorial-content-box">
              <div className="editorial-number-bg">03</div>
              <h3 className="editorial-title">Home Loan Assistance</h3>
              <div className="editorial-desc">Use the bank loan facilitation available at Mulberry Hills to help finance your purchase.</div>
            </div>
          </div>

          {/* Step 4: Portrait */}
          <div className="editorial-row reverse">
            <div className="editorial-img-container portrait">
              <img src="/images/26e2bae0-c69e-4a44-a4f4-7d360db01b4d.png" alt="Registration & Possession" className="editorial-img" loading="lazy" />
            </div>
            <div className="editorial-content-box">
              <div className="editorial-number-bg">04</div>
              <h3 className="editorial-title">Registration &amp; Possession</h3>
              <div className="editorial-desc">Proceed to registration with clear marketable title, DTCP approval and E-Khata in place, and take possession of your plot.</div>
            </div>
          </div>

          {/* Step 5: Landscape */}
          <div className="editorial-row">
            <div className="editorial-img-container">
              <img src="/images/63b9c01d-24ae-4c7b-a9d7-c795f7ea9c85.png" alt="Ownership & Beyond" className="editorial-img" loading="lazy" />
            </div>
            <div className="editorial-content-box">
              <div className="editorial-number-bg">05</div>
              <h3 className="editorial-title">Ownership &amp; Beyond</h3>
              <div className="editorial-desc">Your plot at Mulberry Hills is yours to build on or hold for the future. Takes good living to another level.</div>

              <div style={{ marginTop: '50px' }}>
                <a href="#contact" className="primary-button-link w-inline-block">
                  <div className="primary-button-shadow second"></div>
                  <div className="primary-button-text-box">
                    <div className="primary-button-text">Book a Site Visit</div>
                    <div className="primary-button-hover-text black">Book a Site Visit</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
