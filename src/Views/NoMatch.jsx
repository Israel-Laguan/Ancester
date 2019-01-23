import React from 'react'
import { Link } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";

const NoMatch = () => {
    return (
        <div style={{backgroundColor:'#555'}}>
            <br/>
            <Header as='h2' icon textAlign='center'>
                <Icon name='ban' />
                <Header.Content>no existe la pagina que busca, trate:</Header.Content>
            </Header>
            <Header as='h2' textAlign='center'>
                <Link to="/">
                    <Icon name='home' />
                <Header.Content>Inicio</Header.Content>
                </Link>
            </Header>

        </div>
    )
}

export default NoMatch
