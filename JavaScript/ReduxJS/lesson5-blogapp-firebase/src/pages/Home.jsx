import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'

const Home = () => {
    const newsdata = useSelector(p => p);
    return (
        <Container>
            <h1 className='text-center my-5'>News</h1>
            <Row className='g-3'>
                {newsdata.length === 0 ? <h1 className='text-center'>No news</h1> : newsdata.map(item => (

                    <SingleCard
                        key={item.id}
                        title={item.title}
                        auther={item.auther}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default Home