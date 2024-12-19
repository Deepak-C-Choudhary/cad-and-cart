# Dog Breed App
This is a web application built with Next.js 15 and Tailwind CSS that allows users to search and view information about various dog breeds.
Features

#### Breed List: The home page displays a grid of dog breed cards, each with the breed name and a brief description.
#### Breed Details: Clicking on a breed card navigates to a page that shows detailed information about the selected breed, including life expectancy, weight range, and whether it's hypoallergenic.
#### Search Functionality: Users can search for specific dog breeds using the search bar on the home page.
#### Pagination: If there are many breeds, the home page includes pagination controls to navigate through the results.
#### Animations: The breed details page includes animations, such as a fade-in effect, to enhance the user experience.

# Technologies Used

#### Next.js 15: A React framework for building server-rendered applications.
#### Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
#### Lucide React: A set of customizable open-source icons for React.
#### Recharts: A composable charting library built on React components.

## Getting Started
### Prerequisites

#### Node.js (version 14 or higher)
    npm (version 6 or higher)

#### Installation

Clone the repository:


    https://github.com/Deepak-C-Choudhary/cad-and-cart.git

Navigate to the project directory:

    cd dog-breed-app

Install the dependencies:

    npm install

Start the development server:


            npm run dev\
            
The application should now be running at http://localhost:3000.


#### Project Structure
    dog-breed-app/
    ├── components/
    │   ├── Card.js
    │   ├── Details.js
    │   ├── Error.js
    │   └── Loader.js
    ├── pages/
    │   ├── breeds/
    │   │   └── [id].js
    │   └── index.js
    ├── styles/
    │   └── globals.css
    ├── utils/
    │   └── api.js
    ├── next.config.js
    ├── package.json
    └── tailwind.config.js

The components directory contains reusable React components.
The pages directory holds the main application pages, including the home page and the breed details page.
The styles directory contains the global CSS file.
The utils directory has the API utility functions.
The next.config.js and tailwind.config.js files are used to configure Next.js and Tailwind CSS, respectively.

#### Future Improvements

Add the ability to filter breeds by additional attributes (e.g., size, temperament).
Implement server-side rendering (SSR) for improved initial load times.
Add the ability to save favorite breeds or create a watchlist.
Integrate with a dog breed database API to fetch more comprehensive data.

 #### Contributing
If you find any issues or have suggestions for improvement, please feel free to open a new issue or submit a pull request.
License
This project is licensed under the MIT License.
