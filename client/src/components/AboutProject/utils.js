export const QAs = (Div, Anchor) => {
  return [
    {
      Question:
        'Why do I see multiple extra components, like Login, Register, and etc., which are not required for this project?',
      Answer: (
        <Div>
          This project consists of multiple reusable components, which are not 100% related to the
          Pokemon assignment. The reason why you see them is that I use a lot of these reusable
          components and endpoints to initiate a scalable from scratch project as quickly as
          possible
        </Div>
      )
    },
    {
      Question: 'Where can I have access to the code of this project?',
      Answer: (
        <Div>
          In order to view all files and folders relevant to this project,{' '}
          <Anchor to="https://github.com/mmmohajer/pokemon" internal={false}>
            click here
          </Anchor>
        </Div>
      )
    },
    {
      Question: 'Where can I see the specific front-end components related to this project?',
      Answer: (
        <Div>
          There are two main components to build the front-end of this project:
          <Div>
            <Anchor
              to="https://github.com/mmmohajer/pokemon/tree/master/client/src/components/Pokemon"
              internal={false}>
              Pokemon
            </Anchor>
          </Div>
          <Div>
            <Anchor
              to="https://github.com/mmmohajer/pokemon/tree/master/client/src/components/SavedPokemons"
              internal={false}>
              SavedPokemons
            </Anchor>
          </Div>
          <Div>
            Also, in order to see the code for homepage of this application,{' '}
            <Anchor
              to="https://github.com/mmmohajer/pokemon/blob/master/client/src/pages/index.js"
              internal={false}>
              click here
            </Anchor>
          </Div>
        </Div>
      )
    },
    {
      Question: 'Where can I see the specific api code related to this project?',
      Answer: (
        <Div>
          In order to view all files and folders specifically designed for the backend of this
          project,{' '}
          <Anchor to="https://github.com/mmmohajer/pokemon/tree/master/api/app" internal={false}>
            click here
          </Anchor>
        </Div>
      )
    },
    {
      Question: 'Why are you using Next.js instead of React Js?',
      Answer: (
        <Div>
          Next JS is a framework that holds React on its base, it is also much more SEO friendly.
          Actually, Next.js is the production ready platform for react applications.
        </Div>
      )
    },
    {
      Question: 'What is the best way to contact you?',
      Answer: (
        <Div>
          You can reach out by sending an email to{' '}
          <span className="f-b">mmmohajer70@gmail.com</span> or calling me by{' '}
          <span className="f-b">2269770855</span>
        </Div>
      )
    }
  ];
};
