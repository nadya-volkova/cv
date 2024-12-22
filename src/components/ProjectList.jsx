const projects = [
  {
    title: "Bulls and cows",
    description: (
      <div>
        <p className="mb-4">
          <strong>Description:</strong> Developed a web application called
          "Bulls and Cows," where users must guess a four-digit number by
          entering their guesses. The game provides feedback on the number of
          correct digits in both the correct and incorrect positions.
        </p>
        <p>
          <strong>Technologies Used:</strong>
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>HTML:</strong> For the structure of the page.
          </li>
          <li>
            <strong>CSS:</strong> For styling the interface and creating a
            responsive design.
          </li>
          <li>
            <strong>JavaScript:</strong> For game logic, random number
            generation, and user input handling.
          </li>
        </ul>
      </div>
    ),
    github: "https://github.com/nadya-volkova/bulls-and-cows",
    liveDemo: "https://nadya-volkova.github.io/bulls-and-cows/",
    staticImage: "./images/bullsAndCows_static.png",
    gifImage: "./images/bullsAndCows.gif",
  },
  {
    title: "Minesweeper",
    description: (
      <div>
        <p className="mb-4">
          <strong>Description:</strong> Developed a Minesweeper game that
          replicates the classic puzzle experience. The game features a
          grid-based board with hidden mines, allowing players to flag potential
          mine locations and uncover safe cells. The objective is to reveal all
          non-mine cells without triggering any mines. The game includes
          features such as automatic cell expansion when a cell with no adjacent
          mines is clicked, and a win/lose condition that displays a message
          upon completion.
        </p>
        <p>
          <strong>Technologies Used:</strong>
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>HTML:</strong> For structuring the game board and cells.
          </li>
          <li>
            <strong>CSS:</strong> For styling the game, including cell
            appearance and layout.
          </li>
          <li>
            <strong>JavaScript:</strong> For implementing the game logic,
            including mine placement, cell interaction, and win/lose conditions.
          </li>
        </ul>
      </div>
    ),
    github: "https://github.com/nadya-volkova/minesweeper",
    liveDemo: "https://nadya-volkova.github.io/minesweeper/",
    staticImage: "./images/minesweeper_static.png",
    gifImage: "./images/minesweeper.gif",
  },

  {
    title: "TODO List",
    description: (
      <div>
        <p className="mb-4">
          <strong>Description:</strong> Developed a comprehensive web-based TODO
          List application that allows users to create, edit, and delete tasks.
          The app includes features for input validation, filtering tasks by
          completion status and severity level, and a search functionality to
          quickly locate specific tasks.
        </p>
        <p>
          <strong>Technologies Used:</strong>
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>React:</strong> For building the user interface and managing
            component state.
          </li>
          <li>
            <strong>Vite:</strong> For a fast development environment with
            optimized build processes.
          </li>
          <li>
            <strong>Chance:</strong> To generate random tasks for testing
            purposes.
          </li>
          <li>
            <strong>UUID:</strong> For unique task identification.
          </li>
          <li>
            <strong>CSS:</strong> For styling the application and ensuring a
            responsive layout.
          </li>
        </ul>
      </div>
    ),
    github: "https://github.com/nadya-volkova/todo-list-2",
    liveDemo: "https://nadya-volkova.github.io/todo-list-2/",
    staticImage: "./images/todoList_2_static.png",
    gifImage: "./images/todoList_2.gif",
  },
  {
    title: "Lamoda",
    description: (
      <div>
        <p className="mb-4">
          <strong>Description:</strong> Developed an interactive E-commerce
          product listing application that enables users to browse, filter, and
          sort products. The application features dynamic search capabilities,
          color selection filters, and price range adjustments, enhancing the
          user experience for product discovery.
        </p>
        <p>
          <strong>Technologies Used:</strong>
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>React:</strong> For building the user interface and managing
            component state.
          </li>
          <li>
            <strong>Custom Hooks:</strong> Implemented debouncing and throttling
            for efficient search and scroll handling.
          </li>
          <li>
            <strong>Chance:</strong> Used for generating random product data for
            testing purposes.
          </li>
          <li>
            <strong>UUID:</strong> For unique product identification.
          </li>
          <li>
            <strong>CSS:</strong> For styling the application and ensuring a
            responsive layout.
          </li>
        </ul>
      </div>
    ),
    github: "https://github.com/nadya-volkova/lamoda",
    liveDemo: "https://nadya-volkova.github.io/lamoda/",
    staticImage: "./images/lamoda_static.png",
    gifImage: "./images/lamoda.gif",
  },
  {
    title: "SPA&API",
    description: (
      <div>
        <p className="mb-4">
          <strong>Description:</strong> Developed a multi-page React application
          that allows users to explore users and albums using the
          JSONPlaceholder API. The application features dynamic routing,
          enabling users to view detailed information about individual users and
          their albums. A custom "Not Found" page enhances user experience by
          gracefully handling invalid routes.
        </p>
        <p>
          <strong>Technologies Used:</strong>
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>React:</strong> For building the user interface and managing
            component state.
          </li>
          <li>
            <strong>react-router-dom:</strong> For implementing dynamic routing
            and navigation between pages.
          </li>
          <li>
            <strong>JSONPlaceholder API:</strong> Utilized for fetching user and
            album data for display.
          </li>
          <li>
            <strong>CSS:</strong> For styling the application and ensuring a
            responsive layout.
          </li>
        </ul>
      </div>
    ),
    github: "https://github.com/nadya-volkova/spa",
    staticImage: "./images/spa_static.png",
    gifImage: "./images/spa.gif",
  },
  {
    title: "Notion",
    description: (
      <div>
        <p className="mb-4">
          <strong>Description:</strong> Developed a multi-user note-taking
          application where users can register, log in, and manage their
          personal notes. Users can create, edit, and delete notes, with
          features like dynamic routing, error handling, and a user-friendly
          interface.
        </p>
        <p>
          <strong>Technologies Used:</strong>
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>React:</strong> For building the user interface and managing
            state.
          </li>
          <li>
            <strong>Redux:</strong> For state management
          </li>
          <li>
            <strong>react-router-dom:</strong> For dynamic routing and
            navigation.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> For styling and responsive design.
          </li>
          <li>
            <strong>Zod:</strong> For data validation during registration and
            note creation.
          </li>
          <li>
            <strong>Json-Server:</strong> For simulating a backend API to store
            user and note data.
          </li>
        </ul>
      </div>
    ),
    github: "https://github.com/nadya-volkova/notion",
    staticImage: "./images/notion_static.png",
    gifImage: "./images/notion.gif",
  },
];

export default projects;
