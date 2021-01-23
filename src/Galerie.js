import React, { Component } from "react";
import "./index.css";

export class Galerie extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='https://blog.hipper.com/fr/wp-content/uploads/sites/2/2018/01/le-langage-des-fleurs-1280x720.jpg'
                alt='...'
                className='img-thumbnail'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/4/9/0495a1f8b6_50145213_plantes-fleurs-age.jpg'
                alt='...'
                className='img-thumbnail'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='https://beautecherie.com/wp-content/uploads/2019/05/Olga-Max.jpg'
                alt='...'
                className='img-thumbnail'
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='https://www.bioalaune.com/img/article/38128-15-plus-belles-fleurs-dhiver-reperees-sur-pinterest.png'
                alt='...'
                className='img-thumbnail'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/a/a/6aa4b8b167_57256_050214-screen-fleur8-1610-diapo.jpg'
                alt='...'
                className='img-thumbnail'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img
                src='https://www.jardiner-malin.fr/wp-content/uploads/2020/05/fleur-a-bulbe-rouge.jpg'
                alt='...'
                className='img-thumbnail'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Galerie;
