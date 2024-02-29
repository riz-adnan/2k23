import React from "react";
import "./WorkshopMono.css";

export default function WorkshopMono() {
  return (
    <div className="container mt-2">
      <div className="d-flex flex-column p-1">
        <div className="row mb-2 d-none d-md-block">
          <div className="col-12 col-md-7">
            <h3 className="border border-2 rounded-2 d-inline-block p-1 wkm-workshop">
              WORKSHOP
            </h3>
            <div className="p-1">
              <h1 className="mb-2 fs-lg">Workshop Title</h1>
              <div className="mt-3">
                <button className="btn btn-outline-dark me-3 fs-5 wkm-button">
                  Register
                </button>
                <button className="btn btn-outline-dark fs-5 wkm-buttom">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <img
              className="rounded shadow-lg wkm-image"
              src="https://images.unsplash.com/photo-1559424452-eeb3a13ffe2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Disco"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="row mb-2 d-block d-md-none">
          <div className="col-12 ">
            <h3 className="border border-2 rounded-2 d-inline-block p-1 wkm-section-header">
              WORKSHOP
            </h3>
            <div className="p-1">
              <img
                className="rounded shadow-lg"
                src="https://images.unsplash.com/photo-1559424452-eeb3a13ffe2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Disco"
                width="100%"
                height="100%"
              />
            </div>
            <div className="p-1">
              <h1 className="mb-2 fs-lg">Workshop Title</h1>
              <div className="mt-3">
                <button className="btn btn-outline-dark me-3 fs-5">
                  Register
                </button>
                <button className="btn btn-outline-dark fs-5">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="border-bottom border-1 border-dark p-0">
            <h3 className="border border-bottom-0 rounded-top p-1 d-inline-block m-0 wkm-section-header">
              About
            </h3>
          </div>
          <p className="fs-5 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            augue ex, accumsan in lectus id, pharetra tempor felis. Mauris eu
            purus dictum, varius metus ut, gravida libero. Aliquam et rutrum
            ante. In scelerisque nulla iaculis turpis interdum, quis suscipit
            turpis dapibus. Nam molestie lectus nunc, a convallis augue commodo
            ut. Vivamus fringilla libero nec elit tempus hendrerit. Fusce
            aliquet efficitur venenatis. Vivamus sit amet tellus ac augue
            pretium condimentum. Ut et metus vitae enim elementum mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec lorem risus, ullamcorper vel interdum et,
            tempus luctus turpis. Fusce elementum arcu et imperdiet venenatis.
          </p>
        </div>
        <div className="row mb-2">
          <div className="col-md-8 col-12">
            <div className="row mb-2">
              <div className="border-bottom border-1 border-dark p-0">
                <h3 className="border border-bottom-0 rounded-top p-1 d-inline-block m-0 wkm-section-header">
                  Workshop Details
                </h3>
              </div>
              <div className="d-flex flex-row mt-3 mb-3">
                <div className="col border-end border-2 border-dark">
                  <h4 className="text-center fw-bold">
                    <i class="bi bi-calendar3 fs-4 me-2"></i>DATE
                  </h4>
                  <h5 className="text-center">DEC 19</h5>
                </div>
                <div className="col border-end border-2 border-dark">
                  <h4 className="text-center fw-bold">
                    <i class="bi bi-stopwatch fs-4 me-2"></i>DURATION
                  </h4>
                  <h5 className="text-center">2 DAYS</h5>
                </div>
                <div className="col">
                  <h4 className="text-center fw-bold">
                    <i class="bi bi-geo-alt-fill fs-4 me-2"></i>VENUE
                  </h4>
                  <h5 className="text-center">IIT TIRUPATI</h5>
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="border-bottom border-1 border-dark p-0">
                <h3 className="border border-bottom-0 rounded-top p-1 d-inline-block m-0 wkm-section-header">
                  Contacts
                </h3>
              </div>
              <div className="d-flex flex-row mt-3 mb-3 align-items-start">
                <div className="col-md-3 col-6">
                  <h4 className="fw-bold">
                    <i class="bi bi-phone fs-4 me-2"></i>NAME
                  </h4>
                  <h5>+91 9874563210</h5>
                </div>
                <div className="col-md-3 col-6">
                  <h4 className="fw-bold">
                    <i class="bi bi-phone fs-4 me-2"></i>NAME
                  </h4>
                  <h5>+91 9874563210</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="col p-2 mt-5 m-3 border border-2 border-dark shadow">
              <h3 className="fw-bold">REGISTRATION FEE</h3>
              <h3 className="fw-bold">RS. xxx</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
