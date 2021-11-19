import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super Free Shipping on Orders min $30
        </Container>
    )
}

export default Announcement
