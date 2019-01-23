import React from 'react'
import { Image, Header, Grid} from "semantic-ui-react";
import Asesoramos from '../Assets/img/Services/asesoramos.png'
import Patrocinate from '../Assets/img/Services/patrocinate.png'
import Creamos from '../Assets/img/Services/creamos.png'

const Services = () => {
    return (
        <div>
            <hr/>
            <Header as='h3' textAlign='center'><u>SERVICIOS</u></Header>
            <Grid columns={3} relaxed doubling>
                <Grid.Column>
                    <Image src={Asesoramos} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={Patrocinate} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={Creamos} />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Services
