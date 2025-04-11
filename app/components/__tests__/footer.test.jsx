import { render, screen } from '@testing-library/react'
import Footer from '../footer'

describe('Footer', () => {
    it('renders the copyright text with correct content', () => {
        render(<Footer />)
        const copyrightText = screen.getByText('© Developer Portfolio by')
        const nameLink = screen.getByText('Roman Grinevich')
        expect(copyrightText).toBeInTheDocument()
        expect(nameLink).toBeInTheDocument()
    })

    it('renders the LinkedIn link with correct URL', () => {
        render(<Footer />)
        const nameLink = screen.getByText('Roman Grinevich')
        expect(nameLink.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/roman-grinevich-03b13bab/')
    })
}) 