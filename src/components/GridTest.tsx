import React from "react";
import './GridTest.scss'

const GridTest = () => {
  return (
    <section>
        <div className="grid-test">
            <div className="row">
                <div className="col-1-of-2">1 of 2</div>
                <div className="col-1-of-2">2 of 2</div>
            </div>

            <div className="row">
                <div className="col-1-of-3">1 of 2</div>
                <div className="col-1-of-3">2 of 3</div>
                <div className="col-1-of-3">3 of 3</div>
            </div>

            <div className="row">
                <div className="col-1-of-3">1 of 3</div>
                <div className="col-2-of-3">2 of 3</div>
            </div>

            <div className="row">
                <div className="col-1-of-4">1 of 4</div>
                <div className="col-1-of-4">2 of 4</div>
                <div className="col-1-of-4">3 of 4</div>
                <div className="col-1-of-4">4 of 4</div>
            </div>

            <div className="row">
                <div className="col-1-of-4">1 of 4</div>
                <div className="col-1-of-4">1 of 4</div>
                <div className="col-2-of-4">2 of 4</div>
            </div>

            <div className="row">
                <div className="col-1-of-4">1 of 2</div>
                <div className="col-3-of-4">2 of 2</div>
            </div>
        </div>
      
    </section>
  )
}

export default GridTest
