import React from 'react'
import {Container, Logo, Search, Button} from './styled'

const Header = () => {
    
    return (
        <Container>
            <Logo>
                Logo
            </Logo>
            <Search
                placeholder = 'Search'
                type = 'search'
            />
            <div>
            <Button>
                Login
            </Button>
            <Button>
                SingUp
            </Button>
            </div>
        </Container>
    )
}

export default Header