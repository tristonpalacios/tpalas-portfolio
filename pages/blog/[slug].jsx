import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button.jsx'
import { Card, Navbar } from 'react-bootstrap'
import GalleryNbar from '../../components/comicGalleryNav.jsx'
import Nav from "react-bootstrap/Nav";


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
  
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }))
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
      slug + '.mdx'), 'utf-8')
  
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
  
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      }
    }
  }

  const PostPage = ({ frontMatter: { title }, mdxSource }) => {
    return (
      <Card className='BlogCard'>
      
      <Navbar className="nav" bg="none" expand="lg" id="myNavbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid" id="myNavItem">
            <Nav.Link className="text-underline-hover" href="/blog" id="myNavItem">Back</Nav.Link>
           
            

            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
      
      <div className="mt-4">
        <h1>{title}</h1>
        <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
      </div>

      </Card>
    )
  }

export default PostPage