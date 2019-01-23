import React from 'react'
import { Link, Route } from "react-router-dom";
import { Container, Grid, Image, Header,Modal } from 'semantic-ui-react'
import Jumbo from '../Assets/img/KnowUs/jumbo.svg'
import Daniel from '../Assets/img/KnowUs/daniel.png'
import Israel from '../Assets/img/KnowUs/israel.png'
import Honestidad from '../Assets/img/KnowUs/1honestidad.png'
import Compromiso from '../Assets/img/KnowUs/2compromiso.png'
import Pasion from '../Assets/img/KnowUs/3pasion.png'
import Resolucion from '../Assets/img/KnowUs/4resolucion.png'
import Equipo from '../Assets/img/KnowUs/5equipo.png'
import Integridad from '../Assets/img/KnowUs/6integridad.png'
import KnowDaniel from './KnowDaniel';
import KnowIsrael from './KnowIsrael';


const KnowUs = ({ match }) => {
  return (
    <Container fluid style={{
      marginTop: "-3em"
    }}>
      <Grid centered>
        <Grid.Column>
          <Image src={Jumbo} fluid />
        </Grid.Column>
      </Grid>
      <Header as='h3' textAlign='center'><u>El Equipo</u></Header>
      <Grid centered columns={2}>
        <Grid.Column width={6}>
          <Modal
            trigger={
              <Link as='div' to={`${match.url}/daniel`}>
                <Image src={Daniel} fluid />
              </Link>
            }
          >
            <Modal.Content >
            <Route path={`${match.path}/daniel`} render={() => { return <KnowDaniel/> }} />
            </Modal.Content>
          </Modal>
        </Grid.Column>
        <Grid.Column width={6}>
        <Modal
            trigger={
              <Link as='div' to={`${match.url}/israel`}>
                <Image src={Israel} fluid />
              </Link>
            }
          >
            <Modal.Content >
            <Route path={`${match.path}/israel`} render={() => { return <KnowIsrael/> }} />
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid>
      <Header as='h3' textAlign='center'><u>Nuestros Valores</u></Header>
      <Grid centered columns={3} >
        <Grid.Column>
          <Image src={Honestidad} />
        </Grid.Column>
        <Grid.Column>
          <Image src={Compromiso} />
        </Grid.Column>
        <Grid.Column>
          <Image src={Pasion} />
        </Grid.Column>
        <Grid.Column>
          <Image src={Resolucion} />
        </Grid.Column>
        <Grid.Column>
          <Image src={Equipo} />
        </Grid.Column>
        <Grid.Column>
          <Image src={Integridad} />
        </Grid.Column>
      </Grid>
      <Header as='h3' textAlign='center' style={{ marginBottom: '55px' }}><u>Nuestros Proyectos</u></Header>
      <br />
      <hr />
    </Container>
  )
}

export default KnowUs
