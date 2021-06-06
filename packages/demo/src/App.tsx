import React from "react";

import {
  Container,
  Footer,
  Header,
  InfoCard,
  Navbar,
  PageGrid,
  PageTitle,
  Pagination,
  PostsList,
  PostsSection,
  SidePanel,
} from "@mxkvl/nocturnal-ui-react";

import "@mxkvl/nocturnal-ui-react/lib/nocturnal-ui.css";

function App() {
  const posts = [
    {
      id: "1",
      title: "First post",
      date: "2021-06-06",
      excerpt: "Aliqua cupidatat sit non anim.",
      tags: [
        {
          name: "tag1",
          link: "/tags/tag1",
        },
      ],
      link: "/post/first-post",
      imgSrc:
        "https://mxkvl.com/static/17a5c5fc2ba0cac43f48f04849e3a7d5/f3583/configuring-typescript-options-rootdir-outdir-module-target.png",
    },
  ];

  return (
    <div className="App">
      <Header
        logoTitle="Example"
        navItems={[
          {
            path: "/",
            name: "Home",
          },
        ]}
      />
      <div>
        <Container>
          <PageTitle>Home</PageTitle>
          <PageGrid direction="reverse">
            <PostsSection>
              <PostsList posts={posts} gridView="row" />
              <Pagination
                routePath="/posts/page"
                currentPage={1}
                pagesCount={10}
              />
            </PostsSection>
            <SidePanel position="left">
              <InfoCard variant="colorful">
                <h4 className="monospace">Block 1</h4>
                <p>
                  Qui nisi culpa aliqua aliquip dolore deserunt adipisicing
                  tempor. Reprehenderit irure nostrud nulla ipsum tempor ullamco
                  qui adipisicing ad irure irure veniam. Commodo irure dolor non
                  aliquip amet veniam irure dolor. Sunt ipsum incididunt
                  excepteur occaecat est aliqua minim dolore consequat dolor.
                </p>
              </InfoCard>
              <InfoCard>
                <h4 className="monospace">Block 2</h4>
                <p>
                  Qui nisi culpa aliqua aliquip dolore deserunt adipisicing
                  tempor. Reprehenderit irure nostrud nulla ipsum tempor ullamco
                  qui adipisicing ad irure irure veniam. Commodo irure dolor non
                  aliquip amet veniam irure dolor. Sunt ipsum incididunt
                  excepteur occaecat est aliqua minim dolore consequat dolor.
                </p>
              </InfoCard>
            </SidePanel>
          </PageGrid>
        </Container>
      </div>
      <Footer>
        <section className="copyright">@ mxkvl 2021</section>
        <Navbar
          items={[
            {
              name: "Home",
              path: "/",
            },
          ]}
        />
      </Footer>
    </div>
  );
}

export default App;
