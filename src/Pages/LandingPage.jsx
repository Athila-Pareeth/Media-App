import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
    <Container>
    <Row className='p-5'>
        <Col className='p-5'>
        <h1 className='my-3'>Media Player</h1>
        <p className='my-2'style={{textAlign:'justify'}}> Media Player is a software application or device that plays audio and video files, supporting various formats and offering playback controls like play, pause, and volume adjustment. It can be used on desktops, mobile devices, or embedded  in websites, and often supports streaming content from the internet.. It supports various file formats, including popular ones like MP3, WAV, MP4, AVI, and more. Media players typically provide essential playback controls, such as play, pause, stop, fast forward, rewind, and volume adjustment, enabling users to manage their listening or viewing experience effectively.These applications can be used on multiple platforms, including desktops, laptops, smartphones, and tablets. Many media players also offer the capability to stream content directly from the internet, allowing users to access a vast library of music, podcasts, movies, and videos without needing to download files. Additionally, some media players come with features like playlist creation, equalizers for sound enhancement, and subtitles for videos, making them versatile tools for enjoying multimedia content.</p>
        <div className='mt-3'>
          <Link to={'/home'}>
          <Button>Get Started</Button>
          </Link>
          
        </div>
        </Col>
        <Col className='p-5'>
        <img src="https://i.gifer.com/GYMH.gif" alt="gif"  />
        </Col>
      </Row>


       <Row className='p-5 text-center'>
       <h1 className='text-center'>Features</h1>
        <Col className='p-5'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/04/39/04/04390480a47fd53214311db4eed77f71.gif" width={'100%'} height={'300px'}  />
      <Card.Body>
        <Card.Title>Immersive Audio Visualizer
        </Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        Experience your music visually! Our app comes with dynamic visualizations that sync with your audio for an immersive and engaging playback experience.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col className='p-5'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title>Adaptive Sound Equalizer
        </Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        Fine-tune your audio with an advanced equalizer. Customize bass, treble, and other sound parameters to suit your unique taste and listening environment.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col className='p-5' >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ciphrd.com/wp-content/uploads/2019/08/bad-example-1-1.gif" width={'100%'} height={'300px'}  />
      <Card.Body>
        <Card.Title>Vibrant Spectrum Effects
        </Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
        Watch your sound come to life with vibrant spectrum effects. Our app transforms every note into a visual spectacle, enhancing the music-listening experience.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

       </Row>

       <Row className='m-5 p-5 border shadow rounded'>
      
        <Col>
        <h1 className='text-center fs-4' >Simple fast and Powerful</h1>
        <p><span className='fs-5' style={{textAlign:'justify'}}>Play Everything : </span>Enjoy seamless playback of all your favorite audio and video formats in one app. From MP3s to HD movies, our player supports it all, delivering quality and versatility at your fingertips.</p>
        <p><span className='fs-5'style={{textAlign:'justify'}}>Seamless Experience : </span>Switch between media files effortlessly and experience smooth transitions without interruptions. With optimized performance, enjoy media playback like never before.</p>
        <p><span className='fs-5'style={{textAlign:'justify'}}>Crystal Clear Quality : </span>Whether you're watching in HD, 4K, or listening to lossless audio, experience media in the highest quality. Every frame, every note—delivered as intended.</p>
        <p><span className='fs-5'style={{textAlign:'justify'}}>Personalized Playlists : </span>Create and manage playlists tailored to your mood or occasion. With intuitive controls, organizing and playing your media has never been easier.</p>
        </Col>
        <Col className='py-5 mt-3'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=7ld28I_f-jTzG-Fw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
       </Row>
    </Container>
    </>
  )
}

export default LandingPage