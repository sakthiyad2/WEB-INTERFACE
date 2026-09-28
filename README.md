# Web Interface

An academic collection of ten independent Web Interface projects. The root `index.html` is the project gallery; each project keeps its own source, dependencies, and configuration.

## Projects

| Project | Published path |
| --- | --- |
| Attendance | `/attendance/` |
| Calculator | `/calculator/` |
| Form Validation | `/formvalidation/` |
| Hobbies Card | `/hobbies-card/` |
| Personal Introduction | `/personal-introduction/` |
| React Portfolio | `/reactportfolio/` |
| Report | `/report/` |
| To-Do App | `/to-do-app/` |
| Counter | `/counter/` |
| Student Card | `/studentcard/` |

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds each Vite app independently, copies the two standalone HTML projects, and deploys the assembled site to GitHub Pages. It runs on pushes to `main` or `master`, or manually from the Actions tab.

In the repository's GitHub settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The expected gallery URL is `https://sakthiyad2.github.io/WEB-INTERFACE/`.

To build an individual Vite project locally, change into its project directory, install its dependencies with `npm ci`, and run `npm run build`.