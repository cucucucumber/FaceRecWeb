import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/Images/ImageLinkForm';
import Particles from "react-tsparticles";
import Counter from './Components/Counter/Counter';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import './App.css';

const app = new Clarifai.App({
  apiKey: "32d42b82134d443f811e06d70159bef1"
})

const particleOptions = {
  fullScreen: {
    enable: true
  },
  fpsLimit: 60,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70
        },
        zIndex: {
          value: 5000
        }
      },
      z7500: {
        number: {
          value: 30
        },
        zIndex: {
          value: 75
        }
      },
      z2500: {
        number: {
          value: 50
        },
        zIndex: {
          value: 25
        }
      },
      z1000: {
        number: {
          value: 40
        },
        zIndex: {
          value: 10
        }
      }
    },
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#fff",
      animation: {
        enable: false,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: true,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      random: true,
      value: 3
    },
    links: {
      enable: false,
      distance: 100,
      color: "#F4D03F",
      opacity: 0.4,
      width: 1,
      blur: true,
      shadow: true
    },
    move: {
      angle: {
        value: 10,
        offset: 2
      },
      enable: true,
      speed: 3,
      direction: "right",
      random: false,
      straight: false,
      outModes: {
        default: "out"
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 1
        },
        radius: 30
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 200
      },
      push: {
        quantity: 4,
        groups: ["z5000", "z7500", "z2500", "z1000"]
      },
      remove: {
        quantity: 2
      },
      trail: {
        delay: 0.1,
        quantity: 1
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  emitters: {
    position: {
      y: 55,
      x: -30
    },
    rate: {
      delay: 7,
      quantity: 1
    },
    size: {
      width: 0,
      height: 0
    },
    particles: {
      shape: {
        type: "images",
        options: {
          images: [
            {
              src: "https://particles.js.org/images/amongus_blue.png",
              width: 205,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_cyan.png",
              width: 207,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_green.png",
              width: 204,
              height: 266
            },
            {
              src: "https://particles.js.org/images/amongus_lime.png",
              width: 206,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_orange.png",
              width: 205,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_pink.png",
              width: 205,
              height: 265
            },
            {
              src: "https://particles.js.org/images/amongus_red.png",
              width: 204,
              height: 267
            },
            {
              src: "https://particles.js.org/images/amongus_white.png",
              width: 205,
              height: 267
            }
          ]
        }
      },
      size: {
        value: 100
      },
      opacity:{
        value: 10
      },
      move: {
        speed: 7,
        outModes: {
          default: "destroy",
          left: "none"
        },
        straight: true
      },
      zIndex: {
        value: 0
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 10,
          sync: true
        }
      }
    }
  }
}

class App extends Component {

  constructor() {
        super();
        this.state = {
            input: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            url: '',
            box: {},
            age: '',
            wait:'idel'
        }
    }

  calculateFaceLoc = (region) => {
    const img = document.getElementById('inputimg');
    const width = Number(img.width);
    const height = Number(img.height);
    return {
      leftCol: region.left_col * width,
      rightCol: width - region.right_col * width,
      topRow: region.top_row * height,
      bottomRow: height - region.bottom_row * height
    }
  }

  displayBox = (box) => { 
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  getAge = (ages) => {
    var max = -1;
    var index = 0;
    for(var i = 0; i < 9; i++){
      if(ages[i].value > max){
        max = ages[i].value;
        index = i;
      }
    }
    this.setState({age: ages[index].name});
  }

  onButtonSubmit = (event) => {
    this.setState({url: this.state.input, wait: 'loading'});

    app.models
    .predict("a403429f2ddf4b49b307e318f00e528b",
             this.state.input)
    .then(response =>
        this.displayBox(
          this.calculateFaceLoc(
            response.outputs[0].data.regions[0].region_info.bounding_box
          )
        )
      )
    .catch(err => console.log(err));

    app.models
    .predict("36f90889189ad96c516d134bc713004d",
             this.state.input)
    .then(response =>
          this.getAge(
          response.outputs[0].data.concepts
        )
      )
    .catch(err => console.log(err));

    this.setState({wait: 'success'});
    }

  render(){
    return(
      <div className="App">
        <Particles
          id="tsparticles"
          className="particles"
          options={particleOptions}
        />
        <Navigation />
        <Counter />
        <ImageLinkForm 
        oninputchange={this.onInputChange} 
        onbuttonsubmit={this.onButtonSubmit}
        wait={this.wait}
        />
        <FaceRecognition url={this.state.url} box={this.state.box} age={this.state.age}/>
      </div>
    )
  }
}

export default App;
