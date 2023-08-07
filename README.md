# chart-js-app

This application is an app tht visualizes nutrinutional data of different types/brands of cereals. It is modified upon the original version on branch [feature/#3_update_coding_test]<https://github.com/supawichable/chart-js-app/tree/feature/%233_update_coding_test>.

## Implemented Features
1. Selectable Chart Axes
   Users can choose which nutritions they would like to visualize on both axes of the graph through dropdowns on top of the chart. Selectable nutritions are limited to nutrition that are numeral.

2. Data Filtering Condition
   Users can add conditions to filter down to only data they want to visualize on the chart. Implemeted conditions are `mfr` and `type`. Users can choose to filter using none, one, or both of the data. Note that the chart might becomes empty if there are no corresponded data points.

3. Fetching Data from Database
   The app is implemented so that the cereals data are fetched from a separate Postgres database container through Prisma. 

## Additional Implementation
1. Deployment to Vercel
   The app is also deployed to vercel at <https://chart-js-app-lime.vercel.app/>.

2. ESlint and Prettier
   ESlint and Prettier are both set up. To avoid conflict between the two libraries, ESlint is use for code-quality concerns while Prettier is responsible for stylistic concerns in this case.
   ESlint rules are written in `.eslintrc.json` file and can be executed using the command line `npm run lint`.
   Prettier rules are written in `.prettierrc.json` file and can be executed using the command line `npm run format`

## How to run the app without Docker
1. Execute `npm ci` in terminal.
2. Execute `npm run dev` in terminal.
3. Open <http://localhost:3000/> in your browser.

## How to run the app with Docker
1. Make sure Docker demon is alive (have the Docker app running).
2. Run `docker compose up -d`
3. Open <http://localhost:3000/> in your browser.
