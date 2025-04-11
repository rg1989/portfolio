import { render, screen } from '@testing-library/react'
import Navbar from '../navbar'

describe('Navbar', () => {
    it('renders the title with correct text', () => {
        render(<Navbar />)
        const titleElement = screen.getByText('Roman Grinevich')
        expect(titleElement).toBeInTheDocument()
    })

    it('renders all navigation links', () => {
        render(<Navbar />)
        const links = ['ABOUT', 'EXPERIENCE', 'SKILLS', 'EDUCATION']
        links.forEach(link => {
            const linkElement = screen.getByText(link)
            expect(linkElement).toBeInTheDocument()
        })
    })

    it('has correct navigation links', () => {
        render(<Navbar />)
        const aboutLink = screen.getByText('ABOUT')
        const experienceLink = screen.getByText('EXPERIENCE')
        const skillsLink = screen.getByText('SKILLS')
        const educationLink = screen.getByText('EDUCATION')

        expect(aboutLink.closest('a')).toHaveAttribute('href', '/#about')
        expect(experienceLink.closest('a')).toHaveAttribute('href', '/#experience')
        expect(skillsLink.closest('a')).toHaveAttribute('href', '/#skills')
        expect(educationLink.closest('a')).toHaveAttribute('href', '/#education')
    })
}) 