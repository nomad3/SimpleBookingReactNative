# Table of contents

* [Instalation](#instalation)
* [Configuration](#configuration)
  * [Visual Studio Code](#visual-studio-code)
  * [Add-ons](#add-ons)
  * [Optionals](#optionals)
* [File Structure](#file-structure)
* [License](#license)

# Instalation

> Clone or download the repository and install the dependencies

```bash
# Clone the repository
git clone https://github.com/nomad3/SimpleBookingReactNative.git

# Go to SimpleBookingReactNative directory
cd SimpleBookingReactNative

# Install dependecies
yarn install

# Start the project with Expo
yarn start
```

Now, open Expo app on your Android or iPhone phone and scan the QR Code or go to the exp url. If you want you can start a device simulator, just follow the instructions in your console.

<img  alt="Expo starter" src="https://raw.githubusercontent.com/nomad3/SimpleBookingReactNative/master/assets/expo-console.png" class="img-responsive">

# Configuration

To ensure our work, we use [Visual Studio Code](https://code.visualstudio.com/) and a few addons that will make our work much cleaner and professional.

## Visual Studio Code

Just go to [Visual Studio Code](https://code.visualstudio.com/) webpage and download. Follow the installation instruction and that its.

## Add-ons

To install the add-ons necessary to work faster and cleaner we must go to the extension icon on the left panel and search all the add-on and installed.

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) : Automatically close tags.
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) : Spell checker that works well with camelCase code.
* [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) : Integrates ESLint into VSCode, to check in coding time the mistakes.
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) : For autocompletation filenames.
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) : Best code formater ever.

## Optionals

* [NPM](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) : For validations of installed modules.

# File Structure

The repository use the [Domain-Driven File Structure](https://medium.com/@hassan.djirdeh/domain-driven-react-redux-a474ecf7d126).

```
react-native-expo-starter/
 ├──.expo/                         * configuration for expo
 ├──src/                           * source files
 │   │
 │   ├──redux/                     * app configurations
 │   │   ├──bookingApp.js          * configurations for the reducers and actions
 │   │   └──store.js               * configurations for the store
 │   │
 │   ├──assets/                    * static assets
 │   │
 │   ├──components/                * components source
 │   │   ├──dashboard/             * dashboard component
 │   │   ├──loading/               * loading component
 │   │   └──login/                 * login component
 │   │      ├──Login.js            * login container
 │   │      ├──LoginActions.js     * login actions
 │   │      ├──LoginReducers.js    * login reducers
 │   │      └──LoginStyles.js      * login styles
 │   │
 │   ├──screens/                   * app screens
 │   │   ├──AddBooking.js          * screen to add a new booking
 │   │   └──ViewBookings.js        * screen to list bookings
 │
 ├──.babelrc                       * configuration for module-resolver and babel
 ├──.editorconfig                  * configuration for vscode
 ├──.eslintrc                      * configuration for eslint
 ├──.flowconfig                    * configuration for flow
 ├──App.js                         * initial configuration for start the project
 ├──app.json                       * configuration por expo
 ├──jsconfig.json                  * configuration for compiler
 └──package.json                   * what npm uses to manage its dependencies
```

# License

The MIT License (MIT)

Copyright (c) 2020 Simon Aguilera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.