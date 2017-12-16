﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.doc();
  b.clear(b.doc());

  b.units(b.MM); // use millimeter
  b.noStroke();

  b.rectMode(b.CORNER); // Please note that only b.CORNER positioning is fully supported for moving around items

  b.fill(255, 0, 0); // red
  b.pushMatrix();
  // b.translate(50, 50);
  // b.scale(0.5, 1);
  b.rotate(b.radians(35));
  b.rect(50, 25, 30, 10);
  b.popMatrix();

  b.fill(0); // black
  b.pushMatrix();
  // b.translate(50, 50);
  // b.scale(0.5, 1);
  b.rotate(b.radians(35));
  b.rect(50, 36, 30, 10);
  b.popMatrix();

  b.rectMode( b.CORNER );
  b.pushMatrix();
  b.translate(50, 50);
  b.rotate(b.radians(35));
  // b.scale(0.5, 1);
  b.rect(50, 25, 30, 10);
  b.popMatrix();

  b.rectMode( b.CENTER );
  b.pushMatrix();
  b.translate(50, 50);
  b.rotate(b.radians(35));
  // b.scale(0.5, 1);
  b.rect(65, 30, 30, 10);
  b.popMatrix();

  b.rectMode( b.CORNERS );
  b.pushMatrix();
  b.translate(50, 50);
  b.rotate(b.radians(35));
  // b.scale(0.5, 1);
  b.rect(50, 25, 80, 35);
  b.popMatrix();


	b.pushMatrix();
  b.rotate(b.radians(20));
  b.scale(2);
  b.ellipse(50, 0, 10, 30);
  b.ellipse(70, 0, 10, 30);
  b.ellipse(90, 0, 10, 30);
  b.popMatrix();




}

b.go();

