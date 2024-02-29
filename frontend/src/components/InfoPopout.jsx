import React, { useEffect } from "react";
import "./InfoPopout.css";

export default function InfoPopout(props,color,backgroundColor,borderColor,boxShadow) {
  const [keyPopout, setKeyPopout] = React.useState(Math.random());
  
  useEffect(() => {
    setKeyPopout(props.keyPopout);
  }, [props.keyPopout]);

  return (
    <div key={keyPopout} className="modal-content bg-black text-white p-2">
      <div className="modal-header">
        <h5 className="modal-title wkm-title font-righteous fs-1 " id={'info-popout-' + keyPopout} style={{color:color}}>
          WORKSHOP NAME
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body infopopoutBody border-0">
        <div className="container mt-2">
          <div className="d-flex flex-column">
            <div className="row mb-2">
              <p className="fs-6 font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas augue ex, accumsan in lectus id, pharetra tempor felis.
                Mauris eu purus dictum, varius metus ut, gravida libero. Aliquam
                et rutrum ante. In scelerisque nulla iaculis turpis interdum,
                quis suscipit turpis dapibus. 
              </p>
            </div>
            <div className="row mb-2">
              <div className="col-12">
                <div className="row mb-2">
                  <div className="border-bottom border-1 border-white p-0">
                    <h5 className="border border-bottom-0 rounded-top ps-3 pe-3 p-2 d-inline-block font-righteous m-0 wkm-section-header" style={{backgroundColor:backgroundColor,borderColor:borderColor}}>
                      WORKSHOP DETAILS
                    </h5>
                  </div>
                  <div className="d-flex row mt-3 mb-3">
                    <div className="col border-end border-2 border-white">
                      <h6 className="red-font text-center font-righteous">
                        <i class="bi bi-calendar3 fs-6 me-2"></i>DATE
                      </h6>
                      <h6 className="text-center font-poppins">DEC 19</h6>
                    </div>
                    <div className="col border-end border-2 border-white">
                      <h6 className="red-font text-center font-righteous">
                        <i class="bi bi-stopwatch fs-6 me-2"></i>DURATION
                      </h6>
                      <h6 className="text-center font-poppins">2 DAYS</h6>
                    </div>
                    <div className="col">
                      <h6 className="red-font text-center font-righteous">
                        <i class="bi bi-geo-alt-fill fs-6 me-2"></i>VENUE
                      </h6>
                      <h6 className="text-center font-poppins">IIT TIRUPATI</h6>
                    </div>
                    <div className="col d-none d-md-block">
                      <div className="border border-white rounded p-2 wkm-register" style={{borderColor:borderColor,boxShadow:boxShadow}}>
                        <h6 className="font-righteous text-center">REGISTRATION FEE</h6>
                        <h6 className="font-righteous text-center">RS. xxx</h6>
                      </div>
                    </div>
                    <div className="col mt-3 d-block d-md-none">
                      <div className="border border-white rounded p-2 wkm-register" style={{borderColor:borderColor,boxShadow:boxShadow}}>
                        <h6 className="font-righteous text-center">REGISTRATION FEE</h6>
                        <h6 className="font-righteous text-center">RS. xxx</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="border-bottom border-1 border-white p-0">
                    <h5 className="border border-bottom-0 rounded-top ps-3 pe-3 p-2 d-inline-block font-righteous m-0 wkm-section-header" style={{backgroundColor:backgroundColor,borderColor:borderColor}}>
                      CONTACT
                    </h5>
                  </div>
                  <div className="d-flex flex-row mt-3 mb-3">
                    <div className="col-md-4 col-6">
                      <h6 className="font-righteous">
                        <i class="bi bi-phone fs-4 me-2"></i>NAME
                      </h6>
                      <h6 className="font-poppins">+91 9874563210</h6>
                    </div>
                    <div className="col-md-4 col-6">
                      <h6 className="font-righteous">
                        <i class="bi bi-phone fs-4 me-2"></i>NAME
                      </h6>
                      <h6 className="font-poppins">+91 9874563210</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-center">
        <button type="button" className="btn btn-primary wkm-button font-righteous" style={{borderColor:borderColor}}>
          Register
        </button>
      </div>
    </div>
  );
}
