# australia.gov.au

[![CircleCI](https://circleci.com/gh/govau/ausgov.svg?style=svg)](https://circleci.com/gh/govau/ausgov)
[![GitHub license](https://img.shields.io/github/license/govau/ausgov.svg)](https://github.com/govau/ausgov/blob/master/LICENSE)

Streamlined static site replacement for [australia.gov.au](https://www.australia.gov.au)

> Looking to add or modify site content? Follow our [Wiki guide!](https://github.com/govau/ausgov/wiki)

# Contents

-   [Prerequisites](#prerequisites)
-   [Installation](#installation)

# Prerequisites

This project prefers for you to have [NodeJS LTS](https://nodejs.org/en/) installed and preferences [Yarn](https://yarnpkg.com/lang/en/) over NPM. At the time of writing the latest stable version of Node is `v8.11.3`.

# Installation

Download the required node modules.

```node
# NPM
npm install

# Yarn
yarn install
```

# Start

Launch a local development environment with hot reloading.

```node
# NPM
npm dev

# Yarn
yarn dev
```

# Deployment

This project is a static [nginx](https://nginx.org/en/) deployment hosted on [cloud.gov.au](https://cloud.gov.au). A preview of the staging environment can be seen at: https://ausgov.apps.y.cld.gov.au/. For now, changes made to the `develop` branch are automatically published to the staging site listed above.

# Contributors

<div style="display:inline;">
  <img width="64" height="64" href="https://github.com/adamzerella" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam A. Zerella"/>
  <img width="64" height="64" href="https://github.com/BrendanCNg" src="https://avatars2.githubusercontent.com/u/36283933?s=400&v=4" alt="Brendan Ng"/>
  <img width="64" height="64" href="https://github.com/sukhrajghuman" src="https://avatars0.githubusercontent.com/u/20184809?s=400&v=4" alt="Sukhraj Ghuman"/>
</div>
