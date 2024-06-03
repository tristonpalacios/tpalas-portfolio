import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Blog = ({ posts }) => {
  return (
    <div className="ComicBlog">
    <Navbar className="nav" bg="none" expand="lg" id="myNavbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid" id="myNavItem">
            <Nav.Link className="AgeNav" href="ageHome" id="myNavItem" style={{backgroundColor:'black'}}>Back To Dark Mode</Nav.Link> 
            <Nav.Link className="text-underline-hover" href="/" id="myNavItem">Back to Comic Mode</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
      <div className=" mx-auto">
        {posts.map((post, index) => (
          <Link href={"/blog/" + post.slug} passHref key={index}>
            <div className="card mb-3 ComicPosts pointer" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{post.frontMatter.title}</h5>
                    <p className="card-text">{post.frontMatter.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {post.frontMatter.date}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 m-auto">
                  <Image
                    src={post.frontMatter.thumbnailUrl}
                    className="img-fluid mt-1 rounded-start"
                    alt="thumbnail"
                    fluid
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
