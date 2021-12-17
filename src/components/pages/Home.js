import React from 'react';
import me from './assets/headshot-edgar.jpeg'
import {Image} from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <h1>About Me Page</h1>
      <Image src= {me} thumbnail style={{maxHeight:"10rem"}}/>
      <p>
      Hi, my name is Edgar. I'm from Chicago. I graduated from American
            University. I hope to improve my diverse professional experience with new
            skills in web development. I am currently enrolled in the Northwestern
            Bootcamp. I am excited to build new projects! This portfolio was built with React!
      </p>
    </div>
  );
}
